const express = require("express");
const router = express.Router();
const { getContact, getContacts, createContact, updateContact, deleteContact } = require("../controllers/contactController");

//getting all contact
router.route("/").get(getContacts);

//getting a contact
router.route("/:id").get(getContact);

//creating a contact
router.route("/").post(createContact);

//modifying a contact
router.route("/:id").put(updateContact);

// deleting a contact
router.route("/:id").delete(deleteContact);

module.exports = router