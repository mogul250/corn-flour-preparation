// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePages = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const links = [
    { name: ' Ibishyashya', path: '/Ibishyashya' },
    { name: 'Gutunganya', path: '/Gutunganya'},
    { name: ' ibyagurishijwe', path: '/ibyagurishijwe' },
    { name: ' ibisanzwe', path: '/ibisanzwe' },
    { name: ' ibyasohotse', path: '/ibyasohotse' },
    { name: ' Ibinjiye', path: '/Ibyinjiye' },
    
  ];

  // Filter links based on search query
  const filteredLinks = links.filter(link =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="d-flex flex flex-col items-center justify-center min-h-screen bg-indigo-100 px-4">
      <h1 className="d-flex text-center text-4xl font-bold text-indigo-700 mb-8">RAPORO YURUGANDA</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="d-flex flex mb-8 px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      {/* Filtered Links Display */}
      <div className="space-y-4 w-full md:w-auto md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        {filteredLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="d-flex flex px-6 py-3 text-lg font-semibold text-indigo-600 bg-white rounded-lg shadow-md hover:bg-indigo-50 text-center"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePages;
