export const saveData = (content) => {
  const bodyData = JSON.stringify(content);

  fetch("http://localhost:5000/saveOrder", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: bodyData,
  });
};
