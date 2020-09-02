export const checkAuth = () => {
  const token =  localStorage.getItem('token');
  if (!token) {
    return Promise.resolve(false);
  }
  return fetch('/api/users/auth', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    }
    return false;
  });
}

export const getAllUsers = () => {
  return fetch('api/users/allUsers');
}
