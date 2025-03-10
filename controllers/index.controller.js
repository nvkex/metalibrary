const { books } = require('../data');

/**
 * Send an array of all the books
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAll = (req, res) => {
    const { sortOrder, limit, skip } = req.body;
    var filteredBooks = [...books];

    // Index of last item
    var lastItemindex = filteredBooks.length - 1;

    // Sort the result
    if (sortOrder == 'asc')
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortOrder == 'desc')
        filteredBooks.sort((a, b) => b.title.localeCompare(a.title));

    // limit & skip entries for pagination
    if (limit) {
        filteredBooks = skip ? filteredBooks.slice(skip, skip + limit) : filteredBooks.slice(0, limit);
        lastItemindex = limit + (skip ? skip : 0) - 1;
    }

    res.send({ count: filteredBooks.length, lastItemindex, results: filteredBooks });
}

/**
 * Get a random object from 'books' array.
 * @param {Object} req 
 * @param {Object} res 
 * returns an object with key 'book' containing a random book data
 */
exports.getRandom = (req, res) => {

    const length = books.length;
    const randomIndex = parseInt(Math.random() * length);

    // Return the book on randomIndex
    res.send({ book: books[randomIndex] });
}


/**
 * Get list of authors
 * @param {Object} req 
 * @param {Object} res 
 * returns an object containing: count, lastItemIndex and result
 */
exports.getAuthors = (req, res) => {

    const { sortOrder, limit, skip } = req.body;

    let authors = [], lastItemindex;

    // Filter duplicate names
    books.forEach(({ author }) => {
        if (!authors.includes(author))
            authors.push(author)
    });

    // Index of last item
    lastItemindex = authors.length - 1;

    // Sort the result
    if (!sortOrder || sortOrder == 'asc')
        authors.sort();
    else if (sortOrder == 'desc')
        authors.sort((a, b) => b - a);

    // limit & skip entries for pagination
    if (limit) {
        authors = skip ? authors.slice(skip, skip + limit) : authors.slice(0, limit);
        lastItemindex = limit + skip - 1;
    }

    // Return the book on randomIndex in result key
    res.send({ count: authors.length, lastItemindex, results: authors });
}