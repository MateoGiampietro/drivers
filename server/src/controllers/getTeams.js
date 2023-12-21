const { Team } = require("../db");
const axios = require("axios");

const getTeams = async (req, res) => {
    try {
        const dbTeamsCount = await Team.count();
        if (dbTeamsCount === 0) {
            const APIDriverResponse = await axios.get("http://localhost:5000/drivers");
            const APIDriverData = APIDriverResponse.data;
            for (const driver of APIDriverData) {
                if (typeof driver.teams === 'string' && driver.teams.trim() !== '') {
                    const teams = driver.teams.split(',').map(team => team.trim());
                    for (const team of teams) {
                        const existingTeam = await Team.findOne({ where: { name: team } });
                        if (!existingTeam) {
                            await Team.create({ name: team });
                        }
                    }
                }
            }
        } else {
            let DBteams = await Team.findAll();
            return res.status(200).json(DBteams);
        }
        let DBteams = await Team.findAll();
        return res.status(200).json(DBteams);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getTeams;
