let users = require("../../users");

const getAllUsers = (req, res) => {
  console.log(users);
  return res.status(200).json(users);
};

const getUserById = (req, res) => {
  const { userId } = req.params;
  const findUser = users.find((user) => user.id === +userId);
  if (findUser) {
    return res.status(200).json(findUser);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

const createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = { id: newId, ...req.body };
  users.push(newUser);
  console.log(users[users.length - 1]);
  return res.status(201).json(users);
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  console.log(users);
  if (users.find((user) => user.id === +userId)) {
    users = users.filter((user) => user.id !== +userId);
    console.log(users);
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  const findUser = users.find((user) => user.id === +userId);
  if (!findUser) {
    return res.status(404).json({
      msg: "Not found!",
    });
  }
  for (const key in findUser) {
    if (key !== "id")
      findUser[key] = req.body[key] ? req.body[key] : findUser[key];
  }
  return res.status(201).json(findUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
