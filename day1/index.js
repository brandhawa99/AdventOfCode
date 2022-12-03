const fs = require("fs");
const ReadLine = require("readline");
const events = require("events");

const TEXT_FILE = "./calorie_list.txt";

const how_many_cals = async () => {
  try {
    const rl = ReadLine.createInterface({
      input: fs.createReadStream(TEXT_FILE),
      crlfDelay: Infinity,
    });
    let max = 0;
    let curr = 0;
    rl.on("line", (line) => {
      console.log(line);
      if (line == "") {
        max = Math.max(curr, max);
        console.log(curr);
        curr = 0;
      }
      curr += +line;
    });
    await events.once(rl, "close");
    console.log(`The max calories was ${max}`);
  } catch (error) {
    console.error(error);
  }
};

how_many_cals();
