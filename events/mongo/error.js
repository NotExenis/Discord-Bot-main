const chalk = require('chalk');

module.exports = {
    name: "error",
    execute(error){
        chalk.red("[Database status]: " + error);
    }
}