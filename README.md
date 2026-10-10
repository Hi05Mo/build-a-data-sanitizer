# Data Sanitizer

A simple data sanitization web application built with Node.js and Express.js.

## Description

This project provides an HTML form that allows users to submit a username and a comment.

It uses custom Express.js middleware to sanitize user input by converting usernames to lowercase and removing HTML tags from comments. It also validates usernames to ensure they contain at least 3 characters.

## Technologies

* JavaScript
* Node.js
* Express.js
* HTML5
* CSS3
* CommonJS

## Usage

Install the dependencies with:

```bash
npm install
```

Start the server with:

```bash
node server.js
```

The server runs on:

`http://localhost:3000`

Available routes:

```text
GET /
GET /form
POST /submit
```

### Data Sanitization

The application performs the following operations:

* Converts usernames to lowercase.
* Removes HTML tags from comments.
* Validates that usernames contain at least 3 characters.
* Returns sanitized data in JSON format when validation succeeds.
* Redirects users to the form with an error message when validation fails.

### Example

Input:

```text
Username: Riqui
Comment: <h1>Hello</h1> Nice to meet you!
```

Sanitized output:

```json
{
  "username": "riqui",
  "comment": "Hello Nice to meet you!"
}
```

## Project Structure

```text
build-a-data-sanitizer/
├── public/
│   └── index.html
├── middleware.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## License

BSD-3-Clause
# Data Sanitizer

A simple data sanitization web application built with Node.js and Express.js.

## Description

This project provides an HTML form that allows users to submit a username and a comment.

It uses custom Express.js middleware to sanitize user input by converting usernames to lowercase and removing HTML tags from comments. It also validates usernames to ensure they contain at least 3 characters.

## Technologies

* JavaScript
* Node.js
* Express.js
* HTML5
* CSS3
* CommonJS

## Usage

Install the dependencies with:

```bash
npm install
```

Start the server with:

```bash
node server.js
```

The server runs on:

`http://localhost:3000`

Available routes:

```text
GET /
GET /form
POST /submit
```

### Data Sanitization

The application performs the following operations:

* Converts usernames to lowercase.
* Removes HTML tags from comments.
* Validates that usernames contain at least 3 characters.
* Returns sanitized data in JSON format when validation succeeds.
* Redirects users to the form with an error message when validation fails.

### Example

Input:

```text
Username: Riqui
Comment: <h1>Hello</h1> Nice to meet you!
```

Sanitized output:

```json
{
  "username": "riqui",
  "comment": "Hello Nice to meet you!"
}
```

## Project Structure

```text
build-a-data-sanitizer/
├── public/
│   └── index.html
├── middleware.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## License

BSD-3-Clause
