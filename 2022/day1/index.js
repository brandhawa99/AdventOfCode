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
    let max_arr = [];
    let max = 0;
    let curr = 0;
    rl.on("line", (line) => {
      if (line == "") {
        max = Math.max(curr, max);
        max_arr.push(curr);
        console.log(curr);
        curr = 0;
      }
      curr += +line;
    });
    await events.once(rl, "close");
    console.log(`The max calories was ${max}`);
    console.log(
      max_arr.sort((a, b) => {
        return b - a;
      })
    );
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += max_arr[i];
    }
    console.log(sum);
  } catch (error) {
    console.error(error);
  }
};

how_many_cals();
