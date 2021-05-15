const editFormHandler = async (event) => {
  event.preventDefault();


  //Collect values from the login form
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post.content"]').value.trim();
console.log(title, body)
  router.get('/edit-post/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM post WHERE id=${id}`;
    db.query(sql, function (err, rows, fields) {
      res.render('edit-post', { title, body });
    });
  });

  const response = await fetch(`/api/posts/${id}`, {
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

document.querySelector('#updatePost').addEventListener('submit', editFormHandler);

