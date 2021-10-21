![](https://img.shields.io/badge/Microverse-blueviolet)

# Book a Teacher

> Book a Teacher is a web app to schedule a time with an online teacher!

![screenshot](./screenshot.png)

Access the back-end of the web app by [clicking here](https://github.com/fernandorpm/book-a-teacher-api)

## Built With

- React
- React Router
- Redux Toolkit
- RTK Query
- RTK Mutation
- VSCode
- Ubuntu 20.04
- Ruby on Rails


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
  
React
- `yarn start`
- Access with `http://localhost:3006/`

## Database ERD
This project **_does not_** contain the user table and authentication as it wasn't a requirement and we had to work on a strict deadline.

Therefore, we adapted the relationship between Users and Teachers (Bookings) to be made directly by the username.
![ERD](book_erd.png)

## Kanban board

Access the project's kanban and progress [here](https://github.com/fernandorpm/book-a-teacher-api/projects/1).

You can check the initial state of the Kanban Board on the [Issue Final Group Capstone - Book a Teacher](https://github.com/fernandorpm/book-a-teacher-api/issues/23).

Size of the Team: 2 people

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
