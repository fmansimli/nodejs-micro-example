import { Router } from "express";
import * as controller from "../controllers";

import { validate } from "../middlewares/validate";
import { CreatePlaceDto } from "../validations";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", validate(CreatePlaceDto), controller.create);

router.patch("/:id", controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
