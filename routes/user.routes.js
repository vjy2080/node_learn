const express = require("express");

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const validateUser = require("../middleware/validate-user.middleware");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.get("/test-error", (req, res, next) => {
  const error = new Error("This is a test error");
  
  next(error);
});
router.post("/", validateUser, addUser);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;