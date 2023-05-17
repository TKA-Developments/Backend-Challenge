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

### Submissions
- Setup your dev environment by following the [Node JS installation guide](https://nodejs.org/en/download) and [PostgreSQL documentation](https://www.postgresql.org/docs/current/tutorial-install.html)
- Clone the challenge repository
- Create a dedicated branch
- Write your code
- Commit your changes
- Fork the challenge repository
- Issue a Pull Request
- Notify us. Please send an email to [admin@tka.co.id](mailto:admin@tka.co.id)

### Suggestions
- Make it easy for us to try your app. Add instructions on how to run your demo. There's a section below you can fill in
- Don't be afraid if you're still a newbie. We will judge what you built adjusted with your experience. If you're just starting out, but can learn fast. We want you :)
- Make something fun. We love to party too! :D
- Be prepared to explain your decisions and your thought process in the next interview. We're curious about how you think! :)

## The Goal
Your local library needs help! they want to keep up with the digital age and move their book inventory online for people to access.

Create a library book collection back-end (database + API connections) system for your local library to manage their inventory. Using Node, Ecpress, and PostgreSQL, create end-points with the following specifications:

|Endpoint | Actions | Description |
|---------|---------|-------------|
|users      | GET    | Respond with a list of users |
|           | POST   | Respond with data of the newly created user |
| user/:id  | GET    | Respond with data of the specified user or return 404 error |
|           | PUT    | Replace the user indicated by the id with supplied data or return 404 error |
|           | DELETE | Delete the user indicated by the id or return 404 error |
| books     | GET    | Respond with a list of books in the collection
|           | POST   | Respond with data of the newly created book |
| books/:id | GET    | Respond with data of the specified book or return 404 error |
|           | PUT    | Replace entire book with supplied data or return 404 error |
|           | DELETE | Delete the book indicated by the id or 404 error |

**IMPORTANT**: Furthermore, the GET requests to the `users` and `books` endpoints require the utilization of specific JSON encoded query string parameters. It is also essential to ensure that the select parameter functions properly for the `users/:id` and `books/:id` endpoints.:

| Parameter | Description |

## Requirements

## Bonus
## How to run the demo
(REPLACE THIS WITH YOUR INSTRUCTIONS)
