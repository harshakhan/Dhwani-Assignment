const express = require("express");
const router = express.Router();
const { addStateDetails, getStatesDetails } = require('../controllers/stateController')

router.post("/addStateDetails", addStateDetails)
router.get("/getStatesDetails", getStatesDetails)

module.exports = router;