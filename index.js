const express = require('express');
const morgan = require('morgan');

const indexRoutes = require('./routes/index.route');


const app = express();
const PORT = process.env.PORT || 3001;

// Body parser
app.use(express.json());

app.use(morgan('tiny'));

// // Static serve
// app.use(express.static('./public'));

// Routes
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log('Listening on '+PORT);
});
