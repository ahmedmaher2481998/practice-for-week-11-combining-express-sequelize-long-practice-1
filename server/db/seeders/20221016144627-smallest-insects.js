"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"Insects",
			[
				{
					name: "Scarlet Dwarf Dragonfly",
					description: `On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea). It’s also known as the northern pygmyfly or tiny dragonfly. Part of the Libellulidae family of dragonflies, the scarlet dwarf’s native geography stretches from Southeast Asia to China and Japan. It’s occasionally found in Australia. The dragonfly’s wingspan measures roughly 20 millimeters or three-quarters of an inch. `,
					territory: `Southeast Asia`,
					fact: "Among insects, dragonflies are among the largest ",
					millimeters: 20,
				},
				{
					name: "Patu Digua Spider",
					description: `On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea). It’s also known as the northern pygmyfly or tiny dragonfly. Part of the Libellulidae family of dragonflies, the scarlet dwarf’s native geography stretches from Southeast Asia to China and Japan. It’s occasionally found in Australia. The dragonfly’s wingspan measures roughly 20 millimeters or three-quarters of an inch. `,
					territory: `Southeast Asia`,
					fact: "Among insects, dragonflies are among the largest ",
					millimeters: 20,
				},
				{
					name: "Bolbe Pygmaea Mantis",
					description: `On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea). It’s also known as the northern pygmyfly or tiny dragonfly. Part of the Libellulidae family of dragonflies, the scarlet dwarf’s native geography stretches from Southeast Asia to China and Japan. It’s occasionally found in Australia. The dragonfly’s wingspan measures roughly 20 millimeters or three-quarters of an inch. `,
					territory: `Southeast Asia`,
					fact: "Among insects, dragonflies are among the largest ",
					millimeters: 20,
				},
				{
					name: "Midget Moths",
					description: `On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea). It’s also known as the northern pygmyfly or tiny dragonfly. Part of the Libellulidae family of dragonflies, the scarlet dwarf’s native geography stretches from Southeast Asia to China and Japan. It’s occasionally found in Australia. The dragonfly’s wingspan measures roughly 20 millimeters or three-quarters of an inch. `,
					territory: `Southeast Asia`,
					fact: "Among insects, dragonflies are among the largest ",
					millimeters: 20,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete(
			"Insects",
			{
				name: [],
			},
			{}
		);
	},
};
