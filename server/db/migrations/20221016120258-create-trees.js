"use strict";
async function up(queryInterface, Sequelize) {
	await queryInterface.createTable("trees", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		tree: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		location: {
			type: Sequelize.STRING,
		},
		height_ft: {
			type: Sequelize.FLOAT,
		},
		ground_circumference_ft: {
			type: Sequelize.FLOAT,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
	});
}
async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable("trees");
}
module.exports = {
	up,
	down,
};
