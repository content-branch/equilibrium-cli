const { spawn, exec } = require("child_process");
const consola = require('consola');

exec('git clone', (error, stdout, stderr) => {
    if (error) {
        consola.error(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        consola.error(`stderr: ${stderr}`);
        return;
    }
    consola.success(`stdout: ${stdout}`);
});


//const ls = spawn("ls", ["-la"]);
// const ls = spawn('git clone');

// ls.stdout.on("data", data => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", data => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('error', (error) => {
//     console.log(`error: ${error.message}`);
// });

// ls.on("close", code => {
//     console.log(`child process exited with code ${code}`);
// });