import { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:3000/api/users?brand=1", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: "Reza" }),
    });
  };

  return (
    <>
      <h1>Users</h1>
    </>
  );
};

export default Users;
