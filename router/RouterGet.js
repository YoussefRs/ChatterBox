const router = require('express').Router();
const getController = require('../controles/getList')

router.get("/api/getPost", getController.getPost);
module.exports = {routerGet : router};