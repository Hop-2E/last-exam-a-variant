import express from "express";
import {
  count,
  createList,
  deleteList,
  getData,
  getListById,
  test,
  todolist,
  updateList,
  updateStatus,
} from "../controller/todolist.js";
const listRouter = express.Router();

listRouter.post("/add", createList);
listRouter
  .get("/", todolist)
  .get("/test", test)
  .get("/list", getData)
  .get("/list/:id", getListById)
  .get("/count", count)
  .patch("/update", updateList)
  .patch("/checked", updateStatus)
  .delete("/delete/:id", deleteList);

export default listRouter;
