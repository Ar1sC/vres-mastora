'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Service {
    id: string;
    title: string;
    price: number;
    description: string;
    provider: {
        name: string;
        rating: number;
    };
}

// Reusable Rating component
const Rating = ({ value }: { value: number }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < value ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// Reusable ServiceCard component
const ServiceCard = ({ service }: { service: Service }) => {
    const [isBooking, setIsBooking] = useState(false);

    const handleBooking = async () => {
        setIsBooking(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsBooking(false);
        // Handle booking logic
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm text-gray-500">Provided by {service.provider.name}</p>
                    <Rating value={service.provider.rating} />
                </div>
                <p className="text-2xl font-bold">€{service.price}</p>
            </div>
            <button
                onClick={handleBooking}
                disabled={isBooking}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
                {isBooking ? 'Processing...' : 'Book Now'}
            </button>
        </div>
    );
};

// Main Services Page component
export default function ServicesPage() {
    const searchParams = useSearchParams();
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || 'all',
        minPrice: '',
        maxPrice: '',
    });

    // Mock data - would come from API in real app
    const services: Service[] = [
        {
            id: '1',
            title: 'Professional Plumbing Service',
            price: 80,
            description: 'Expert plumbing repairs and installations',
            provider: { name: 'John Smith', rating: 4.5 }
        },
        {
            id: '2',
            title: 'Electrical Maintenance',
            price: 95,
            description: 'Complete electrical services for your home',
            provider: { name: 'Maria Garcia', rating: 5 }
        },
        // Add more services as needed
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Filters Section */}
            <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        className="border rounded-md p-2"
                    >
                        <option value="all">All Categories</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="cleaning">Cleaning</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                        className="border rounded-md p-2"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                        className="border rounded-md p-2"
                    />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
} 