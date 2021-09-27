const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a POST route to add a new guest to the database
router.post('/', (req, res) => {
    const addFeedback = req.body;
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [addFeedback.feeling, addFeedback.understanding, addFeedback.support, addFeedback.comments])
        .then((result) => {
            console.log(`Added feedback to the database`, );
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        });
});

router.get('/', (req, res) => {
    console.log('GET previous feedback');
    pool.query('SELECT * FROM feedback;')
    .then( (result) => {
        res.send(result.rows)
    }).catch( err => {
        console.log('Error in get', err);
        res.sendStatus(500);
    });
});

module.exports = router;