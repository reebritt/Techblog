// // const editFormHandler = async (event) => {
// //   event.preventDefault();


// //   //Collect values from the login form
// //   const title = document.querySelector('input[name="post-title"]').value;
// //   const body = document.querySelector('textarea[name="post.content"]').value.trim();
// // console.log(title, body)
// //   router.get('/edit-post/:id', function (req, res, next) {
// //     const id = req.params.id;
// //     const sql = `SELECT * FROM post WHERE id=${id}`;
// //     db.query(sql, function (err, rows, fields) {
// //       res.render('edit-post', { title, body });
// //     });
// //   });

// //   const response = await fetch(`/api/posts/${id}`, {
// //     method: 'PUT',
// //     body: JSON.stringify({ title, body }),
// //     headers: { 'Content-Type': 'application/json' },
// //   });

// //   if (response.ok) {
// //     document.location.replace('/dashboard');
// //   } else {

// //     alert(response.statusText);
// //   }
// // }

// // document.querySelector('#updatePost').addEventListener('submit', editFormHandler);


// // const edit-post = async (event) => {
// //   // Stop the browser from submitting the form so we can do so with JavaScript
// //   event.preventDefault();
// const editFormHandler = async (event) => {
//   event.preventDefault();

//   // Gather the data from the form elements on the page
//   const title = document.querySelector('#title-input').value.trim();
//   const description = document.querySelector('#description-input').value.trim();
//   const postId = event.target.getAttribute('post-id');
//   console.log(`the ${title} and ${description}`);
//   console.log(`the ${postId}`);


//   if (title && description) {
//     // Send the e-mail and password to the server
//     const response = await fetch(`/api/posts/${postId}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, description }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace(`/dashboard`);
//     } else {
//       alert('Failed to update the post');
//     }
//   }
// };

// // document
// //   .querySelector('.btn-form-update')
// //   .addEventListener('click', edit-post);

// document.querySelector('#edit-post').addEventListener('submit', editFormHandler);

const updatePost = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const title = document.querySelector('#title-input').value.trim();
  const description = document.querySelector('#description-input').value.trim();
  const postId = event.target.getAttribute('post-id');
  console.log(`the ${title} and ${description}`);
  console.log(`the ${postId}`);


  if (title && description) {
    // Send the e-mail and password to the server
    const response = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to update the post');
    }
  }
};

document
  .querySelector('.btn-form-update')
  .addEventListener('click', updatePost);