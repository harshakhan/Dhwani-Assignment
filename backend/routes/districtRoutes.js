const express = require("express");
const router = express.Router();
const { getDistrictDetails, addDistrictDetails  } = require('../controllers/districtController')

router.post("/addDistrictDetails", addDistrictDetails)
router.get("/getDistrictDetails", getDistrictDetails)

module.exports = router;