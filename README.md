# Comment System
This repository contains the backend and start of frontend set up

## Part 1: Backend
The backend is developed using Django Rest Framework and SQLite database (db.sqlite3). It provides RESTful APIs for managing comments including functionalities like editing, adding, and deleting comments.

How to Run Backend
Ensure you have Python installed on your system.
1. Clone this repository.
2. Navigate to the challenge directory.
3. Install the required dependencies by running:
  `pip install -r requirements.txt`
4. Apply migrations by running: `python manage.py migrate`
5. Start the Django development server:
Copy code
6. `python manage.py runserver`
7. The backend server will start running on http://localhost:8000/.
8. In order to interact with the code go to http://localhost:8000/api/comments/
9. API Endpoints
 - GET /comments/: List all comments.
 - POST /comments/: Add a new comment.
 - PUT /comments/{id}/: Edit an existing comment.
 - DELETE /comments/{id}/: Delete an existing comment.

## Part 2: Frontend
The frontend is being developed using React.js. It's goal fetches data from the backend APIs and displays the comments in a clean and user-friendly interface.

How to Run Frontend
1. Navigate to the frontend directory.
2. Install the required dependencies by running: `npm install`
3. Start the development server:
4. `npm start`
5. The frontend server will start running on http://localhost:3000/.
