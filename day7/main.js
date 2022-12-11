const fs = require("fs");
const events = require("events");
const readline = require("readline");

const TEXT_PATH = "./input.txt";
async function noSpaceLeft() {
  const rl = readline.createInterface({
    input: fs.ReadStream(TEXT_PATH),
    crlfDelay: Infinity,
  });
  let total = 0;
  rl.on("line", (line) => {
    let items = line.split(" ");
    for (let i = 0; i < items.length; i++) {
      let val = items[i];
      if (onlyNums(val)) {
        let num = parseInt(val);
        total += num;
      }
    }
  });
  console.log(total);
  await events.once(rl, "close");
}

function onlyNums(str) {
  return /\d/.test(str);
}
noSpaceLeft();
