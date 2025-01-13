import React from 'react';
import BlogCard from '../components/BlogCard';
import postRepository from '../repositories/PostRepository';

export default function Home() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await postRepository.getAllPosts();
      setPosts(allPosts);
    };
    loadPosts();
  }, []);

  return (
    <main className="py-12">
      <div className="container px-4">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}