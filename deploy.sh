#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build the application
echo "📦 Building the application..."
npm run build

# Create necessary directories on the server
echo "📁 Creating directories on server..."
ssh dokploy "mkdir -p /var/www/vres-mastora"

# Copy files to server (excluding node_modules, .next, and other unnecessary files)
echo "📤 Copying files to server..."
rsync -avz --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '.env' \
    --exclude 'deploy.sh' \
    ./ dokploy:/var/www/vres-mastora/

# Copy environment variables
echo "🔑 Copying environment variables..."
scp .env dokploy:/var/www/vres-mastora/

# Copy Nginx configuration
echo "🌐 Copying Nginx configuration..."
scp nginx.conf dokploy:/etc/nginx/sites-available/vres-mastora

# Enable the site
echo "🔗 Enabling Nginx site..."
ssh dokploy "ln -sf /etc/nginx/sites-available/vres-mastora /etc/nginx/sites-enabled/ && nginx -t && systemctl reload nginx"

# Install dependencies and restart the application on the server
echo "🔄 Installing dependencies and restarting application..."
ssh dokploy "cd /var/www/vres-mastora && \
    npm install --production && \
    pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js"

echo "✅ Deployment completed successfully!" 