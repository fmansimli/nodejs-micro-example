import { Router } from "express";
import * as controller from "../controllers";

const router = Router();

router.get("/profile", controller.getProfile);
router.patch("/profile", controller.updateProfile);
router.delete("/profile", controller.deleteProfile);

export default router;
