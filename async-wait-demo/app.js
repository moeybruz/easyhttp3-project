async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;
  if(!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(error => console.log(error));




// USING FETCH //

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = response.json();

  return data;
}

getUsers().then(users => console.log(users));