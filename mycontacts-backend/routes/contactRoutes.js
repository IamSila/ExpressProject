const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message: "fetching all contacts from the user"});
})
router.route("/").post((req, res) => {
    res.status(200).json({message: "Creating a user account"});
})

router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Modifying data for user ${req.params.id}`});
})

router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Deleting account for user ${req.params.id}`});
})

router.route("/").get((req, res) => {
    res.status(200).json({message: "fetching all contacts from the user"});
})

module.exports = router