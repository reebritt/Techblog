// const deleteFormHandler = async (event) => {
//     event.preventDefault();
  
// const id = window.location.toString().split('/')[
//     window.location.toString.split('/').length - 1
// ];


// //const delButtonHandler = async (event) => {
// //    if (event.target.hasAttribute('data-id')) {
// //      const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE',
//         body: JSOM.stringify({ post_id: id }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
    

  //  document.querySelector('.delete-post-btn').addEventListener('submit', deleteFormHandler);
  const deletePost = async (event) => { 
    event.preventDefault();
      const postId = event.target.getAttribute('data-id');
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to delete post');
      }
  };

  document.querySelector('.btn-deletePost')
  .addEventListener('click', deletePost);