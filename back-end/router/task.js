import express from "express";
import {
  count,
  add,
  list,
  remove,
  uptade,
  isDone,
} from "../controller/task.js";
const router = express.Router();

router.get("/list", list);
router.post("/add", add);
router.get("/count", count);
router.delete("/delete", remove);
router.patch("/uptade", uptade);
router.patch("/checked", isDone);

export default router;
