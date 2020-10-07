const express = require('express');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan());

app.listen(PORT, () => {
    console.log('Listening on '+PORT);
});
