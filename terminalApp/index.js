const yargs = require("yargs");
const chalk = require('chalk');

const {addPerson, listPersons, removePerson} = require('./src/person');

yargs.scriptName(`${chalk.yellow("person management")}`);
yargs.usage(`$0 ${chalk.red("<command>")} ${chalk.yellow("[args]")}`);
yargs.version("1.1.0");

yargs.command({
    command: "create",
    describe: `${chalk.green("[create new person]")}`,
    aliases: ["c"],
    builder: {
        fullname: {
            alias: "f",
            describe: "Persons Fullname",
            demandOption: true,
            type: "string",
        },
        phone: {
            alias: "p",
            describe: "Person phone number",
            demandOption: true,
            type: "number",
        },
        email: {
            alias: "e",
            describe: "Person email address",
            demandOption: true,
            type: "string",
        },
    },
    handler({fullname, phone, email}) {
        addPerson(fullname, phone, email);
    },
});

yargs.command({
    command: "list",
    describe: `${chalk.green("[listing persons saved]")}`,
    aliases: ['l'],
    handler() {
        listPersons();
    }
});

yargs.command({
    command: "remove",
    describe: `${chalk.green("[remove persons]")}`,
    aliases: ['r'],
    builder: {
        fullname: {
            alias: "f",
            describe: "Persons Fullname",
            demandOption: true,
            type: "string",
        }
    },
    handler({fullname}) {
        removePerson(fullname);
    }
})

yargs.parse();
