import { Command } from "commander";
import { PKG_DESCRIPTION, PKG_VERSION } from "./version.js";

const program = new Command();

//Grabs version and description from package.json
program.version(PKG_VERSION).description(PKG_DESCRIPTION);

program
	.command("hello")
	.argument("[name]", "Your name")
	.action((name) => {
		if (!name) name = "World";
		console.log(`Hello ${name}!`);
		process.exit(0);
	});

program.parse(process.argv);
