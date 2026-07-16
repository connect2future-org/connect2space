import express from "express";
import {
  submitContact,
  getAllContacts,
  getContactById,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.delete("/:id", deleteContact);

export default router;