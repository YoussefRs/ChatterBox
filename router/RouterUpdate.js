const router = require('express').Router();
const updateController = require('../controles/UpdateList');


router.put("/api/updatePost/:id", updateController.updatePost);
module.exports = {routerUpdate : router};