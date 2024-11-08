const PostsPage = ({ posts }) => {
  return (
    <>
      <h1>ALL POSTS</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <span>id: {post.id}</span>
            <h2>{post.title}</h2>
            <span>author: {post.userId}</span>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
      props: {
        posts: data,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (err) {
    console.log(err);
  }
}

export default PostsPage;
