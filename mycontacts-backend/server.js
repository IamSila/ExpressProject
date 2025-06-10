const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = 5000;

app.use(express.json());
app.use(errorHandler);
// routes
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
