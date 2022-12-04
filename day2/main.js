const fs = require("fs");
const readline = require("readline");
const events = require("events");

let map = new Map();
map.set("Y", 2);
map.set("X", 1);
map.set("Z", 3);

// total score caluclation
// ROCK -X-1 -- Paper -Y- 2 -- Scissors -Z- 3
// loss 0 -- Draw 3 -- Win 6
// A<Y ROCK paper 8 2
// B<X PAPER scissors 3
// C<Z SCISSORSrock 1
// ROCK A X
// PAPER B Y
// SCISSORS C Z
const TEXT_FILE = "./input.txt";
const get_total_score = async () => {
  try {
    let score = 0;
    let gameNum = 0;
    const rl = readline.createInterface({
      input: fs.createReadStream(TEXT_FILE),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      let inputs = line.split(" ");
      let u = inputs[0];
      let me = inputs[1];
      if (
        (u == "A" && me == "X") ||
        (u == "B" && me == "Y") ||
        (u == "C" && me == "Z")
      ) {
        score += 3;
      }
      if (
        (u == "A" && me == "Y") ||
        (u == "B" && me == "Z") ||
        (u == "C" && me == "X")
      ) {
        score += 6;
      }
      score += map.get(me);
      gameNum++;
      console.log(`Game Num ${gameNum}`, score, `ME = ${me}: YOU = ${u}`);
    });
    await events.once(rl, "close");
    console.log(score);
  } catch (error) {
    console.log(error);
  }
};

get_total_score();
