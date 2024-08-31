Assignment 1 - Web Server - Response to Criteria
================================================

Overview
------------------------------------------------

- **Name:** Nomin-Erdene Davaakhuu
- **Student number:** n11720671
- **Application name:** Video Trancoding app
- **Two line description:** 
This application enables users to upload, manage, and transcode videos from various formats (AVI, MKV, FLV, etc.) to MP4, using FFmpeg for transcoding and thumbnail generation. Built with Node.js, Express, JWT, and WebSocket for real-time progress updates, it is containerized with Docker and hosted on AWS EC2 for scalable deployment.


Core criteria
------------------------------------------------

### Docker image

- **ECR Repository name:** transcoder
- **Video timestamp:** 00:16
- **Relevant files:**
    - .Dockerfile

### Docker image running on EC2

- **EC2 instance ID:** i-0d6ced80f994e003e
- **Video timestamp:** 00:26
    - .Dockerfile

### User login functionality

- **One line description:** Simple hard coded user password integration. JWT-based authentication and session manager integrated. 
- **Video timestamp:** 00:35
- **Relevant files:**
    - routes/authRoutes.js
    - public/index.html
    - utils/auth.js
    - users.json
    - js/app.js
    - app.js
    - .env secret saved

### User dependent functionality

- **One line description:** Users can upload, transcode, and manage their videos after logging in.
- **Video timestamp:** 00:50
- **Relevant files:**
    - public/index.html
    - js/app.js
    - routes/...
    - utils/...
    - app.js

### Web client

- **One line description:** A web-based interface to upload, list, download, delete and perform transcoding operations. +logging in&out
- **Video timestamp:** 01:00
- **Relevant files:**
    - public/index.html
    - public/styles.css
    - js/app.js
    - routes/...
    - utils/...
    - app.js


### REST API

- **One line description:** Provides REST API endpoints for user authentication(logging in), file management, and video transcoding.
- **Video timestamp:** 02:15
- **Relevant files:**
    - app.js
    - routes/...
    - utils/...


### Two kinds of data

#### First kind

- **One line description:** user information (like username) and video file details (such as file names and associated users). It is used to manage user authentication, authorization, and to keep track of uploaded video files in the app.
- **Type:** Structured data is stored in a SQLite3 database. For example, there is a videos table to store details about video files uploaded by users. The sqlite_sequence table helps manage auto-incremented fields in the database.
- **Video timestamp:** 03:15
- **Relevant files:**
    - utils/db.js
    - db.sqlite
    - users.json
    - js/app.js

#### Second kind

- **One line description:** Video files and their metadata.
- **Type:** Video files (MP4, AVI, etc.) and database entries for metadata.
- **Rationale:** Unstructured data is stored in files. The video files and their thumbnails are likely stored in designated directories on the server. The application accesses these files directly via paths (e.g., /thumbnails/{fileNameWithoutExtension}.png) for operations such as rendering thumbnails, downloading, or transcoding videos.
- **Video timestamp:** 03:40
- **Relevant files:**
  - uploads/
  - public/thumbnails


### CPU intensive task

- **One line description:** Video transcoding operation from one format to another using FFmpeg.
- **Video timestamp:** starts 1:45 ends 5:11/ CPU utilization showed at 04:57 and 05:20
- **Relevant files:**
    - utils/fileUtils.js
    - routes/videoRoutes.js
    - app.js
    - js/app.js
    - most files are relevant

### CPU load testing method

- **One line description:** Simulating multiple video transcoding requests to measure CPU load and performance.
- **Video timestamp:** starts 1:45 ends 5:11/ CPU utilization showed at 04:57 and 05:20
- **Relevant files:**

Additional criteria
------------------------------------------------

### Extensive REST API features

- **One line description:** API uses HTTP methods and REST principles, allowing integration with any client, including mobile apps and CLI tools.
- **Video timestamp:** fullvideo
- **Relevant files:** 
    - app.js
    - auth.js
    - routes/authRoutes.js
    - routes/fileRoutes.js
    - routes/videoRoutes.js

### Use of external API(s)

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 


### Extensive web client features

- **One line description:** A single-page application (SPA) with dynamic content loading and an intuitive & minimal user interface.
- **Video timestamp:** fullvideo
- **Relevant files:**
    - public/index.html
    - js/app.js
    - app.js
    - public/styles.css


### Sophisticated data visualisations

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 


### Additional kinds of data

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 


### Significant custom processing

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**

### Live progress indication

- **One line description:** Video transcoding process shows a real-time progress bar powered by WebSocket.
- **Video timestamp:** starts 1:45 ends 5:11
- **Relevant files:**
    - utils/fileUtils.js
    - js/app.js
    - app.js

### Infrastructure as code

- **One line description:** Not attempted
- **Video timestamp:** 
- **Relevant files:**
    - 


### Other

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 