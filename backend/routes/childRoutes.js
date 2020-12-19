const express = require("express");
const router = express.Router();
const { getChild, addChild  } = require('../controllers/childProfileController')

router.post("/addChild", addChild)
router.get("/getChild", getChild)

module.exports = router;