# Travel Agency Web Application

## Overview

This is a full-stack Travel Agency web application developed using React, Node.js, Express, and MongoDB.
The application allows users to explore multiple travel destinations and book trips through a simple and interactive interface.

---

## Features

* View multiple travel destinations
* Dynamic trip listing from database
* Book trips with name and email
* Data stored in MongoDB
* Responsive UI using HTML and CSS
* REST API integration between frontend and backend

---

## Tech Stack

Frontend:

* React.js
* HTML
* CSS
* Axios

Backend:

* Node.js
* Express.js

Database:

* MongoDB (Local)

---

## Project Structure

travel-app/
│── client/     (React frontend)
│── server/     (Node.js backend)

---

## Installation and Setup

### 1. Clone the repository

git clone https://github.com/shravanikalapure/Travel-Website.git

### 2. Navigate to project folder

cd Travel-Website

### 3. Setup backend

cd server
npm install
node server.js

### 4. Setup frontend

cd ../client
npm install
npm start

---

## Usage

* Open http://localhost:3000 in browser
* View available trips
* Select a trip
* Enter details and book

---

## API Endpoints

GET /trips
Fetch all trips

POST /trips
Add a new trip

POST /book
Book a trip

---

## Future Enhancements

* User authentication (login/signup)
* Payment integration
* Search and filter functionality
* Image upload support
* Deployment on cloud platform

---

## Author

Shravani Kalapure

---
