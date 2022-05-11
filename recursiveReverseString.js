/** @format */

let i = 0;
function reverseString(string, i) {
  if (i < string.length) {
    return reverseString(string, i + 1) + string[i];
  } else {
    return "";
  }
}

console.log(reverseString("abcb", 0));
