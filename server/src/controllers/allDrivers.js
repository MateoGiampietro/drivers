const { Driver } = require ("../db");

const allDrivers = async (req, res) => {
    try {
        const allDrivers = await Driver.findAll();
        allDrivers.map((driver) => {
            if (!driver.image) {
                driver.image = "default_image.jpg"
            }
        });
        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = allDrivers;