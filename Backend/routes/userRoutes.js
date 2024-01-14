import express from "express";
import { createUser, deleteUser, getAllUsers, getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/getUser", getUser);

router.post("/", createUser);

router.delete("/:userId", deleteUser);


export default router;
