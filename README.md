**Inventory Management App

    **Overview**

The Inventory Management App is a full-stack application built using React Native for the frontend and Express.jswith MongoDB for the backend. This app allows users to manage inventory items, including adding, editing, deleting, filtering by category, and sorting by quantity.

      **Features**
Add new items to the inventory

Edit and delete existing items

Filter items by category

Sort items by quantity

Highlight low-stock items (quantity below 10)

      **Tech Stack**
   **Frontend**
   
React Native: Developed using Expo for cross-platform mobile development

React Navigation: For navigation between screens

Axios: For making API requests

   **Backend**
Express.js: For building the RESTful API

MongoDB: For storing inventory data

Mongoose: For object data modeling (ODM)

      Installation
Backend Setup
Clone the repository:

      bash
git clone <your-repo-url>
cd inventory-management-backend
Install dependencies:

      bash
npm install
Create a .env file and add your MongoDB connection string:

      env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
Start the backend server:

      bash
npm start
Frontend Setup
Navigate to the frontend directory:

      bash
cd inventory-management-frontend
Install dependencies:

      bash
npm install
Start the Expo development server:

      bash
      **npm start
      Usage
      Ensure the backend server is running.
      
      Start the Expo development server.**

Open the Expo app on your mobile device and scan the QR code to launch the app.

Use the app to manage your inventory items.

      Screenshots
      will add soon

      License
This project is licensed under the MIT License - see the LICENSE file for details.

      **Acknowledgments**
Inspired by the need for efficient inventory management systems.

Special thanks to the open-source community for their contributions.
