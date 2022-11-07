export let users = [];

export function createUser(firstName, lastName, age, workAt) {
  const user = {
    firstName,
    lastName,
    age,
    workAt,
  };
  users.push(user);
  return user;
}

export function findAllUsers() {
  return users;
}
export function findUserById(id) {
  return users.find((user) => user.id === id);
}
export function findUsers(params) {
  return users.filter((user) => {
    let isMatch = true;
    for (const key in params) {
      if (user[key] !== params[key]) {
        isMatch = false;
        break;
      }
    }
    return isMatch;
  });
}

export function updateUserById(id, payload) {
  let updateUsers = [];
  users = users.map((user) => {
    if (user.id === id) {
      const updateUser = { ...user, ...payload };
      updateUsers.push(updateUser);
      return updateUser;
    }
    return user;
  });
  return updateUsers;
}
export function updateUsers(searchParams, payload) {
  const users = findUsers(searchParams);
  for (const user of users) {
    updateUserById(user.id, payload);
  }
  return users;
}

export function deleteUserById(id) {
  users = users.filter((user) => user.id !== id);
}
export function deleteUsers(searchParams) {
  const users = findUsers(searchParams);
  for (const user of users) {
    deleteUserById(user.id);
  }
  return users;
}

// For unit tests only
export function reset() {
  users = [];
}
