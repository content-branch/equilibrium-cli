#!/usr/bin/env ts-node
// file: pizza-hit.ts
const {program} = require("@caporal/core")

program
  // First possible command: "order"
  .command("order", "Order a pizza")
  .argument("<type>", "Type of pizza")
  .option("-e, --extra-ingredients <ingredients>", "Extra ingredients")
  .action(({ logger, args, options }) => {
    logger.info("Order received: %s", args.type)
    if (options.extraIngredients) {
      logger.info("Extra: %s", options.extraIngredients)
    }
  })

  // Another command: "cancel"
  .command("cancel", "Cancel an order")
  .argument("<order-id>", "Order id")
  .action(({ logger, args }) => {
    logger.info("Order canceled: %s", args.orderId)
  })

program.run()

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