const express = require("express");
const numberService = require("./numberService");

const router = express.Router();

router.get("/numbers/:numberid", async (req, res) => {
  const { numberid } = req.params;

  try {
    const response = await numberService.fetchNumbers(numberid);
    res.json(response);
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    res.status(500).send("Error fetching numbers");
  }
});

module.exports = router;
