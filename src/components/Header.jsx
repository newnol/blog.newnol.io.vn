import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-800">
      <div className="container px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-500">Newnol Blog</Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}