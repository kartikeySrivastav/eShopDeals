const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
	createProduct,
	getProduct,
	getAllProduct,
	updateProduct,
	deletedProduct,
} = require("../controller/productCtrl.js");

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", authMiddleware, getProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deletedProduct);
router.get("/", getAllProduct);

module.exports = router;
