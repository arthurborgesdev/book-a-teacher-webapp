const setToLocalStorage = (data) => {
  localStorage.setItem('username', JSON.stringify(data));
};

export {
  setToLocalStorage as default,
};
