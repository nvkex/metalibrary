const { books } = require('../data');

/**
 * Send an array of all the books
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAll = (req,res) => {
    res.send({books});
}