const userRoutes = require('express').Router();
const userRegisterCtrl = require('../../controllers/userRegisterCtrl');
const userLoginCtrl = require('../../controllers/userLoginCtrl');

module.exports = function (db, callback) {
  userRoutes.use(function (req, res, next) {
    req.db = db;
    next()
  })
  userRoutes.post('/register', userRegisterCtrl.register);
  userRoutes.post('/login', userLoginCtrl);
  callback(null,userRoutes);
};