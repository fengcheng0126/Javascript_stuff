let sentence = 'hello world 1  2  3       ';
function numberOfWords (input) {
    let spaces = sentence.trim();
    let spaces2 = spaces.split(/\s+/);
    console.log(spaces2);
    return spaces.length
}

console.log(numberOfWords(sentence));

