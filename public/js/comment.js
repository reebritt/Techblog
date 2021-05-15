const commentFormHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector('#comment').value.trim();
  const post_id = parseInt(document.querySelector('.comment').getAttribute('data-post_id'));

  if (body) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to update comment');
    }
  }
}

document.querySelector('.comment').addEventListener('click', commentFormHandler);

