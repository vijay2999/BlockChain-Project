const express = require('express');
const router = express.Router();
const coinController=require("../Controller/coinController")

router.get("/getCoin",coinController.getCoin)


module.exports = router;
