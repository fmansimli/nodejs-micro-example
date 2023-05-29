import { Router } from "express";
import * as controller from "../controllers";

const router = Router();

router.post("/signin", controller.signIn);
router.post("/signup", controller.signUp);
router.delete("/logout", controller.logout);

export default router;
