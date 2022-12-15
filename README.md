Oceanside United - DB
Description:

This is the backend API for Oceanside United
I created the official website for a local women's soccer team to help the team connect with the community and potentially find sponsors. This web application allows fans and sponsors to login or sign up and interact with the team. Features include:
* 		Commenting system: Users can make comments that are displayed on the site and stored on the server.
* 		User authentication and authorization: Only an admin user is able to delete a player and update the site.
* 		Interactive hover effects: The website uses hover effects to enhance user interactivity and provide a more engaging     experience.
* 		Responsive design: The website is designed to be responsive and adapt to different screen sizes, including mobile, tablet, and desktop.
* 		Dynamic timestamps: The website displays timestamps that are dynamically generated and updated in real-time.
API backend with local host: https://github.com/Rebecca-Collins/CapStone-DB
Technologies
* 		Node.js
* 		Express
* 		Knex
* 		MYSQL
* 		jsonwebtoken
* 		CORS (Cross-Origin Resource Sharing)
Setup
To set up the server for this project, follow these steps:
Clone the repo: by clicking < > Code, HTTPS Open the terminal and navigate to the server directory in this project. Then the terminal, run "npm install".
Install the following software:
* 		Node.js
* 		MySQL - https://www.mysql.com/downloads/
* 		Knex
* 		Express
* 		CORS
* 		jsonwebtoken
Copy code npm install Create a MySQL database. You can use MySQL Workbench or any other editor extension that you prefer. Make sure to set the following environment variables in the .env file:
* 		PORT: The port number that the server will run on.
* 		HOST: The hostname or IP address that the server will be accessible from (localhost )
* 		DB_NAME: The name of the MySQL database that the server will use
* 		DB_USER: The username for accessing the MySQL database
* 		DB_PASSWORD: The password for accessing the MySQL database
Run the following commands to migrate the database tables:
* 		npm run migrate or npx knex migrate:latest
Run the following command to start the server: node index.js To verify that the server is running, you can use a tool like Postman to make a test API request to the server.

Next Steps:
- Add E-commerce that allows users to buy team merch
- Add players
- Set up forms to send
