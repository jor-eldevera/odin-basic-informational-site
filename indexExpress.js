const express = require("express");
const app = express();

// Based on what page is requested,
// send the corresponding html file as a response
app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.get("/about", (req, res) => res.sendFile("about.html", { root: __dirname }));
app.get("/contact-me", (req, res) => res.sendFile("contact-me.html", { root: __dirname }));
app.get("*", (req, res) => res.sendFile("404.html", { root: __dirname }));

const PORT = 8080;
app.listen(PORT);