const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
//input update

router.put('/:id', withAuth, async (req, res) => {
  try {
    const editPost = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletePost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/updatePost', (req, res) => {
//   if (!req.session.logged_in) {
//     res.redirect('/login');
//     return;
//   }

//   res.render('updatePost');
// });
module.exports = router;
