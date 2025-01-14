const metadata = await fetch('/data/posts/metadata.json').then(res => res.json());

class PostRepository {
  async getAllPosts() {
    return metadata.posts;
  }

  async getPostBySlug(slug) {
    const post = metadata.posts.find(p => p.slug === slug);
    if (!post) return null;

    try {
      const response = await fetch(`/data/posts/${slug}.md`);
      const content = await response.text();
      return { ...post, content };
    } catch (error) {
      console.error('Error loading post content:', error);
      return null;
    }
  }
}

// Singleton instance
const postRepository = new PostRepository();
export default postRepository;