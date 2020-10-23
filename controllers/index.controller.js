const { books } = require('../data');

/**
 * Send an array of all the books
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAll = (req,res) => {
    res.send({books});
}

exports.getRandom = (req, res) => {

    const length = books.length;
    console.log(length)
    const randomIndex = Math.random() * length;
    console.log(randomIndex)
    res.send({book: books[randomIndex]});
}