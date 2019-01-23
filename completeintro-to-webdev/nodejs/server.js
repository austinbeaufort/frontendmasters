const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express(); // requests a new server.

app.get("/", function(req, res) { // when someone visits main page, send index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) { // when /complement visited, send a random complement.
  res
    .json({
      complement: getRandomComplement() // sends a json object.
    })
    .end();
});

app.use("/public", express.static("./public")); // public folder will be publicized.

app.listen(3000);
console.log("listening on http://localhost:3000");