import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'List of all blog posts',
};

type Post = {
  title: string;
  id: string;
};

const BlogPage = async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  const posts: Post[] = data.posts;
  return (
    <div>
      <h1>List of Blog Posts</h1>
      {posts.map((post: Post) => {
        return (
          <h4 key={post.id}>
            <Link href={`/blog/${post.id}`}> {post.title}</Link>
          </h4>
        );
      })}
    </div>
  );
};

export default BlogPage;
