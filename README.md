![](https://img.shields.io/badge/Microverse-blueviolet)

# Book a Teacher

> Book a Teacher is a web app to schedule a time with an online teacher!

![screenshot](./screenshot.png)


## Built With

- React
- React Router
- Redux Toolkit
- RTK Query
- RTK Mutation
- VSCode
- Ubuntu 20.04


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- A GitHub account signed in in your terminal
- PostgreSQL
- NPM


### Setup

Rails
- `git clone https://github.com/fernandorpm/book-a-teacher-api.git`
- `cd book-a-teacher-api`

React
- `git clone https://github.com/fernandorpm/book-a-teacher-webapp.git`
- `cd book-a-teacher-webapp`

### Install

Rails
- `bundle install`
- `rails db:setup`
- `rails db:migrate`
- `rails db:seed`

React
- `npm install`

### Usage

Rails
- `rails s`
- routes:
  - TBA
  
React
- `yarn start`
- Access with `localhost:3006/`

## Database ERD
This project **_does not_** contain the user table and authentication as it wasn't a requirement and we had to work on a strict deadline.

Therefore, we adapted the relationship between Users and Teachers (Bookings) to be made directly by the username.
![ERD](book_erd.png)

## Authors

👤 **Arthur Borges**

- GitHub: [@arthuborgesdev](https://github.com/arthurborgesdev)
- Twitter: [@arthurmoises](https://twitter.com/arthurmoises)
- LinkedIn: [Arthur Borges](https://linkedin.com/in/arthurmoises)


👤 **Fernando R P Marques**

- GitHub: [@fernandorpm](https://github.com/fernandorpm)
- Twitter: [@rpm_fernando](https://twitter.com/rpm_fernando)
- LinkedIn: [Fernando R P Marques](https://linkedin.com/in/fernandorpm)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!
