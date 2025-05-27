var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({
    code: 200,
    status: true,
    message: "Successfully",
    data: ["messiu", "cr10"],
  });
});

module.exports = router;
