const fs = require("fs");
const readline = require("readline");
const events = require("events");

const TEXT_PATH = "./input1.txt";
async function tuningTrouble() {
  const rl = readline.createInterface({
    input: fs.ReadStream(TEXT_PATH),
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {
    let charSet = new Set();
    let l = 0;
    for (let i = 0; i < line.length; i++) {
      while (charSet.has(line[i])) {
        charSet.delete(line[l]);
        l++;
      }
      charSet.add(line[i]);
      if (charSet.size === 14) {
        break;
      }
    }
    console.log(l + 14);
    console.log(line[l]);
    console.log(charSet);
  });
  await events.once(rl, "close");
}
tuningTrouble();
