

export function getUser() {
  let local = localStorage.getItem('user');
  let user;
  if (local) {
    user = JSON.parse(local);
  } else {
    localStorage.setItem('user', JSON.stringify({}));
    user = JSON.parse(localStorage.getItem('user'));
  }
  return { type: 'RECEIVE_USER', user }
}


export function updateUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
  return { type: 'RECEIVE_USER', user };
}
