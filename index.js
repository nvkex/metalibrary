const express = require('express');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3001;

// Body parser
app.use(express.json());

app.use(morgan('tiny'));

// // Static serve
// app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log('Listening on '+PORT);
});
