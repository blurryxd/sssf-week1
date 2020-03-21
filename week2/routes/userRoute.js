'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer();

router.route('/')
    .get(userController.user_list_get)
    .post(upload.array(), (req, res) => {
        console.log(req.body)
    })
    .put((req, res) => {
        res.send('With this endpoint you can edit users.')})
    .delete((req, res) => {
        res.send('With this endpoint you can delete users.')});

router.get('/:id', (req, res) => {
    res.send(userController.user_get(req.params.id))
});

module.exports = router;