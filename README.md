# Realtime ChatApp (MERN Stack)

This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, along with Socket.io for real-time communication and Tailwind CSS for styling.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Running the Application](#running-the-application)
8. [API Endpoints](#api-endpoints)
9. [Socket.io Events](#socketio-events)
10. [Deployment](#deployment)
11. [Future Enhancements](#future-enhancements)
12. [Contributing](#contributing)
13. [License](#license)

## Features

- Real-time messaging using Socket.io
- User authentication (signup, login, logout)
- Send and receive messages in real-time
- Responsive design using Tailwind CSS and DaisyUI
- Message history persistence using MongoDB
- Search conversations
- Automatic scroll to bottom when sending or opening a chat
- Protected routes for authenticated users

## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - DaisyUI
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
- **Real-time Communication**: Socket.io
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: Bcrypt
- **API Testing**: Postman
- **Backend Architecture**: MVC (Model-View-Controller)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/imCyberMohsin/Realtime-Chat-App.git
   cd Realtime-Chat-App
   ```

2. Install backend dependencies:
   ```
   npm install (server config is in the root)
   ```

3. Install frontend dependencies:
   ```
   cd /frontend
   npm install
   ```

## Project Structure
```
Realtime-Chat-App/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── zustand/
│   │   ├── App.jsx
│   │   ├── Index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── messageModel.js
│   │   └── conversationModel.js
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
## Configuration

Create a `.env` file in the `server` directory with the following content:
   
see the [.env.demo File](.env.demo) file for details.

## Running the Application

1. Start the server:
   ```
   npm run dev (in the root)
   ```

2. Start the client:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:4000` to use the application.

## API Endpoints

- **POST /api/auth/signup**: Create a new user account
- **POST /api/auth/login**: Authenticate a user and receive a JWT
- **GET /api/auth/logout**: Log out the current user
- **GET /api/users**: Get all users (protected route)
- **GET /api/conversations**: Get all conversations for the current user (protected route)
- **POST /api/conversations**: Create a new conversation (protected route)
- **GET /api/conversations/:conversationId/messages**: Get messages for a specific conversation (protected route)
- **POST /api/messages**: Send a new message (protected route)

## Deployment

1. Build the React frontend:
   ```
   cd frontend
   npm run build
   ```

2. Set up your production environment variables in the server's `.env` file.

3. Deploy the server to your chosen hosting platform (e.g., Heroku, DigitalOcean, AWS).


## Future Enhancements

- Implement message reactions
- Encrypt messages in the database for improved security
- Add profile picture upload functionality during signup
- Create a user profile page to view and edit personal information
- Implement read receipts for messages
- Add support for multimedia messages (images, files, etc.)
- Implement group chat functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a pull request

## License

This project is licensed under the MIT License - see the [License](License.txt) file for details.