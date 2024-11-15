const { default: useSWR } = require("swr");

const StudentsPage = () => {
  const { data, error } = useSWR({ url: "/students", method: "POST" });

  if (!data) return <h1>LOADING ...</h1>;

  return (
    <>
      <h3>STUDENTS</h3>
      <br />
      <ul>
        {data.map((std) => (
          <li key={std}>{std}</li>
        ))}
      </ul>
    </>
  );
};

export default StudentsPage;
