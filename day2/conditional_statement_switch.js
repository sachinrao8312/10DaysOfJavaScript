'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    const A = new Set(['a','e','i','o','u']);
    const B = new Set(['b','c','d','f','g']);
    const C = new Set(['h','j','k','l','m']);

    switch (true) {
        case A.has(s[0]):
            letter = 'A';
            break;
        case B.has(s[0]):
            letter = 'B';
            break;
        case C.has(s[0]):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}