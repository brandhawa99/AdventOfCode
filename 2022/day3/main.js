const fs = require("fs");
const readline = require("readline");
const events = require("events");

const TEXTFILE_PATH = "./input.txt";

const get_priority_total = async () => {
  let sum_of_priority = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream(TEXTFILE_PATH),
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {
    let set = new Set();
    let one = line.slice(0, line.length / 2);
    let two = line.slice(line.length / 2, line.length);
    console.log(one, two);
    // all all the characters to the set
    for (let i = 0; i < one.length; i++) {
      set.add(one[i]);
    }
    // check if the character is in the set
    for (let j = 0; j < two.length; j++) {
      let val = two[j];
      if (set.has(val)) {
        console.log(val);
        if (isLowerCase(val)) {
          sum_of_priority += getLowerCode(val);
        } else {
          sum_of_priority += getUpperCode(val);
        }
        break;
      }
    }
  });
  await events.once(rl, "close");
  console.log(sum_of_priority);
};

get_priority_total();
// get the value of the uppercase character
function getUpperCode(val) {
  return val.charCodeAt(0) - "A".charCodeAt(0) + 27;
}
// get the value of the lowercase character
function getLowerCode(val) {
  return val.charCodeAt(0) - "a".charCodeAt(0) + 1;
}
// figure out if val is uppercase or lowercase
function isLowerCase(val) {
  if (
    val.charCodeAt(0) >= "a".charCodeAt(0) &&
    val.charCodeAt(0) <= "z".charCodeAt(0)
  ) {
    return true;
  }
  return false;
}
