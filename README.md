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
| `dateCreated` | Date |  should be set automatically by the server |

The following is the books schema:

| Field     | Data Type | Note |
|-----------|-----------|---------------------------------------------|
|`title` | String | required field|
| `author` | String | required field |
| `publicationDate` | Date | default current date |
| `publisher` | String | default "" |

**We assume that there's only one copy of each book in the collection.**

## Requirements
1. Use PostgreSQL for your database, it should contain atleast 5 users and 25 books. **We have provided scripts for you to populate and clear the database, read below on how to use it**.
2. Responses of your API should be a JSON object with 2 fields. the fist one is `message` and should contain a String readable to humans. The second field should be named `results` and should contain the actual JSON response object. Below is an example of a response:

```json
{
    "message": "OK",
    "results": {
        "_id": "w039e02",
        "title": "Sense and Sensibility",
        "author": "Jane Austen",
    }
}
```
3. When encountering errors, the responses from your API should consist of a JSON object containing `message` and `results` fields. The messages should be meaningful and easily understood by humans, allowing them to be displayed to users on the client side. Additionally, it is crucial for these error messages to be independent of the server-side technology being utilized. For instance, your API should avoid directly returning error messages from PostgreSQL to the client.
4. Your API should respond with the appropriate HTTP status code. You should atleast have 200 (OK), 201 (created), 404 (not found), 500 (server error).
5. To incorporate query string functionality, it is recommended to utilize the methods offered by PostgreSQL **instead of** fetching all the results from PostgreSQL and then performing filtering, sorting, skipping, etc. within your Node/Express application code.
6. Have server side validation for:
    - Users have to have atleast a name and email, other fields not specified can be set to reasonable values.
    - Multiple users with the same email can't exist
    - Books have to have atleast a title and an author, other fields not specified can be set to reasonable values.
7. Use these requirements and examples to create your own tests, **this is a very important step and we will be evaluating your tests.**

## Bonus
- Implement more queries below:

| Query                                       | Description |
|---------------------------------------------|---------|
| `skip`    | specify the number of return values to skip in the result set, good for pagination |
| `amount`  | specify the number of results to return (default for books is 50 and unlimited for users) |
| `count`   | if set to true, return the count of documents that match the query (NOT the actual user/book data) |

- Allow users to add a book to their favorites, remember that books that no longer exist have to be removed from users' favorites. **To do this, you must add another table in the database called `user_favorites` with the following schema**:

| Field     | Data Type | Note |
|-----------|-----------|----------------------------------------------|
| `user_id` | String | id of the user.|
| `book_id` | String | id of the book favorited by the user specified in the `user_id` field.|

**Don't forget to add the following API**

|Endpoint | Actions | Description |
|---------|---------|-------------|
| `user_favorites`  | POST    | Respond with data of the newly created user favorite. |
| `user_favorites:id`  | PUT    | Replace the data of the specified user favorite or return 404 error |
| | GET    | Respond with data of the specified user favorite or return 404 error |
| | DELETE    | remove the data of the specified user favorite or return 404 error |

- Allow user to see whether or not the book is available for them to borrow. This needs to make sense, e.g. user can't be currently borrowing a book that no longer exist in the collection. Make sure that the book can only be borrowed by one user at a time. **To do this, you must add another table in the database called `borrowed_books` with the following schema**:

| Field     | Data Type | Note |
|-----------|-----------|----------------------------------------------|
| `user_id` | String | id of the user.|
| `book_id` | String | id of the book borrowed by the user specified in the `user_id` field.|

**You must also add these field to the books schema**:

| Field     | Data Type | Note |
|-----------|-----------|----------------------------------------------|
| `available` | Boolean | indicate whether or not the book is available. default `true`.|

**Don't forget to add the following API**
|Endpoint | Actions | Description |
|---------|---------|-------------|
| `borrowed_books`  | POST    | Respond with data of the newly created borrowed book. |
| | PUT    | Modify borrowed books data (it would be useful to test with queries instead of plain API). |
| | GET    | Respond with list of borrowed books. |
| | DELETE    | delete borrowed books (it would be useful to test with queries instead of plain API). |

- The following methods in your API should ensure a two-way reference between `users`, `books`, `user_favorites`, and `borrowed_books`:
    - POST, PUT, DELETE `borrowed_books` and PUT `books`' `available`
    - DELETE a book will DELETE a `user_favorites` containing the `book_id` and `borrowed_books`
    - DELETE a user should DELETE `borrowed_books` and `user_favorites`
- Create additional tests for each point of the bonus points that you decided to implement. **Again, this is a very important step to let us know how thorough you are.**
- Come up with something fun!


## Getting Started
- Setup your dev environment by following the [Node JS installation guide](https://nodejs.org/en/download) and [PostgreSQL documentation](https://www.postgresql.org/docs/current/tutorial-install.html)
- Clone the challenge repository
- Create a dedicated branch
- install the dependencies by running `npm install`
- Start the dev server by running `npm start`.
- Write your code
- Commit your changes
- Fork the challenge repository
- Issue a Pull Request
- Notify us. Please send an email to [admin@tka.co.id](mailto:admin@tka.co.id)

## Suggestions
- Make it easy for us to try your app. Add instructions on how to run your demo. There's a section below where you can fill in.
- Checkout [Postman](https://www.postman.com) to test your API
- Free [PostgreSQL server](https://www.postgresql.org)
- No need to host your server anywhere, the code will be reviewed locally, make sure that your PostgreSQL server is running all the time during the testing & review period
- Don't be afraid if you're still a newbie. We will judge what you built adjusted with your experience. If you're just starting out, but can learn fast. We want you :)
- Be prepared to explain your decisions and your thought process in the next interview. We're curious about how you think! :)

## How to run the demo
(REPLACE THIS WITH YOUR INSTRUCTIONS)
