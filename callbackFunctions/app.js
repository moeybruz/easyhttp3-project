const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// WITHOUT CALLBACK FUNCTION - SYNC

// function createPosts(post){
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPosts({title: 'Post Three', body: 'This is post three'});

// getPosts();



// WITH CALLBACK FUNCTION - ASYNC

function createPosts(post){
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = true;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }

    }, 2000);
  });
}


function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPosts({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
