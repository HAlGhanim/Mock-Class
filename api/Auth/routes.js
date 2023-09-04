const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers");
const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:userId", getUserById);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);

module.exports = router;
