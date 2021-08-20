const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err =>console.log(err));

// User Data
const data = {
  name: 'Shannah Key',
  username: 'skey',
  email: 'skey@aol.com'
}

// Post Users
  // http.post('https://jsonplaceholder.typicode.com/users', data)
  //   .then(data => console.log(data))
  //   .catch(err =>console.log(err));

// Update Users
  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  // .then(data => console.log(data))
  // .catch(err =>console.log(err));

  // Delete Users
  http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err =>console.log(err));