const baseUrl = '/api/category';

export const getAllCategories = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addCategory = (category) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
};