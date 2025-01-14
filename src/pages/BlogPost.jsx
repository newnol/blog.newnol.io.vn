import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import postRepository from '../repositories/PostRepository';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPost = async () => {
      const postData = await postRepository.getPostBySlug(slug);
      if (!postData) {
        navigate('/');
        return;
      }
      setPost(postData);
      setLoading(false);
    };
    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="container px-4 py-12">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-700 rounded-lg mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-1/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container px-4 py-12">
        <h1 className="text-2xl font-bold">Bài viết không tồn tại</h1>
      </div>
    );
  }

  return (
    <article className="container px-4 py-12 animate-fade-in">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <div>
        <a href="123">asdasdasd</a>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center mb-8">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="font-medium">{post.author.name}</p>
            <p className="text-gray-400">{post.author.role}</p>
            <p className="text-indigo-400 text-sm">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>

        <div className="prose prose-invert prose-indigo max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}