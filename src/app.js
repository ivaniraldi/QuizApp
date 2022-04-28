require('dotenv').config();
const express = require('express');
const routes = require('./routes/app.routes');
const path = require('path');
const flash = require('connect-flash');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const passport = require('./utils/local-auth');
require('./models/users.models');
const app = express();
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded());
app.set('views', path.join(__dirname, './views'));
app.use(cookieParser())
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});
app.use('/', routes);

module.exports = app;
