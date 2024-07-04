import express from "express";
import { fetchAndProcessURL } from "./readability.js";

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes setup
import { setRoutes } from "./routes/index.js";
setRoutes(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Function to obtain and process HTML from a URL and save the result to a .txt file
fetchAndProcessURL('https://grey-box.ca');