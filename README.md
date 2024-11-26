# Hat Ink - Role-Based Access Control (RBAC) System

Hat Ink is a project that implements a Role-Based Access Control (RBAC) system for secure user authentication and role-based authorization. This project is built using Node.js, Express, and MongoDB, and includes features like user registration, login, and role-specific access to protected routes.

## Features
- User Registration and Login
- Role-Based Access Control (RBAC) with Admin, Manager, and User roles
- JWT-based Authentication for secure API access
- Middleware to verify JWT tokens and enforce role-based access
- Environment configuration for sensitive data (e.g., JWT secret, MongoDB connection)

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose for data modeling)
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing
- dotenv for environment variables

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud connection)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Sreekarn21/RBAC.git
2.cd RBAC
Install dependencies:

npm install
Create a .env file in the root directory and add your environment variables:
JWT_SECRET=your-secret-key
CONNECTION_STRING=your-mongo-db-connection-string
Start the server:
npm start
API Endpoints
Authentication Routes
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login a user and receive a JWT token.
Protected Routes
GET /api/users/admin - Admin-only access. Only users with the "admin" role can access this route.
GET /api/users/manager - Manager and Admin access. Users with "admin" or "manager" roles can access this route.
GET /api/users/user - User, Manager, and Admin access. Any authenticated user with one of these roles can access this route.
Example Request
Register User

POST /api/auth/register
{
  "username": "exampleuser",
  "password": "password123",
  "role": "admin"
}
Login User

POST /api/auth/login
{
  "username": "exampleuser",
  "password": "password123"
}

Project Structure:
RBAC/
├── controllers/        # Logic for user authentication and role-based access
├── models/             # Mongoose models for user and roles
├── routes/             # API route definitions
├── middlewares/        # JWT token verification and role authorization
├── .gitignore          # Ignore node_modules, .env, and other unnecessary files
├── README.md           # Project overview and setup instructions
├── LICENSE             # Open-source license (optional)
├── .env                # Environment variables (should be ignored in Git)
├── server.js           # Main entry point (Express server)
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Dependency lock file

