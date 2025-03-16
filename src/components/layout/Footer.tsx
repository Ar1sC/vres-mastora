import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Connecting professionals with customers for quality services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/search" className="text-gray-300 hover:text-white">
                  Find Services
                </a>
              </li>
              <li>
                <a href="/professionals" className="text-gray-300 hover:text-white">
                  Browse Professionals
                </a>
              </li>
              <li>
                <a href="/register" className="text-gray-300 hover:text-white">
                  Become a Professional
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@saas-marketplace.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SaaS Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 