const { Driver } = require('../db');
const axios = require("axios");

const getDriverById = async (req, res) => {
    try {
        const id = req.params.idDriver;
        const drivers = [];
        const driver = await Driver.findByPk(id);
        const APIDriverResponse = await axios.get(`http://localhost:5000/drivers/${id}`);
        const APIDriver = APIDriverResponse.data;
        if (driver) {
            drivers.push(driver);
        };
        drivers.push(APIDriver);
        if (drivers.length > 0) {
            return res.status(200).json(drivers);
        }
        return res.status(401).send("No existe un driver con ese id.");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getDriverById;