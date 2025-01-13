import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-indigo-400 text-sm">{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          <h2 className="text-xl font-semibold mt-2 mb-4">{post.title}</h2>
          <p className="text-gray-400 mb-4">{post.excerpt}</p>
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}