const router = require('express').Router();
const postController = require('../controles/postList');


router.post("/api/createPost", postController.addPost);
module.exports = {routerPost : router};

