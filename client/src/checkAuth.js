export default () => {
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
    console.log(res);
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}