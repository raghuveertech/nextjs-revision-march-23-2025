type BlogDetailsProps = {
  params: Promise<{ postId: string }>;
};

const getBlogDetails = async (props: BlogDetailsProps) => {
  const params = await props.params;
  const postId = params.postId;
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const blogDetails = await response.json();
  return blogDetails;
};

export const generateMetadata = async (props: BlogDetailsProps) => {
  const blogDetails = await getBlogDetails(props);
  const blogTitle = blogDetails.title;
  return {
    title: `Blog Details - ${blogTitle}`,
  };
};

const BlogDetails = async (props: BlogDetailsProps) => {
  const blogDetails = await getBlogDetails(props);
  const blogTitle = blogDetails.title;
  return (
    <div>
      <h1> {blogTitle} </h1>
    </div>
  );
};

export default BlogDetails;
