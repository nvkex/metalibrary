/**
 * This array contains all the data of books in the API
 * Append new titles to this array without adding any extra keys.
 * Raise an issue to add an extra key (Field).
 */
const books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre: ['Quest', 'Adventure', 'Fantasy'],
        ISBN: '0-06-250217-4',
        ref: [
            'https://en.wikipedia.org/wiki/The_Alchemist_(novel)'
        ],
        DeweyDecimal: 869.3,
        summary: 'The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: ['Novel', 'Adventure', 'Fiction'],
        ISBN: '9780679783275',
        ref: [
            'https://en.wikipedia.org/wiki/Moby-Dick'
        ],
        DeweyDecimal: 813.3,
        summary: 'This book is the sailor Ishmael\'s narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship\'s previous voyage bit off Ahab\'s leg at the knee.'
    },
    {
        title: 'A set of six',
        author: ' Joseph Conrad',
        genre: [' Classic ', 'Literature', 'Fiction'],
        ISBN: 'OL17936121M',
        ref: [
            'https://archive.org/stream/setofsix00conr?ref=ol'
        ],
        DeweyDecimal: 813.3,
        summary: 'The six stories in this volume are the result of some three or four years of occasional work. The dates of their writing are far apart, their origins are various. None of them are connected directly with personal experiences. In all of them the facts are inherently true, by which I mean that they are not only possible but that they have actually happened. For instance, the last story in the volume, the one I call Pathetic, whose first title is Il Conde (misspelt by-the-by) is an almost verbatim transcript of the tale told me by a very charming old gentleman whom I met in Italy.'
    }
];

module.exports = { books };
