
var express = require('express'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    db = mongoose.connect('mongodb://localhost:27017/users');

var User = require('./models/user_model');

var app = express(),
    port = process.env.PORT || 8080,
    router = express.Router();

app.listen(port);

app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/public'));

app.use('/', router);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.route('/')
    .get(function(req, res) {
        res.render('index', {
            title: "eharmony test api"
        })
    });
router.route('/users')
    .post(function(req, res){
        var user = new User(req.body);
        user.save();
        res.status(201).send(user);
    })
    .get(function(req, res) {
        User.find(function(err, users){
            if(err) {
                console.log(err)
            } else {
                res.render('users', {
                    users: users
                });
            }
        })
    })
router.route('/users/:userid')
    .get(function(req, res) {
        User.findById(req.params.userid, function(err, user){
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(user);
            }
        })
    })
    .put(function(req, res) {
        User.findById(req.params.userid, function(err, user){
            if(err) {
                res.status(500).send(err);
            } else {
                user.name       = req.body.name,
                user.gender     = req.body.gender,
                user.company    = req.body.company,
                user.email      = req.body.email,
                user.registered = req.body.registered

                user.save();
                res.json(user);
            }
        })
    })
    .delete(function(req, res) {
        User.findById(req.params.userid, function(err, user){
            user.remove();
            res.status(200).send('deleted') 
        })
    });

console.log('Starting on ' + port);