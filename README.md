# Role-Based Access Control (RBAC) UI

## **Overview**
This project demonstrates an implementation of a Role-Based Access Control (RBAC) system that incorporates **Authentication**, **Authorization**, and RBAC for managing user access based on roles.

## **Features**
- Secure user registration and login with hashed passwords using `bcryptjs`.
- Token-based authentication via `jsonwebtoken`.
- Role-based access control for roles like Admin, User, Moderator.
- Database integration with MongoDB via `mongoose`.
- Environment-specific configurations using `dotenv`.

## **Technology Stack**
- **Backend**: Node.js with Express.
- **Database**: MongoDB with Mongoose.
- **Security**: bcryptjs for hashing, JWT for authentication.

## **Project Structure**
```plaintext
rbac-project/
├── env/
│   ├── package.json
│   └── server.js
├── middleware/
│   ├── authMiddleware.js
│   ├── authrize.js
├── models/
│   ├── User.js
├── models/
│   ├── User.js
│   ├── Role.js
├── routes/
│   ├── authRoutes.js
│   ├── protectedRoutes.js
├── package-lock.json
├── package.json
├── server.js
└── README.md


## **Setup and Installation**

Clone the repository:

bash

git clone <https://github.com/coderight1/REAC_Backend.git>
cd rbac-project

Install dependencies:

bash

npm install

Set up environment variables:

Create a .env file in the root directory.
Add the following:

env
PORT=3000
DB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
Start the server:

bash

npm start

For development mode with hot reloading:

bash

npm run dev


API Endpoints

## **Authentication**
POST /register - Register a new user.
POST /login - Log in and receive a JWT.
Protected Routes
Accessible only to authenticated users with specific roles.
