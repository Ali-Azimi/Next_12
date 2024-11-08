const Handler = (req, res) => {
  res.revalidate("/posts");
  res.send("SUCCESSFULY REVALIDATE!!!");
};

export default Handler;
