const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getUser,
  deletedUser,
  updatedUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
} = require("../controller/userCtrl");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", getUser);
router.delete("/delete-user", authMiddleware, isAdmin, deletedUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
