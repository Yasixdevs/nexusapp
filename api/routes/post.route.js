const express = require("express");
const router = express.Router();
const infoFile = require("../../logique/information");

router.get("/information", async (req,res) => {
    const result = await infoFile.Informationglobal();
    res.json(result);
});
router.get("/cpuLoad", async(req,res) => {
    const result = await infoFile.CpuLoad();
    res.json(result);
});

module.exports = router;