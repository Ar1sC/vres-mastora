module.exports = {
  apps: [
    {
      name: 'vres-mastora',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}; 