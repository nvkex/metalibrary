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
    },
    {
        title: 'Mein Kampf',
        author: 'Adolf Hitler',
        genre: ['Autobiography ', 'Non-Fiction'],
        ISBN: '9780395951057',
        ref: [
            'https://en.wikipedia.org/wiki/Mein_Kampf'
        ],
        DeweyDecimal: 943.086092,
        summary: 'Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany.'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: ['Tragedy ', 'Realism', 'Modernism', 'Social Satire'],
        ISBN: ' 9780743273565',
        ref: [
            'https://en.wikipedia.org/wiki/The_Great_Gatsby'
        ],
        DeweyDecimal: null,
        summary: 'The story of the book primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession to reunite with his ex-lover, the beautiful former debutante Daisy Buchanan.'
    },
    {
        title: 'Memoirs of a Geisha',
        author: 'Arthur Golden',
        genre: ['Historical', 'Fiction', 'Novel'],
        ISBN: '9780679781585',
        ref: [
            'https://en.wikipedia.org/wiki/Memoirs_of_a_Geisha'
        ],
        DeweyDecimal: 813,
        summary: 'The novel, told in first person perspective, tells the story of a fictional geisha working in Kyoto, Japan, before, during, and after World War II and ends with her being relocated to New York City.'
    },
    {
        title: 'Pierre; or, The Ambiguities',
        author: 'Herman Melville',
        genre: ['Psychological', 'Fiction', 'Novel', 'Gothic'],
        ISBN: '9780140434842',
        ref: [
            'https://en.wikipedia.org/wiki/Pierre;_or,_The_Ambiguities'
        ],
        DeweyDecimal: null,
        summary: 'The novel, which uses many conventions of Gothic fiction, develops the psychological, sexual, and family tensions between Pierre Glendinning; his widowed mother; Glendinning Stanley, his cousin; Lucy Tartan, his fiancée; and Isabel Banford, who is revealed to be his half-sister.'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: ['Classic', 'Regency', 'Novel', 'Romance', 'Fiction', 'Gothic'],
        ISBN: '9780451479914',
        ref: [
            'https://en.wikipedia.org/wiki/Pride_and_Prejudice'
        ],
        DeweyDecimal: 823.7,
        summary: 'The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.'
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        genre: ['Horror' 'Science Fiction', 'Novel', 'Fiction', 'Gothic'],
        ISBN: '9780553212471',
        ref: [
            'https://en.wikipedia.org/wiki/Frankenstein'
        ],
        DeweyDecimal: 823.7,
        pages: 280,
        summary: 'Frankenstein or The Modern Prometheus is an 1818 novel written by English author Mary Shelley that tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.'
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        genre: ['Comic' 'Science Fiction', 'Novel', 'Fiction'],
        ISBN: '9780345391803',
        ref: [
            'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy_(novel)'
        ],
        DeweyDecimal: null,
        pages: 224,
        summary: 'The Hitchhiker\'s Guide to the Galaxy follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the Earth by a Vogon constructor fleet to make way for a hyperspace bypass. Dent is rescued from Earth\'s destruction by Ford Prefect—a human-like alien writer for the eccentric, electronic travel guide The Hitchhiker\'s Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who had been taken from Earth (prior to its destruction) by the two-headed President of the Galaxy Zaphod Beeblebrox and the depressed Marvin, the Paranoid Android.'
    },
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        genre: ['Classics' 'Fiction', 'Romance', 'Literature', 'Novel', 'Classics'],
        ISBN: '9781847490599',
        ref: [
            'https://www.goodreads.com/book/show/15823480-anna-karenina',
            'https://en.wikipedia.org/wiki/Anna_Karenina'
        ],
        DeweyDecimal: null,
        pages: 964,
        summary: 'Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing the author\'s own views and convictions.'
    },
    {
        title: '1984',
        author: 'George Orwell',
        genre: ['Classics' 'Fiction', 'Literature', 'Novel', 'Politics', 'Fantasy', 'Science Fiction', 'Adult'],
        ISBN: '9780451524935',
        ref: [
            'https://www.goodreads.com/book/show/40961427-1984',
            'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'
        ],
        DeweyDecimal: 823.912,
        pages: 328,
        summary: 'Published in 1949, the book offers political satirist George Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality.'
    }
    
];

module.exports = { books };
