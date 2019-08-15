var express = require('express');
var router = express.Router();

//npm module für Http-Requests zu transport.opendata.ch
let axios = require('axios');

//URL zum transport.opendata.ch Schnittstelle
const URL = 'http://transport.opendata.ch/v1/locations';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @param req beinhaltet den parameter in der url
 */
router.get('/locations', function(req, res, next) {

    /**
     * Http-Request
     */
    axios.get(`${URL}?query=${req.query.query}`)
        .then((loc) => {
            console.log(loc.data);

            res.send(loc.data);
        })
        .catch((err) => res.send(err))
});

module.exports = router;
