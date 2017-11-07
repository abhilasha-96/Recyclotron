var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* To get the express page */
router.get('/', function(req, res, next) {
  res.write('<h1>Express is running</h1><br><h2>Go to /recyclotron to view website</h2>');
});

/*For the homepage*/
router.get('/recyclotron', function(req, res, next) {
  res.render('homepage');
});

/*For the signup page*/
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/*For the projects page*/
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/*For the about us page*/
router.get('/blog', function(req, res, next) {
  res.render('blog');
});

/*For the form page*/
router.get('/laptop', function(req, res, next) {
  res.render('laptopForm');
});

/*For the signup page*/
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/*For the schedule a meeting page*/
router.get('/ContactUs', function(req, res, next) {
  res.render('ContactUs');
});




module.exports = router;
