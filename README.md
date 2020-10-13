# Metalibrary

 Metalibrary is a free, open source library API.
 
- [Servers](#servers)
- [API Methods](#api-methods)
  - [Get a random book](#get-random-book)
  - [List Books](#list-books)
  - [Get Book By ID](#get-book-by-id)
  - [List Authors](#list-authors)
  - [Get Author By ID](#get-author-by-id)
  - [List Tags](#list-tags)
- [Usage](#usage)
  - [Live Examples](#live-examples)
- [Contributing](#contributing)

## Servers

| Name            | URL                 | Description                                                                                                   |
| :-------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Staging     | N/A | Synced with the master branch of this repository                |
| Production  | N/A     | The primary API server |
  
## API Methods

### Get a random book

Returns a single random book from the database

**Path**

```HTTP
GET /random
```

**Query parameters**

| param     | type     | Description                                                                                                                                                                                                                                                                                                            |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| maxPages | `Int`    | The maximum number of pages ( can be combined with `minPages` )                                                                                                                                                                                                                                                  |
| minPages | `Int`    | The minimum number of pages ( can be combined with `maxPages` )                                                                                                                                                                                                                                                  |
| tags      | `String` | Filter random books by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match books that have **_all_** of the given tags. While a pipe (`\|`) separated list will match books that have **_either_** of the provided tags. |

**Response**

```ts
{
  _id: [string]
  // Title of the book
  title: [string]
  // Full name of the author
  author: [string]
  // Number of pages of the book
  length: [number]
  // An array of tag names for this book
  tags: [string]
  // Summary of the book
  summary: [string]
  // An array of website references of the book
  ref: [string]
}
```

### List All Books

Get a paginated list of all books. This method supports several filter and sorting options. 

**Path**

```HTTP
GET /all
```

**Query parameters**

| param     | type     | Description                                                                                                                                                                                                                                                                                                      |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| author    | `String` | Filter books by author name. Doesn't support fuzzy search.                                                                                                                                                                                                                                                             |
| authorId  | `String` | Filter books by author ID.                                                                                                                                                                                                                                                                                      |
| limit     | `Int`    | The number of books to return per request. (for pagination).                                                                                                                                                                                                                                                    |
| skip      | `Int`    | The number of items to skip (for pagination).                                                                                                                                                                                                                                                                    |
| maxPages | `Int`    | The maximum number of pages ( can be combined with `minPages` )                                                                                                                                                                                                                                            |
| minPages | `Int`    | The minimum number of pages ( can be combined with `maxPages` )                                                                                                                                                                                                                                            |
| tags      | `String` | Filter books by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match books that have **_all_** of the given tags. While a pipe (`\|`) separated list will match books that have **_either_** of the provided tags. |

**Response**

```ts
{
  // The number of books returned by this request
  count: number
  // The total number of books matching this request
  totalCount: number
  // The index of the last book returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results.
  lastItemIndex: number
  // The array of books
  results: Array<{
      _id: [string]
      // Title of the book
      title: [string]
      // Full name of the author
      author: [string]
      // Number of pages of the book
      length: [number]
      // An array of tag names for this book
      tags: [string]
      // Summary of the book
      summary: [string]
      // An array of website references of the book
      ref: [string]
    }>
}
```

### Get a Book By ID

Get a book by its ID

**Path**

```HTTP
GET /books/:id
```

**Response**

```ts
{
  _id: [string]
  // Title of the book
  title: [string]
  // Full name of the author
  author: [string]
  // Number of pages of the book
  length: [number]
  // An array of tag names for this book
  tags: [string]
  // Summary of the book
  summary: [string]
  // An array of website references of the book
  ref: [string]
}
```

### List Authors

Get a paginated list of all authors. By default, authors will be returned in alphabetical order (ascending). 

**Path**

```HTTP
GET /authors
```

**Query parameters**

| param     | type                           | Description                                                   |
| :-------- | :----------------------------- | :------------------------------------------------------------ |
| name      | `String`  | Search for authors by name. Doesn't support fuzzy search.            |
| sortBy    | `enum: ['name', 'bookCount']` | The field used to sort authors. Default is 'name'             |
| sortOrder | `enum: ['asc', 'desc']`        | The order results are sorted in. Default is 'asc'             |
| limit     | `Int`                          | The number of authors to return per request. (for pagination) |
| skip      | `Int`                          | The number of items to skip (for pagination)                  |

**Response**

```ts
{
  // The number of authors return by this request.
  count: number
  // The total number of authors matching this request.
  totalCount: number
  // The index of the last item returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results. It will be set to `null` if there are no additional results.
  lastItemIndex: number | null
  // The array of authors
  results: Array<{
    // A unique id for this author
    _id: string
    // The authors full name
    name: string 
    // The number of books by this author
    bookCount: string
  }>
}
```

### Get Author By ID

Get a specific author by ID. The response includes all books by the given author. 

**Path**

```HTTP
GET /authors/:id
```

**Response**

```ts
{
  // A unique id for this author
  _id: string
  // The authors full name
  name: string
  // The number of books by this author
  bookCount: string
  // The array of books by this author (not paginated)
  books: Array<{
      _id: [string]
      // Title of the book
      title: [string]
      // Full name of the author
      author: [string]
      // Number of pages of the book
      length: [number]
      // An array of tag names for this book
      tags: [string]
      // Summary of the book
      summary: [string]
      // An array of website references of the book
      ref: [string]
    }>
}
```

### List Tags

Get a list of all tags

**Path**

```HTTP
GET /tags
```

**Response**

```ts
{
  // The number of all tags by this request
  count: number
  // The array of tags
  results: Array<{
    _id: string
    name: string
  }>
}
```

## Usage

**Get a random book (fetch)**

```js
fetch('https://<Base URL>/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })
```

**Get a random book (async/await)**

```js
async function randomBook() {
  const response = await fetch('https://<Base URL>/random')
  const data = await response.json()
  console.log(`${data.content} —${data.author}`)
}
randomBook()
```

**Get a random book (JQuery)**

```js
$.getJSON('https://<Base URL>/random', function(data) {
  console.log(`${data.content} —${data.author}`)
})
```

### Live Examples

N/A

## Contributing

All contributions are welcome! For more info on how to contribute, check out the [Contributors Guide](./CONTRIBUTING.md)
