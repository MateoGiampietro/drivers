const { Driver } = require('../db');

const getDriverByName = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const first15DriversByName = await Driver.findAll({where: { name }, limit: 15});
            return res.status(200).json(first15DriversByName);
        }
        return res.status(401).send('No existen pilotos con ese nombre.')
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getDriverByName;