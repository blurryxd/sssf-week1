'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

passport.authenticate('jwt', {session: false});

router.route('/')
    .get(catController.cat_list_get)
    .post(upload.single('cat'),(req, res) => {

    })
    .put((req, res) => {
    res.send('With this endpoint you can edit cats.')})
    .delete((req, res) => {
    res.send('With this endpoint you can delete cats.')});

router.get('/:id', (req, res) => {
    res.send(catController.cat_get(req.params.id))
});

module.exports = router;