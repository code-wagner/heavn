const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: "Deck-1",
      name: "Arctic Mist",
      price: 65.0,
    },
    {
      id: "Deck-2",
      name: "Obsidian Noir",
      price: 65.0,
    },
    {
      id: "Backpack",
      name: "Rebel Rider Backpack",
      price: 450.0,
    },
    {
      id: "Jacket",
      name: "Rider's Denim Jacket",
      price: 240.0,
    },
  ];

  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
