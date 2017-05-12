var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express' });
});

router.get('/search', (req, res) => {
      res.json([{
        title: "Titulo 1 sdasdas"
      },{
        title: "Titulo 2"
      }
      ]);
});

module.exports = router;
