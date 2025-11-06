import express from "express";
import { registerUser, loginUser, uploadProfilePic } from "../controllers/userController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/upload/:id", upload.single("image"), uploadProfilePic);

export default router;
