const express = require("express");
const router = require("./createUser");
const app = express();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.food_items);
    res.send([global.food_items, food_categories]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

module.exports = router;
