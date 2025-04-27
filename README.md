# YouTube Backend API with Swagger Documentation

A RESTful API for managing YouTube channel subscribers with Swagger documentation.

## Features

- CRUD operations for subscribers
- Swagger API documentation
- MongoDB database integration
- Express.js backend

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Swagger UI Express
- Swagger JSDoc

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd YT-bknd-swagger
    ```

1. Install dependencies:

    ```bash
    npm install
    ```

1. Create a `.env` file in the root directory with:

    ```bash
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```

1. Start the server:

    ```bash
    npm start
    ```

## API Documentation

Access the Swagger documentation at: `http://localhost:3000/api-docs`

### Available Endpoints

- `GET /api/subscribers` - Get all subscribers
- `GET /api/subscribers/names` - Get names of all subscribers
- `GET /api/subscribers/:id` - Get subscriber by ID
- `POST /api/new-user` - Create new subscriber
- `POST /api/update-user/:id` - Update existing subscriber

## Project Structure

```bash
src/
├── Config/
│   ├── dbconnect.js
│   └── swagger.js
├── Controllers/
│   └── user.controller.js
├── Models/
│   └── dbmodel.js
├── Routes/
│   └── user.router.js
└── index.js
```
