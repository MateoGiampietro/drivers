const { Driver } = require ("../db");

const allDrivers = async (req, res) => {
    try {
        const allDrivers = await Driver.findAll();
        allDrivers.map((driver) => {
            if (!driver.image) {
                driver.image = "C:\Users\giamp\Downloads\cr-pi-drivers-main\client\public\logo_default.png"
            }
        });
        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = allDrivers;