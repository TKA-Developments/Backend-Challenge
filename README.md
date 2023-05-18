# Backend-Challenge
TKA Development is a team of builders who value creativity, teamwork, and a positive attitude. We believe that technical skill is important, but we don't judge people based on their background or appearance. We welcome all kinds of builders, creators, and designers, and we're particularly excited to invite developers to take on our open-ended challenge.

At TKA, we're less interested in your formal qualifications than in your ability to create amazing products and learn quickly. If you're up for the challenge, we encourage you to clone our repository and start building! Once you're ready, submit a pull request and our whole team will review your work. We can't wait to see what you create!

## Instructions
### 1. Learn
- Feel free to learn from any resources. here are a few resources that can help you to get started:
    - [What is REST API?](https://youtu.be/-mN3VyJuCjM)
    - [Build a Rest Api with NodeJS (JavaScript), Express, and PostgreSQL](https://youtu.be/DihOP19LQdg)
- We have a Udemy account that you can borrow (reach out to [admin@tka.co.id](mailto:admin@tka.co.id)). We have access to an online course that teaches you the fundamentals of web development, feel free to reach out if you are interested!
- Get familiar with GitHub by going through the [GitHub tutorial](https://guides.github.com/activities/hello-world/).

### 2. Build
- You have 1 week to complete the challenge. We can see the commits timeline
- Implementation (code) will be evaluated according to the requirements

### 3. Show
- Impress us with your skills
- Go beyond the requirements
- Beat the competition
- Join us
- Win

## The Goal
Your local library needs help! they want to keep up with the digital age and move their book inventory online for people to access.

Create a library book collection back-end (database + API connections) system for your local library to manage their inventory. Using Node, Ecpress, and PostgreSQL, create end-points with the following specifications:

|Endpoint | Actions | Description |
|---------|---------|-------------|
| `users`     | GET    | Respond with a list of users |
|             | POST   | Respond with data of the newly created user |
| `user/:id`  | GET    | Respond with data of the specified user or return 404 error |
|             | PUT    | Replace the user indicated by the id with supplied data or return 404 error |
|             | DELETE | Delete the user indicated by the id or return 404 error |
| `books`     | GET    | Respond with a list of books in the collection
|             | POST   | Respond with data of the newly created book |
| `books/:id` | GET    | Respond with data of the specified book or return 404 error |
|           | PUT    | Replace entire book with supplied data or return 404 error |
|           | DELETE | Delete the book indicated by the id or 404 error |

**IMPORTANT**: Furthermore, the GET requests to the `users` and `books` endpoints require the utilization of specific JSON encoded query string parameters. It is also essential to ensure that the select parameter functions properly for the `users/:id` and `books/:id` endpoints.:

| Parameter | Description |
|-----------|-------------|
| `cond`    | filter return values based on JSON query |
| `sort`    | specify the order that a specified field is sorted by (1 = ascending, 0 = descending) |
| `select`  | specify the set of fields to include or exclude in each results ( 1 = include, 0 = exclude) |
| `skip`    | specify the number of return values to skip in the result set, good for pagination |
| `amount`  | specify the number of results to return (default for books is 50 and unlimited for users) |
| `count`   | if set to true, return the count of documents that match the query (NOT the actual user/book data) |

Below are some examples and their return values:

| Query                                       | Description |
|---------------------------------------------|---------|
| `http://localhost:8080/v0/users` | returns list of all users |
| `http://localhost:8080/v0/books` | returns list of all books |
| `http://localhost:8080/v0/users?cond={"_id":"102h38"}` | returns list of size 1 with the user with specified id |
| `http://localhost:8080/v0/books?cond={"_id": {"$in": ["28s921", "02i8282"]}}` | returns a set of tasks with specified ids |
| `http://localhost:8080/v0/books?cond={"available": true}`| returns a list of available books |
| `http://localhost:8080/v0/users?sort={"name": 1}` | returns a list of users sorted by names in ascending order |
| `http://localhost:8080/v0/users?select={"email": 0}`| returns a list of users without the email field |
|`http://localhost:8080/v0/books?skip=20&limit=10`| returns books number 21 to 30 |
**The API must be capable of processing any combination of these parameters within a single request.** For instance, the following GET request is considered valid:

```
http://localhost:8080/v0/books?sort={"title": 1}&skip=20&limit10
```

The following is the user schema:

| Field     | Data Type | Note |
|-----------|-----------|----------------------------------------------|
| `name` | String | required field |
| `email`| String | required field |
| `favorites` | [String] | **BONUS** ids of books the user favorited. default [].**does not need to be implemented if you choose not to** |
| `currentlyBorrowing` | String | **BONUS** id of the book being borrowed. this needs to make sense, e.g. user can't be currently borrowing a book that no longer exist in the collection. default "".**does not need to be implemented if you choose not to**|
| `dateCreated` | Date |  should be set automatically by the server |

The following is the books schema:

| Field     | Data Type | Note |
|-----------|-----------|---------------------------------------------|
|`title` | String | required field|
| `author` | String | required field |
| `publicationDate` | Date | default current date |
| `publisher` | String | default "" |
| `available` | Boolean | **BONUS** indicate whether or not the book is available. default `true`. **does not need to be implemented if you choose not to**|
| `borrowedBy` | String | **BONUS** id of the user borrowing the book. default "". **does not need to be implemented if you choose not to**|

**We assume that there's only one copy of each book in the collection.**

**for those doing the BONUS, we have to ensure that the each book can only be borrowed by one user at a time. Otherwise, don't worry about it.**

## Requirements

## Bonus

## How to run the demo
(REPLACE THIS WITH YOUR INSTRUCTIONS)

## Getting Started
- Setup your dev environment by following the [Node JS installation guide](https://nodejs.org/en/download) and [PostgreSQL documentation](https://www.postgresql.org/docs/current/tutorial-install.html)
- Clone the challenge repository
- Create a dedicated branch
- install the dependencies by running `npm install`
- Start the dev server by running `npm start` or `nodemon --exec node server.js` to automatically restart the server on save.
- Write your code
- Commit your changes
- Fork the challenge repository
- Issue a Pull Request
- Notify us. Please send an email to [admin@tka.co.id](mailto:admin@tka.co.id)

## Suggestions
- Make it easy for us to try your app. Add instructions on how to run your demo. There's a section below you can fill in
- Checkout [Postman](https://www.postman.com) to test your API
- Free [PostgreSQL server](https://www.postgresql.org)
- No need to host your server anywhere, the code will be reviewed locally, make sure that your PostgreSQL server is running all the time during the testing & review period
- Don't be afraid if you're still a newbie. We will judge what you built adjusted with your experience. If you're just starting out, but can learn fast. We want you :)
- Be prepared to explain your decisions and your thought process in the next interview. We're curious about how you think! :)
