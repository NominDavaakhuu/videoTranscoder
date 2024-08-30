Assignment 1 - Web Server - Response to Criteria
================================================

Overview
------------------------------------------------

- **Name:** Nomin-Erdene Davaakhuu
- **Student number:** n11720671
- **Application name:** Video Trancoding app
- **Two line description:** 
The application lets user upload and manage, trancode their different formatted (AVI, MKV, FLV etc) video files into mp4 file and vise versa.


Core criteria
------------------------------------------------

### Docker image

- **ECR Repository name:**
- **Video timestamp:**
- **Relevant files:**
    - 

### Docker image running on EC2

- **EC2 instance ID:**
- **Video timestamp:**

### User login functionality

- **One line description:** Simple hard coded user password integration
- **Video timestamp:**
- **Relevant files:**
    - index.html
    - users.json
    - js/app.js

### User dependent functionality

- **One line description:** Users can upload, transcode, and manage their videos after logging in.
- **Video timestamp:**
- **Relevant files:**
    - public/index.html
    - js/app.js
    - routes/fileRoutes.js
    - routes/authRoutes.js

### Web client

- **One line description:** A web-based interface to upload, list, and play videos, and perform transcoding operations.
- **Video timestamp:**
- **Relevant files:**
    - public/index.html
    - public/styles.css
    - js/app.js


### REST API

- **One line description:** Provides REST API endpoints for user authentication, file management, and video transcoding.
- **Video timestamp:** 
- **Relevant files:**
    - app.js
    - routes/authRoutes.js
    - routes/fileRoutes.js
    - routes/videoRoutes.js


### Two kinds of data

#### First kind

- **One line description:** User-specific data and token-based sessions for managing access and ownership of uploaded videos.
- **Type:** JWT (JSON Web Tokens) and SQLITE
- **Rationale:** The app uses SQLITE DB to store user information and utilizes JWTs to handle authentication and ensure that only authenticated users can manage their videos.
- **Video timestamp:**
- **Relevant files:**
    - db.js
    - db.sqlite
    - users.json
    - js/app.js

#### Second kind

- **One line description:** Video files and their metadata.
- **Type:** Video files (MP4, AVI, etc.) and database entries for metadata.
- **Rationale:** Core data type representing user-uploaded videos and their transcoded versions.
- **Video timestamp:**
- **Relevant files:**
  - uploads/
  - utils/db.js


### CPU intensive task

- **One line description:** Video transcoding operation from one format to another using FFmpeg.
- **Video timestamp:** 
- **Relevant files:**
    - utils/fileUtils.js
    - routes/videoRoutes.js

### CPU load testing method

- **One line description:** Simulating multiple video transcoding requests to measure CPU load and performance.
- **Video timestamp:** 
- **Relevant files:**

Additional criteria
------------------------------------------------

### Extensive REST API features

- **One line description:** API uses HTTP methods and REST principles, allowing integration with any client, including mobile apps and CLI tools.
- **Video timestamp:** 
- **Relevant files:** 
    - app.js
    - js/app.js
    - routes/authRoutes.js
    - routes/fileRoutes.js
    - routes/videoRoutes.js

### Use of external API(s)

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 


### Extensive web client features

- **One line description:** A single-page application (SPA) with dynamic content loading and an intuitive user interface.
- **Video timestamp:**
- **Relevant files:**
    - public/index.html
    - js/app.js
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
- **Video timestamp:** 
- **Relevant files:**
    - utils/fileUtils.js
    - js/app.js

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