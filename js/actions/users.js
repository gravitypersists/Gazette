import Firebase from 'firebase';
const ref = new Firebase('https://gazette.firebaseio.com/collections/-K2cgVa8Ys1uYoyN8PJo');

export function getUser() {
  let local = localStorage.getItem('user');
  let user;
  if (local) {
    user = JSON.parse(local);
  } else {
    let newEntry = ref.child('entries').push({});
    localStorage.setItem('user', JSON.stringify({entry: newEntry.key()}));
    user = JSON.parse(localStorage.getItem('user'));
  }
  return { type: 'RECEIVE_USER', user }
}


export function updateUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
  return { type: 'RECEIVE_USER', user };
}
