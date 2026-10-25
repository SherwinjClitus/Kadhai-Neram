# Kadhai Neram 🎬

A comic-themed login application built with React and Node.js, designed to deliver a cinematic, character-driven UI with mock authentication and protected access.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)

## Tech Stack

- React + Vite
- JavaScript, HTML, and CSS
- Node.js and Express.js
- Axios
- React Router DOM
- Session Storage
- GSAP for UI animation effects
- Vercel for frontend deployment
- Render for backend deployment

## Features

- Comic-inspired interface with a rotating character carousel
- Responsive login form with interactive UI
- Email and password validation on the client and server
- Axios-based communication with the backend API
- Express.js route for mock login verification
- Hardcoded demo credential check for authentication flow
- Protected dashboard route using React Router
- Session Storage-based authentication state
- Logout flow that clears the session and redirects to the login screen
- Custom animated visual effects and cinematic styling across the experience

## Project Structure

```text
Kadhai-Neram/
├── BACKEND/
│   ├── index.jsx
│   ├── package.json
│   └── package-lock.json
├── FRONTEND/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── Success.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── assets/
│   │   └── components/
│   │       ├── CircularCarousel.jsx
│   │       ├── DepthCarousel.jsx
│   │       ├── SideRays.jsx
│   │       ├── StarBorder.jsx
│   │       └── ...
│   └── ...
├── .gitignore
└── README.md
```

## Demo Login Credentials

The application is configured with hardcoded demo credentials for testing purposes only.

- Email: `sherwin@gmail.com`
- Password: `Sherwin@123`

Important: These are demo credentials and are not intended for real user accounts or production use.

## Installation and Setup

### 1) Clone the repository

```bash
git clone https://github.com/SherwinjClitus/Kadhai-Neram.git
cd Kadhai-Neram
```

### 2) Install frontend dependencies

```bash
cd FRONTEND
npm install
```

### 3) Install backend dependencies

```bash
cd ../BACKEND
npm install
```

### 4) Configure environment variables

The frontend reads the backend URL from `VITE_API_URL`.

Create a `.env` file inside the `FRONTEND` directory:

```env
VITE_API_URL=http://localhost:3000
```

This matches the backend server port defined in `BACKEND/index.jsx` (`process.env.PORT || 3000`).

### 5) Start the backend

```bash
cd BACKEND
npm start
```

The backend runs on:

```text
http://localhost:3000
```

### 6) Start the frontend in a separate terminal

```bash
cd FRONTEND
npm run dev
```

The Vite app typically runs on:

```text
http://localhost:5173
```

## API Endpoint

### Login

- Method: `POST`
- Path: `/login`
- Purpose: Verifies the submitted demo credentials

Example request body:

```json
{
  "email": "sherwin@gmail.com",
  "password": "Sherwin@123"
}
```

Success response:

```json
{
  "success": true,
  "message": "Login successful"
}
```

HTTP status: `200 OK`

Error responses:

```json
{
  "success": false,
  "message": "Email and password are required"
}
```

```json
{
  "success": false,
  "message": "Please enter a valid email address"
}
```

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## Deployment

The application is deployed using a simple full-stack setup:

- Frontend: Vercel
- Backend: Render
- Client-to-server communication: Axios requests to the Render-hosted API

The frontend calls the backend through the configured `VITE_API_URL`, and the backend is designed for demonstration purposes. Render free-tier services may take a moment to wake up after inactivity.

## Security Note

This project uses mock authentication and browser Session Storage for demonstration purposes only. It is not intended for production authentication or secure user management.

## Future Improvements

- Add a proper database for user storage and authentication
- Replace mock validation with secure password hashing and JWT/session handling
- Add automated tests for the frontend and backend flows
- Improve error handling and user experience for production environments

Made with ❤️ by Sherwin
