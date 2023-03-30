const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require('path');
const axios = require('axios');
const client = require("@mailchimp/mailchimp_marketing");
const mongoose = require('mongoose');
const i18next = require('./i18n.js');
const i18nextMiddleware = require('i18next-http-middleware');

mongoose.connect('mongodb+srv://bewinner2:59595653q!@cluster0.qcwsa7a.mongodb.net/test2');
const Person = mongoose.model('person', { name: String, email: String });

const app = express();

// // Use i18next middleware
app.use(i18nextMiddleware.handle(i18next));


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
    console.log(i18next.t('greeting')); 
    console.log(i18next.t('farewell')); 
    // res.render('index', { greeting: req.t('greeting') });
});

app.post('/', function (req, res) {
    const email = req.body.email; // Extract email from form submission
    const name = req.body.name;

    console.log(email);
    console.log(name);


    const human = new Person({ name: name, email: email });
    human.save().then(() => console.log('WOW!! '));

    console.log(`Received sign-up request for email ${email}`); // Log the email address
    // Send response to client
    res.send(`<p>Thanks for signing up! We'll send updates to ${email}.</p>`);

});

app.listen(3000, function () {

    console.log("server is running on port 3000");

})

