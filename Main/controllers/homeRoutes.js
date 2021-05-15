const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    //delete console.log
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard/new', async (req, res) => {
  try {

    res.render('new-post', {

      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User]
        }
        // {
        //   model: Comment,

        // },
      ],
    });
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('single-post', { post })
    } else {
      res.status(404).end()
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

//Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Post },
        { model: Comment }
      ],
    });

    const user = userData.get({ plain: true });
    const postLength = user.posts.length
    res.render('dashboard', {
      user,
      logged_in: true,
      postLength
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/edit/:id', withAuth, async (req, res) => {
// try {
//   const userData = await User.findByPk(req.session.user_id, {
//     attributes: { exclude: ['password'] },
//     include: [
//       { model: User },
//       { model: Comment}
//     ],
//   });

//   const user = userData.get({ plain: true });
//     const postLength = user.posts.length
//     res.render('dashboard', {
//       user,
//       logged_in: true,
//       postLength
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
// }
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
