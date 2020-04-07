
<h1 align="center">
<br>
  Test with JEST
</h1>

<p align="center">A project to learn with the JEST.</p>

## Features
[//]: # (Add the features of your project here:)
This app features all the latest tools and practices in mobile development!

- **Node Js** — A web framework for Node Js.

- **Factory Girl** — is a factory library for Node.js and the browser that is inspired by [Factory_girl.](https://github.com/thoughtbot/factory_bot). It works asynchronously and supports associations and the use of functions for generating attributes.

- **Faker** — generate massive amounts of fake data in the browser and node.js.

- **PostgreSQL** — is a relational object database management system (DBMS), developed as an open source project.

- **SQLite** — A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

## Getting started

1. clone this repo using `git clone https://github.com/s1lasjee/test-jest.git`.
2. Move yourself to the appropriate directory: `cd test-jest`.
3. Run `yarn` to install dependencies.

## Run Server

1. Config your database in `.env` file.
2. check if there is already a database with the name that is in `DB_USER` in the `.env` file. otherwise, create...
3. Run `yarn sequelize db:migrate` to create tables in database.
4. Run `yarn run dev` to start server.

## Tests

1. Config your database in `.env.test`.
2. Run `yarn test` to test app.
