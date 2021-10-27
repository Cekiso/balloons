let express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const balloon = require('./the-balloon-shop');


const pg = require('pg');
const Pool = pg.Pool;

let app = express();

// should we use a SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://nkully:nkully@localhost:5432/the';

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }

});
const balloonColor = balloon(pool);


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// initialise session middleware - flash-express depends on it
app.use(session({
    secret: "<add a secret string here>",

    resave: false,
    saveUninitialized: true
}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false

}));

// parse application/json
app.use(bodyParser.json())

// initialise the flash middleware
app.use(flash());
app.get('/', async function(req, res) {
    res.render('/index', {

    })
})
app.post('/Ballon', async function(res, req) {

})
let PORT = process.env.PORT || 3044;

app.listen(PORT, function() {
    console.log('App starting on port', PORT);
});