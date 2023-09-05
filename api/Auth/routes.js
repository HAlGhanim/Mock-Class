const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("./controllers");

router.get("/", getAllUsers);

router.get("/:userId", getUserById);

router.post("/", createUser);

router.delete("/:userId", deleteUser);

router.put("/:userId", updateUser);

module.exports = router;
