const editFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#content').value.trim();
  
    router.get('/edit-post/:id', function(req, res, next) {
      const id = req.params.id;
      const sql = `SELECT * FROM post WHERE id=${id}`;
      db.query(sql, function(err, rows, fields) {
          res.render('editform', {title, body });
      });
    });

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
  
  