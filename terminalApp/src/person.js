const fs = require('fs');
const chalk = require('chalk');

const addPerson = (fullname, phone, email) => {
    const persons = loadPersons();
    const dublicatePerson = persons.find(person => person.fullname === fullname);
    if(! dublicatePerson) 
    {
        persons.push({fullname, phone, email});
       savePerson(persons);
        console.log(chalk.green('person saved :)'));
    } else 
    {
        console.log(chalk.red('person already existed :('));
    }
   
}

const loadPersons = () => {
    try {
        const dataBuffer = fs.readFileSync('./db/person.json');
        const persons = dataBuffer.toString();
        return JSON.parse(persons);    
    } catch (error) {
        console.log(chalk.red(error));
        return [];
    }
   
}

const savePerson = persons => {
    const data = JSON.stringify(persons);
    fs.writeFileSync('db/person.json', data);
}

const listPersons = () => {
    const persons = loadPersons();
    if(persons.length > 0) {
        console.log(chalk.yellowBright('your persons is (: \n'));
        // console.table(persons);
        persons.forEach(person => {
            console.log(`\t ${chalk.green("fullname")} : ${person.fullname}`);
            console.log(`\t ${chalk.green("phone")} : ${person.phone}`);
            console.log(`\t ${chalk.green("email")} : ${person.email}`);
            console.log(chalk.redBright("\t--------------------------------"));
        });
    } else {
        chalk.red('you dont have any user:(');
    }
}

const removePerson = (fullname) => {
    const persons = loadPersons();
    const filterPersons = persons.filter(person => person.fullname != fullname);

    if(persons.length > filterPersons.length) {
        savePerson(filterPersons);
        console.log(chalk.green(`${fullname} has been removed`));
    } else {
        chalk.red('contact not found:(');
    }
}


module.exports = {
    addPerson,
    listPersons,
    removePerson
}