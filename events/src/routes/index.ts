import { Router } from "express";
import * as controller from "../controllers";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.patch("/:id", controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
