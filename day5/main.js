const fs = require("fs");
const readline = require("readline");
const event = require("events");

const TEXT_ROUTE = "./input.txt";
let containers = [
  ["W", "B", "D", "N", "C", "F", "J"],
  ["P", "Z", "V", "Q", "L", "S", "T"],
  ["P", "Z", "B", "G", "J", "T"],
  ["D", "T", "L", "J", "Z", "B", "H", "C"],
  ["G", "V", "B", "J", "S"],
  ["P", "S", "Q"],
  ["B", "V", "D", "F", "L", "M", "P", "N"],
  ["P", "S", "M", "F", "B", "D", "L", "R"],
  ["V", "D", "T", "R"],
];

async function organizeContainers() {
  const rl = readline.Interface({
    input: fs.createReadStream(TEXT_ROUTE),
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {
    line = line.replace(/[a-z]/gi, "");
    line = line.split(" ");
    for (let i = 0; i < +line[1]; i++) {
      let val = containers[+line[3] - 1].pop();
      containers[+line[5] - 1].push(val);
    }
  });
  await event.once(rl, "close");
  let holder = [];
  for (let i = 0; i < containers.length; i++) {
    holder.push(containers[i].pop());
  }
  console.log(containers);
  console.log(holder);
}

organizeContainers();
