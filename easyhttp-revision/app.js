const http = new easyHTTP;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//   if(error) {
//   console.log(error);
//   } else {
//   console.log(posts);
//   }
// });

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Posts
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, posts){
//   if(error) {
//     console.log(error);
//     } else {
//     console.log(posts);
//     }
// });

// Update Posts
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, posts) {
//   if(error) {
//     console.log(error);
//     } else {
//     console.log(posts);
//     }  
// });

// Delete Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
  if(error) {
    console.log(error);
    } else {
    console.log(response);
    }  
});
