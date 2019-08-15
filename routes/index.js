var express = require('express');
var router = express.Router();

//npm module für Http-Requests zu transport.opendata.ch
let axios = require('axios');

//URL zum transport.opendata.ch Schnittstelle
const URL = 'http://transport.opendata.ch/v1/locations';


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/**
 * @param req beinhaltet den parameter in der url
 */
router.get('/locations', function(req, res) {

    /**
     * Http-Request zur SBB API
     */
    axios.get(`${URL}?query=${req.query.query}`)
        .then((loc) => {
            /**
             * Wenn die Anfrage erfolgreich ist, werden nur die Daten zum Front-End weitergeleitet
             */
            res.send(loc.data);
        })
        .catch((err) => res.status(err))
});

module.exports = router;
