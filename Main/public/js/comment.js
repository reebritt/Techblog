const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString.split('/').length - 1
  ];

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, comment }),
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


document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

}