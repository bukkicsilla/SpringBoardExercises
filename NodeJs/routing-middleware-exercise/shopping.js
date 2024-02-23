//https://stackoverflow.com/questions/24543847/req-body-empty-on-posts
const express = require("express");
const router = new express.Router();
const ExpressError = require("./expressError");
const items = require("./fakeDb");

router.get("/", function (req, res, next) {
  try {
    res.json({ items });
  } catch (e) {
    return next(err);
  }
});
router.get("/:name", (req, res) => {
  const item = items.find((item) => item.name === req.params.name);
  console.log(item);
  if (item === undefined) {
    throw new ExpressError("item is not found", 404);
  }
  res.json({ item });
});
router.post("/", (req, res, next) => {
  try {
    const newItem = { name: req.body.name, price: req.body.price };
    if (!newItem.name) {
      throw new ExpressError("Name is missing", 400);
    }
    items.push(newItem);
    return res.status(201).json({ added: newItem });
  } catch (e) {
    return next(e);
  }
});

//{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}
router.patch("/:name", (req, res) => {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem === undefined) {
    throw new ExpressError("Item is not found", 404);
  }
  foundItem.name = req.body.name;
  foundItem.price = req.body.price;
  res.json({ item: foundItem });
});

router.delete("/:name", (req, res) => {
  const foundItem = items.findIndex((item) => item.name === req.params.name);
  if (foundItem === -1) {
    throw new ExpressError("Item is not found", 404);
  }
  items.splice(foundItem, 1);
  res.json({ message: "Deleted" });
});
module.exports = router;
