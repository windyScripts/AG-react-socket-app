import { Router } from "express";
import { signUpUser, loginUser } from "../controllers/user.js";

const router = Router();

// new user registration

router.post('/signup', signUpUser);

// user login

router.post('/login', loginUser);

export default router;