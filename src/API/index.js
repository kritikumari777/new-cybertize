
export const getUsers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

