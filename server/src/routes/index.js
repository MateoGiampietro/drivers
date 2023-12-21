const { Router } = require("express");
const getDriverById = require('../controllers/getDriverById');
const allDrivers = require("../controllers/allDrivers");
const postDriver = require("../controllers/postDriver");
const getDriverByName = require("../controllers/getDriverByName");
const getTeams = require("../controllers/getTeams");

const router = Router();

router.get("/drivers", allDrivers);
router.get("/drivers/:idDriver", getDriverById);
router.get("/drivers/name", getDriverByName); // falta corregir esto
router.post("/drivers", postDriver);
router.get("/teams", getTeams);

module.exports = router;
