const deleteFormHandler = async (event) => {
    event.preventDefault();
  
const id = window.location.toString().split('/')[
    window.location.toString.split('/').length - 1
];


//const delButtonHandler = async (event) => {
//    if (event.target.hasAttribute('data-id')) {
//      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }


   document.querySelector('.delete-post-btn').addEventListener('submit', deleteFormHandler);
  