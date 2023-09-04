const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers");
const router = express.Router();

router.get("/", getUsers);

router.get("/:userId", getUserById);

router.post("/createUser", createUser);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);

module.exports = router;
