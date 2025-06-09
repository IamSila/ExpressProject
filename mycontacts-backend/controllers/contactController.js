//@desc get all the contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({message: "fetching all contacts from the user"});
}

//@desc get a single contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({message: `fetching contact for ${req.params.id}`});
}

//@desc create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(201).json({message: "Creating a user account"});
}

//@desc create new contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({message: `Modifying data for user ${req.params.id}`});
}

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({message: `Deleting account for user ${req.params.id}`});
}

module.exports = { 
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
