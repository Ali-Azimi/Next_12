import fs from "fs";
import path from "path";

const Handler = (request, response) => {
  const { headers, body, method, query, url } = request;
  //   console.log({ headers, body, method, query, url });

  const name = request.body.name;
  const currentPath = path.resolve("public/users.csv");
  const content = `\n ${name},`;
  fs.appendFileSync(currentPath, content);

  response.status(201).send("DONE!!!");
};

export default Handler;
