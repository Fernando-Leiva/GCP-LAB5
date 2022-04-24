const express = require('express')
const router = express.Router()
const user = require('../controller/index')



  // Create a new user
  router.post("/user", user.createUser);
  // Retrieve all user
  router.get("/user", user.getAllUsers);
  // Retrieve a single user with id
  router.put("/changePassword", user.changePassword);
  // Update a user with id
  router.put("/user", user.updateUser);
  // Delete a user with id
  router.delete("/user", user.deleteUser);
  // Login user
  router.post("/login", user.loginUser);

  router.get("/version", user.version)

  module.exports=router