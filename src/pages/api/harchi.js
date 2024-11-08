function Harchi(request, response) {
  response.revalidate('/posts');
}

export default Harchi;
