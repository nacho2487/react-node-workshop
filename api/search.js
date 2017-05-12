const express = require('express');
const router = express.Router();
const request = require('request-promise')
const baseURL = 'https://api.mercadolibre.com/';
const action = 'sites/MLA/search';
const limitSearch = 6;

router.get('/search', (req, res) => {
      const query = {
          q: req.query.q,
          limit: limitSearch
      };
      request({
        uri: baseURL + action,
        qs: query,
        json: true
      }).then((items) => {
        res.json(items.results);
      });
});

module.exports = router;
