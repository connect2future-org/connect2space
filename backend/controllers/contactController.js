import Contact from "../models/Contact.js";
import validator from "validator";

export const submitContact = async (req, res, next) => {
  try {
    const { name, phone, email, service, message } = req.body;

    // Validation
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (message.length < 10) {
      return res.status(400).json({ message: "Message must be at least 10 characters" });
    }

    // Save to DB
    const enquiry = new Contact({ name, phone, email, service, message });
    await enquiry.save();

    // ✅ No email is sent – just save and respond
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, message: "Enquiry deleted" });
  } catch (err) {
    next(err);
  }
};