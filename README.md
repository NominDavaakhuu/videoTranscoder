# Video Transcoding App

## Overview

The Video Transcoding App allows users to upload, manage, and transcode videos from different formats (e.g., AVI, MKV, FLV) into MP4 format. The app provides a user-friendly interface to manage videos and see the progress of transcoding in real time. The application uses Docker for containerization and is hosted on an AWS EC2 instance.

## Features

- **User Authentication**: Secure user authentication via JWT.
- **Video Upload and Management**: Users can upload videos in various formats and manage their uploads.
- **Video Transcoding**: Convert videos from formats like AVI, MKV, FLV, etc., to MP4 format.
- **REST API**: Comprehensive REST API for managing user sessions, video uploads, transcoding, and downloads & deletions.
- **STATELESS**
  - **RDS**: Used to store user information, video metadata, and manage video ownership.
  - **S3-BUCKET**: Used to store user data/video, thumbnails/.
- **PreSignedURL**: Used to access files from S3.
- **SecurityGroup**: Acts as a virtual firewall controlling inbound and outbound traffic.


## Prerequisites

- **Node.js** (version 14 or higher)
- **AWS Account** for hosting the app and accessing services.

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/video-transcoding-app.git
cd video-transcoding-app

### 2. Install Dependencies
npm i 

Required Packages:

- express
- ffmpeg
- jsonwebtoken
- ws (for WebSockets)
- mysql
- awscli/

Install them using npm:

npm install express ffmpeg jsonwebtoken ws mysql awscli

### 3. Set Up Environment Variables

Create a .env file in the root directory and add your environment variables:

SECRET_KEY=your_secret_key
S3_BUCKET_NAME=your_S3_bucket_name
AWS_REGION=ap-southeast-2
AWS_ACCESS_KEY_ID=your_aws_cridentials
AWS_SECRET_ACCESS_KEY=your_aws_cridentials
AWS_SESSION_TOKEN=your_aws_cridentials
RDS_HOSTNAME=your_DB_hostname
RDS_USERNAME=admin
RDS_PASSWORD=your_password
RDS_DATABASE=your_DB_name

### 4. Run the Application Locally

npm start 
The app will start on http://localhost:3000.

### 5. Run the Application with Docker //optional
Build the Docker Image
docker build -t video-transcoding-app .
Run the Docker Container
docker run -dp 8080:3000 video-transcoding-app

### 6. Deploy to AWS EC2
Create an EC2 instance.
Install Docker and Docker Compose on the instance.
Push the Docker image to AWS ECR.
Pull the Docker image on EC2 and run it.

## REST API Endpoints

### Authentication
POST /auth/login - User login with username and password. Returns a JWT token.

### Video Management
GET /files - Get a list of uploaded videos.
POST /files/upload - Upload a new video file.
DELETE /files/:id - Delete an uploaded video by ID.
GET /files/download/:id - Download a video file by ID.

### Video Transcoding
POST /videos/transcode/:videoId - Transcode a video by ID.
GET /videos/progress/:videoId - Get transcoding progress for a video by ID.

### Usage
Login: Use the login form to authenticate. Enter the username and password.
Upload Video: After logging in, upload videos using the upload form. Supported formats are AVI, MKV, FLV, etc.
Transcode Video: Choose a video from the list and click "Transcode" to convert it to the desired format.
Monitor Progress: Watch the progress of the transcoding in real-time via a progress bar.
Download/Manage Videos: Download the transcoded videos or manage them (e.g., delete if no longer needed).

## Database Initialization and Connection

The database is initialized and connected using the utils/db.js file. When the app starts, it checks for the existence of the required tables and creates them if they do not exist.

## Live Progress Indication
The app uses WebSockets to provide real-time progress updates to users while their videos are being transcoded. This allows users to monitor the progress and manage their time accordingly.

## License
This project is licensed under the MIT License. See the LICENSE file for details.