const { Driver, Team, driver_team } = require("../db");

const postDriver = async (req, res) => {
    try {
        const { name, lastName, description, image, nationality, bornDate, teams } = req.body;

        if (!name || !lastName || !description || !image || !nationality || !bornDate) {
            return res.status(401).send("Faltan datos");
        }

        const teamsArray = teams.split(',').map(team => team.trim());

        const teamInstances = await Promise.all(
            teamsArray.map((team) => Team.findOrCreate({ where: { name: team } }))
        );

        const newDriver = await Driver.create({
            name,
            lastName,
            description,
            image,
            nationality,
            bornDate
        });

        const teamIds = teamInstances.map((team) => team[0].id);

        await newDriver.addTeams(teamIds, { through: driver_team });

        const allDrivers = await Driver.findAll();
        return res.status(200).json(allDrivers);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postDriver;
