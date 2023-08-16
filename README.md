# E-commerce Back End

[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application builds a back end for an e-commerce website which helps the managers of the internet retails companies to compete with other e-commerce companies. A working Express.js API is configured to use Sequelize to interact with a MySQL database using the MySQL2 and Sequelize packages. The sensitive data like MYSQL username, password and database name are stored in environment variables using dotenv package and connected to the database using Sequelize. The database contains four models Category, Product, tag and ProductTag. Association methods are executed on Sequelize models to create the following relationships between them:

- Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

- Category has many Product models.

- Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

- Tag belongs to many Product models.

With the help of API Routes the RESTful CRUD operations are performed using these Sequelize models.

## Installation

- Install Node.js v16
- Install MySQL Server
- Clone the Repository from GitHub and navigate to the root directory
- Install necessary dependencies running the following command :

  ```
  npm i
  ```

- Create a .env file in the root directory and add the environment variables to hold your MySQL username, password and database name.

      DB_NAME='ecommerce_db'
      DB_USER='root'
      DB_PW='password'

- Login into MySQL Server by running the command

  ```
  mysql -u root -p
  ```

- Run the following command in the shell to create the database.

  ```
  source db/schema.sql
  ```

- Run the following command in the shell to seed the database.

  ```
  npm run seed
  ```

## Usage

The application can be invoked in the terminal by using the following command:

```
npm start
```

When the application is invoked using 'npm start' then the server will start at port 3001 and the application can be tested in the Insomnia

#### Link to walkthrough video :

The following images show the application's appearance and functionality :

![LM 1](./public/assets/images/notes.gif)

![LM 1](./public/assets/images/image2.png)

![LM 2](./public/assets/images/image3.png)

![LM 3](./public/assets/images/image4.png)

![LM 5](./public/assets/images/image6.png)

## Credits

#### References

https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

https://sequelize.org/docs/v6/core-concepts/model-basics/#default-values
