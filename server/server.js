const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const feedbackRouter = require('./Router/feedback.router.js');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedbackRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});