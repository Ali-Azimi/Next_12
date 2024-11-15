const apiLog = (body) => {
  fetch("http://localhost:3000/api/logs", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
};


export default apiLog;