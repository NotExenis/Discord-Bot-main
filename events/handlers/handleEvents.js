const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.handleEvents = async () => {
        const mongoFolderPath = path.join(__dirname, '..', 'mongo');
        const eventFolders = fs.readdirSync(mongoFolderPath);
        for (const folder of eventFolders) {
            const eventFilesPath = path.join(mongoFolderPath, folder);
            const eventFiles = fs.readdirSync(eventFilesPath).filter((file) => file.endsWith('.js'));
            switch (folder) {
                case 'mongo':
                    for (const file of eventFiles) {
                        // Construct the path to the event file
                        const eventFilePath = path.join(eventFilesPath, file);
                        const event = require(eventFilePath);
                        if(event.once){
                            connection.once(event.name, (...args) => event.execute(client, ...args));
                        } else {
                            connection.on(event.name, (...args) => event.execute(client, ...args));
                        }
                    }
                    break;
            }
        }
    }
}
