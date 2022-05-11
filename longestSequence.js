/** @format */

let sequence = "dghhhmhmx";

function longestSequence(sequence) {
  let total = 0;
  let longestSequence = [];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i - 1] === sequence[i] || sequence[i + 1] === sequence[i]) {
      total += 1;
    } else {
      total = 0;
    }
    longestSequence.push({
      sequence: sequence[i],
      total: total,
    });
  }
  longestSequence.sort((a, b) => a.total - b.total);
  const highestValue = longestSequence.pop();
  return highestValue;
}

console.log(longestSequence(sequence));
