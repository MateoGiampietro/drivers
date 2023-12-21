const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Driver', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      },
      nationality: {
         type: DataTypes.STRING,
         allowNull: false
      },
      bornDate: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};