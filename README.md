# Video Transcoding App

## Overview

The Video Transcoding App allows users to upload, manage, and transcode videos from different formats (e.g., AVI, MKV, FLV) into MP4 format. The app provides a user-friendly interface to manage videos and see the progress of transcoding in real time. The application uses Docker for containerization and is hosted on an AWS EC2 instance.

## Features

- **User Authentication**: Simple login system with JWT-based authentication.
- **Video Upload and Management**: Users can upload videos in various formats and manage their uploads.
- **Video Transcoding**: Convert videos from formats like AVI, MKV, FLV, etc., to MP4 format and vice versa.
- **Real-Time Progress Indication**: Video transcoding progress is displayed in real-time using WebSocket.
- **REST API**: Comprehensive REST API for managing user sessions, video uploads, transcoding, and downloads.
- **SQLite Database**: Used to store user information, video metadata, and manage video ownership.

## Prerequisites

- **Node.js** (version 14 or higher)
- **Docker** (version 19 or higher)
- **AWS Account** for hosting the app

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/video-transcoding-app.git
cd video-transcoding-app

### 2. Install Dependencies
npm install

### 3. Set Up Environment Variables

Create a .env file in the root directory and add your environment variables:
SECRET_KEY=your_secret_key

### 4. Run the Application Locally

npm start
The app will start on http://localhost:3000.

### 5. Run the Application with Docker
Build the Docker Image
docker build -t video-transcoding-app .
Run the Docker Container
docker run -dp 3000:3000 video-transcoding-app
### 6. Deploy to AWS EC2
Create an EC2 instance.
Install Docker and Docker Compose on the instance.
Push the Docker image to AWS ECR.
Pull the Docker image on EC2 and run it.
REST API Endpoints
Authentication
POST /auth/login - User login with username and password. Returns a JWT token.
Video Management
GET /files - Get a list of uploaded videos.
POST /files/upload - Upload a new video file.
DELETE /files/:id - Delete an uploaded video by ID.
GET /files/download/:id - Download a video file by ID.
Video Transcoding
POST /videos/transcode/:videoId - Transcode a video by ID.
GET /videos/progress/:videoId - Get transcoding progress for a video by ID.
Usage
Login: Use the login form to authenticate. Enter the username and password (hardcoded for simplicity).
Upload Video: After logging in, upload videos using the upload form. Supported formats are AVI, MKV, FLV, etc.
Transcode Video: Choose a video from the list and click "Transcode" to convert it to the desired format.
Monitor Progress: Watch the progress of the transcoding in real-time via a progress bar.
Download/Manage Videos: Download the transcoded videos or manage them (e.g., delete if no longer needed).

Database Initialization and Connection

The database is initialized and connected using the utils/db.js file. When the app starts, it checks for the existence of the required tables and creates them if they do not exist.
File Structure

video-transcoding-app/
│
├── Dockerfile                  # Dockerfile for creating a container image
├── .dockerignore               # Files to be ignored by Docker
├── .gitignore                  # Files to be ignored by Git
├── README.md                   # Project documentation
├── package.json                # NPM dependencies and scripts
├── app.js                      # Main server file
├── routes/                     # Express route handlers
│   ├── authRoutes.js           # Authentication routes
│   ├── fileRoutes.js           # File management routes
│   └── videoRoutes.js          # Video transcoding routes
├── utils/                      # Utility functions
│   ├── db.js                   # Database connection and initialization
│   └── fileUtils.js            # File-related utilities 
│   └── auth.js                 # JWT authentication middleware
├── public/                     # Static files served to the client
│   ├── index.html              # Main HTML file
│   ├── styles.css              # CSS for styling
│   ├── app.js                  # JS for client side main server
│   └── thumbnails/             # Thumbnails generated for videos
└── uploads/                    # Directory for uploaded videos

Live Progress Indication
The app uses WebSockets to provide real-time progress updates to users while their videos are being transcoded. This allows users to monitor the progress and manage their time accordingly.

Additional Features
Session Management: JWT-based sessions for secure authentication.
Responsive Design: The web client is responsive and works well on both desktop and mobile devices.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Node.js and Express for server-side development.
Docker for containerization.
