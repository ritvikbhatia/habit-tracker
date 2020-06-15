How to run the project:
<br>
Download as zip and extract at your system
Open folder in VS code
Open terminal and make the project folder as your current directory
Input following command:
npm install 
To start the server, use command: npm start
Go to https://localhost/8000 on your browser to use the application

Folder Structure
<br>
Views

1. Home view: Displays all the habits of a user and provide option to add and delete habits

2. Habit view: displays toggle screen  of all days .

assets:
<br>
contains static files: CSS and Javascirpt files

controllers:
<br>
home_controller: responsible for home page
habit_controller: responsilble for weekly view

models: 
<br>
habit schema 
contains name , days data

routes:
<br>
files for routing the user request to the appropriate controllers
index.js: routes for home view
habit.js: routes for habit view

