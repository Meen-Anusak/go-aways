const express = require("express");
const router = express.Router();

const member = require("../controllers/memberRaider");

router.get("/raiders", member.getRaiderMember);
router.post("/raider/register", member.registerRaiderMember);

module.exports = router;
