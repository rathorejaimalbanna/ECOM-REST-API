 * E-commerce API
This project is an implementation of a RESTful API for an e-commerce application. It provides endpoints for managing users, products, and the user's shopping cart.

# Features
User Management: Sign up and sign in functionality with basic authentication.
Product Management: CRUD operations for products, including searching for products by name.
Shopping Cart: Ability to view and add products to the shopping cart.
Technologies Used
Node.js: The server-side runtime environment.
Express.js: A web application framework for Node.js used for building the API endpoints.
MySQL: A relational database management system used for storing user and product data.
jsonwebtoken: A package for generating and verifying JSON Web Tokens (JWT) for user authentication.

# Installation
Clone the repository:

bash
Copy code
git clone: https://github.com/rathorejaimalbanna/trevious-project
Install dependencies:

bash
Copy code
cd ecommerce-api
npm install
Set up MySQL database:

Create a MySQL database and import the provided schema.sql file to create the necessary tables.
Update the mysql.js file with your MySQL connection details.
Run the server:

bash
Copy code
npm start.


# API Endpoints
POST /users/signup: Create a new user account.

POST /users/signin: Sign in with an existing user account.
GET /products: Retrieve all products.
GET /products/search/name: Search for products by name.
GET /products/search/category: Search for products by category.
GET /cart/allProducts: Retrieve all products in the shopping cart. Don't forget to provide jwt.
POST /cart/addProduct: Add a product to the shopping cart. Don't forget to provide jwt.


# Authentication
Basic authentication is used for user sign-up and sign-in functionality.
JWT authentication is used to protect certain routes, ensuring that only authenticated users can access them.
