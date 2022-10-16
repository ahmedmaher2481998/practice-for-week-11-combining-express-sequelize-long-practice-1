"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class trees extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	trees.init(
		{
			tree: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			location: {
				type: DataTypes.STRING,
			},
			height_ft: {
				type: DataTypes.FLOAT,
				min: 0,
			},
			ground_circumference_ft: {
				type: DataTypes.FLOAT,
				min: 0,
			},
		},
		{
			sequelize,
			modelName: "trees",
		}
	);
	return trees;
};
