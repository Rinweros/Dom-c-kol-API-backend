const express = require("express");
const bodyParser = require("body-parser");

const shoppingListsRoutes = require("./routes/shoppingLists");
const usersRoutes = require("./routes/users");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/shopping-lists", shoppingListsRoutes);
app.use("/api/users", usersRoutes);

// Default error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
