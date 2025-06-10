const asyncHandler = require("express-async-handler");

//@desc get all the contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
 res.status(200).json({message: "fetching all contacts from the user"});
});

//@desc get a single contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `fetching contact for ${req.params.id}`});
});

//@desc create new contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(404);
        throw new Error("all options must be available");
    }
    res.status(201).json({message: "Creating a user account"});
});

//@desc create new contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => { res.status(200).json({message: `Modifying data for user ${req.params.id}`});
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleting account for user ${req.params.id}`});
});

module.exports = { 
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
