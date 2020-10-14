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
        title: 'A Set of Six',
        author: 'Joseph Conrad',
        genre: [' Classic ', 'Literature', 'Non-Fiction'],
        ISBN: '9781519559296',
        ref: [
            'https://archive.org/stream/setofsix00conr?ref=ol'
        ],
        DeweyDecimal: null,
        summary: 'The stories in this collection are the result of many years of hard work. Covering a long span of time all of these are based on real-life events. Covering multifarious aspects of life this work is bound to engross and interest the readers. Conrad\'s realism combined with the differing experiences has produced this enduring work.'
    }
];

module.exports = { books };
