const newFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#content').value.trim();
    const postId = event.target.getAttribute('post-id');
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
 
  if (document.querySelector('#new-post-form')){
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
  }