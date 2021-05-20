
console.log("deletepostjs connected")
const postId = document.querySelector('input[name="post-id"]').value
const deletePost = async function () {
  await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });
  document.location.replace(`/dashboard`);
  console.log("deleted")
}

document.querySelector('.btn-deletePost')
  .addEventListener('click', deletePost);