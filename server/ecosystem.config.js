module.exports = {
	apps: [
		{
			name: "task-orbit",
			script: "yarn",
			args: "run dev",
			env: {
				NODE_ENV: "development",
			},
		},
	],
};
