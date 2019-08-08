var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

module.exports = router;
router.get('/Paris',
function(req, res, next) {
 res.render('Paris', { title: 'Paris' });
}
);
router.get('/Nassau', function(req, res, next) {
  res.render('Nassau', { title: 'Nassau' });
   });

   router.get('/Miami', function(req, res, next) {
    res.render('Miami', { title: 'Miami' });
     });