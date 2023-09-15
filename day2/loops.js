"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    let vowelOutput = "";
    let consonantOutput = "";

    for (let i = 0; i < s.length; i++) {
      const currentChar = s.charAt(i);

      if (vowels.includes(currentChar)) {
        vowelOutput += currentChar + "\n";
      } else {
        consonantOutput += currentChar + "\n";
      }
    }

    // Print vowels followed by consonants
    console.log(vowelOutput + consonantOutput);
  }

  // Example usage:
  const inputString = "javascriptloops";
  vowelsAndConsonants(inputString);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
