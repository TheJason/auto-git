const { exec } = require('child_process');
const config = require('./config/default');

function checkForUpdates(){
    // Comment out the console.logs if you don't want to see what's happening.
    console.log("checking Git for Changes");
    exec(config.commands.checkForUpdates, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        if(stdout.includes(config.seachString)){
            console.log("Changes found, running Git Pull, npm install, and quasar build");
            exec(config.commands.pullAndBuild, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            });
        } else{
            console.log("no changes found");
        };
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

checkForUpdates();

setInterval(function(){
    checkForUpdates()
}, config.checkEvery)
