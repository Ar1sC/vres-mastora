import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const popularCategories = [
  { id: 1, name: 'Home Maintenance', icon: '🏠' },
  { id: 2, name: 'Electrical Services', icon: '⚡' },
  { id: 3, name: 'Plumbing', icon: '🔧' },
  { id: 4, name: 'Cleaning', icon: '🧹' },
  { id: 5, name: 'Painting', icon: '🎨' },
  { id: 6, name: 'Gardening', icon: '🌿' },
];

const Home: NextPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Find Trusted Professionals
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Connect with skilled professionals for all your service needs
            </p>
            <div className="mt-8">
              <Link
                href="/search"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {popularCategories.map((category) => (
              <Link
                key={category.id}
                href={`/search?category=${encodeURIComponent(category.name)}`}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4">{category.icon}</span>
                <span className="text-gray-900 font-medium text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Service</h3>
              <p className="text-gray-600">
                Browse through our categories and find the service you need
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Professional</h3>
              <p className="text-gray-600">
                Compare professionals, read reviews, and select the best match
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Pay</h3>
              <p className="text-gray-600">
                Schedule the service and pay securely through our platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 