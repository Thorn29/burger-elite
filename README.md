# BurgerElite

An example app for an elite fast-food restaurant that offers various food as well as custom special burgers, that you can build yourself and tailor to your own needs.

[See live demo](https://burger-elite-production.up.railway.app/)

## Development

The app was built using **React** (with **Redux** for managing state) for the frontend, and **Node** & **Express** for the backend, connected to a **PostgreSQL** database.

Note: While the *orders* only show the username of the profile used to make the order, other, personal data of the customer is required to make an order. That data also gets stored to the database, but the frontend doesn't show it currently for security reasons.

## Local setup

To set up this app locally, you need to follow several steps:

1. Download the code

2. Import the *b_elite.sql* file from the *db_dump* folder into your PostgreSQL database and set it up

3. Create a *config* folder in the root of the project

4. Inside of the *config* folder create a *dev.env* file

5. Inside the *dev.env* file set up *DB_HOST, DB_USER, DB_PASSWORD, DB_NAME* and *JWT_SECRET* variables, the first 4 should correspond to your database credentials, the last one is a jsonwebtoken secret word

6. Using your terminal, navigate into the *app* folder and run *npm install*

7. Using your terminal, navigate into the *server* folder and run *npm install*

8. Using your terminal, inside the *server* folder, run *npm run dev*

That's it, the app should be up and running!
