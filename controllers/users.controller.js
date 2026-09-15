const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("users.json", "utf-8")
);

const users = data.users;

// // --->>> GET ALL USERS <<<--- // //

const getAllUsers = (req, res) => {
  res.json(users);
};

// // --->>> GET USER BY ID <<<--- // //

const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};



// // --->>> ADD NEW USER <<<--- // //

const addUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify({ users }, null, 2));

  res.status(201).json({
    message: "User added successfully!",
    user: newUser,
  })
};


// // --->>> EDIT NEW USER BY ID <<<--- // //

const updateUser = (req, res) => {
  const id = Number(req.params.id);

  const { name, email } = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[userIndex] = {
    id,
    name,
    email,
  };

  fs.writeFileSync(
    "users.json",
    JSON.stringify({ users }, null, 2)
  );

  res.json({
    message: "User updated successfully!",
    user: users[userIndex],
  })
};

// // --->>> DELETE USER BY ID <<<--- // //

const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  fs.writeFileSync(
    "users.json",
    JSON.stringify({ users }, null, 2)
  );

  res.json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};