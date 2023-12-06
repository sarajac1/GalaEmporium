# Folder structure - GALAEMPORIUM
## 1. client - frontend related files
## 2. server - backend related files (node)
# How to run the application?
Run the command ´npm start main´ in your terminal. Node server will start on port 3000 and the application becomes accessible at url http://localhost:3000

# APIs:
  The below APIs can be checked in Postman.
  
    1. http://localhost:3000/api/login 
    when the below body is passed the credentials are checked against database and http status 200 is returned if user exists else 401 is returned.
      {
        "email": "jmuir@mac.com", 
        "password" : "magic"
      }