# Internet Retailer Backend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Internet Retailer Backend is a mockup of an e-commerce site backend. It comes with a database for storing data and a server for exposing that data to clients in JSON format; no means of sending requests to the server is provided.

[Video of Internet Retailer Backend showing features](https://drive.google.com/file/d/19ZtusfjUjccUF9fEDqHEO9H5GLelfAO-/view)

## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Author](#author)
* [License](#license)


## Usage

Since it is a server, the Internet Retailer Backend application does not offer any interaction through the command line interface. However, it does connect to a database and expose several routes for users to interface with the database. Using the routes, users are able to create, read, update, and delete from tables holding data about products, product categories, and product tags, in JSON formatted request and response bodies. These API routes are:

### Products

* `GET /api/products/`: Gets all products
* `GET /api/products/:id`: Gets the product with the ID specified in the URL
* `POST /api/products/`: Creates a new product
* `PUT /api/products/:id`: Updates the product with the ID specified in the URL
* `DELETE /api/products/:id`: Deletes the product with the ID specified in the URL

### Product Categories

* `GET /api/categories/`: Gets all product categories
* `GET /api/categories/:id`: Gets the product category with the ID specified in the URL
* `POST /api/categories/`: Creates a new product category
* `PUT /api/categories/:id`: Updates the product category with the ID specified in the URL
* `DELETE /api/categories/:id`: Deletes the product category with the ID specified in the URL

### Product Tags

* `GET /api/tags/`: Gets all product tags
* `GET /api/tags/:id`: Gets the product tag with the ID specified in the URL
* `POST /api/tags/`: Creates a new product tag
* `PUT /api/tags/:id`: Updates the product tag with the ID specified in the URL
* `DELETE /api/tags/:id`: Deletes the product tag with the ID specified in the URL

## Features

* Relational database for holding data on products, product categories, and product tags
* API routes for full control of data
  * Adheres to RESTful conventions
* Reads local environment variables to connect to database--no hard code
* Seed script included for testing database and API configuration


## Technologies Used

* JavaScript
  * Express.js
  * mysql2
  * Sequelize
* Node.js
* SQL


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License
&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.

