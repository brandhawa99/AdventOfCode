const fs = require("fs");
const readline = require("readline");
const events = require("events");

const TEXT_FILE_PATH = "./input.txt";

async function howManyContianed() {
  let containedCount = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream(TEXT_FILE_PATH),
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {
    const groups = line.split(",");
    const sections = groups.map((group) => {
      return group.split("-");
    });
    let sec1 = sections[0];
    let sec2 = sections[1];
    if (
      (+sec1[0] >= +sec2[0] && +sec1[1] <= +sec2[1]) ||
      (+sec1[0] <= +sec2[0] && +sec1[1] >= +sec2[1])
    ) {
      console.log(groups);
      containedCount++;
    }
  });
  await events.once(rl, "close");
  console.log(containedCount);
}

howManyContianed();
