import express from "express";
import {
  createItem,
  deleteItem,
  text,
  countItem,
  endPoint,
 
  updateItem,
getAllItem,
  item
} from "../controller/item.js";
const router = express.Router();

router.route("/").get(text);
router.route("/test").get(endPoint);
router.route("/add").post(createItem);
router.route("/delete/:id").delete(deleteItem);
router.route("/update/:id").patch(updateItem);
router.route("/checked/:id").patch(updateItem)
router.route("/count").get(countItem)
router.route("/all").get(getAllItem);
router.route("/:id").get(item);

export default router;
