const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}


// --------------------WORKED ON------------------------------------
Tag.init(
  {
    // define columns
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
    tag_name: {
      	type: DataTypes.STRING,
    }
	// --------------------WORKED ON------------------------------------
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
