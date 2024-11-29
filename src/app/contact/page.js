
export const revalidate = 200;

const ContactUs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
        revalidate: 100
    }
  });
  const data = await response.json();

  return (
    <>
      <h1>CONTACT US</h1>
      {data?.map((post) => {
        return (
          <div key={post.id}>
            <p>id: {post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default ContactUs;
