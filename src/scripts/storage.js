export const setToLocalStorage = (data) => {
  localStorage.setItem('username', JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const username = localStorage.getItem('username');
  return JSON.parse(username);
};
