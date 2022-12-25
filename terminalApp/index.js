// const fs = require('fs');
// const persons = [
//     {id:1, name:'asiye'},
//     {id:2, name:'zahra'},
//     {id:3, name:'maryam'}
// ];
// fs.writeFileSync('db/person.json', JSON.stringify(persons));
// const data = JSON.parse(fs.readFileSync('db/person.json').toString());
// console.log(typeof data);



// const command = process.argv[2];
// switch(command) {
//     case 'add':
//         console.log('adding ...')
//         break;
//     case 'remove':
//         console.log('removeing ...')
//         break;
//     default:
//         console.log('command not valid ...')
//         break;
// }


const yargs = require("yargs");
// console.log(process.argv)
// console.log(yargs.argv)

yargs.command({
    command: "create",
    describe: "[create new person]",
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
        console.log(fullname, email, phone)
    },
});

yargs.parse();
// console.log(yargs.argv)
