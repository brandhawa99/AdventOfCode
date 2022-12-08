const fs = require("fs");
const readline = require("readline");
const events = require("events");

const TEXT_PATH = "./input.txt";
async function tuningTrouble() {
  const rl = readline.createInterface({
    input: fs.ReadStream(TEXT_PATH),
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {});
  await events.once(rl, "close");
}
