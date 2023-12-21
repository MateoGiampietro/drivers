const { Driver, Team } = require("../db");

const postDriver = async (req, res) => {
    try {
        const { name, lastName, description, image, nationality, bornDate, teams } = req.body;
        if (teams) {
            const splittedTeams = teams.split(',').map(team => team.trim());
            const idTeams = splittedTeams.map((team) => {
                Team.findAll({where: { name: team }})  
            })
            if (name && lastName && description && image && nationality && bornDate) {
                await Driver.create({ name, lastName, description, image, nationality, bornDate});
                // me falta añadir el id de los equipos pero aun no tengo ninguno en la db
                const allDrivers = await Driver.findAll();
                return res.status(200).json(allDrivers);
            };
        } else {
            return res.status(401).send("Tienes que pasar el equipo del piloto.");
        };
        return res.status(401).send("Faltan datos");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postDriver;