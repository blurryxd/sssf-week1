'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const user_get = (id) => {
    return users.filter(users => users.id === id);
};

const user_list_get = (req, res) => {
    res.json(users);
};

module.exports = {
    user_list_get,
    user_get,
};