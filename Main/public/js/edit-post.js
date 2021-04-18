const editFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#content').value.trim();
  
     const response = await fetch('/api/posts/${id}', {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
   
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  