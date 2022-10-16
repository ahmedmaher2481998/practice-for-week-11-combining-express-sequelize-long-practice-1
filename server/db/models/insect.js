"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Insect extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Insect.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isTitle(value) {
						const initials = value.split(" ").map((word) => word.split("")[0]);
						initials.forEach((element) => {
							if (element.toUpperCase() !== element) {
								throw new Error(`Must be Title Cased.. ${element} `);
							}
						});
					},
				},
			},
			description: DataTypes.STRING,
			territory: DataTypes.STRING,
			fact: {
				type: DataTypes.STRING(240),
				validate: {
					isLessThan240(v) {
						const numOfChars = v.split("").length;
						if (numOfChars > 240) {
							throw new Error("Fact has to be less than 240 ");
						}
					},
				},
			},
			millimeters: {
				type: DataTypes.FLOAT,
				allowNull: false,
				validate: {
					min: 0,
				},
			},
		},
		{
			sequelize,
			modelName: "Insect",
		}
	);
	return Insect;
};
