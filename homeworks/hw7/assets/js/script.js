// Computes the average of three numbers
function averageThreeNumbers(a, b, c) {
    return (a + b + c) / 3;
}

// Creates a sentence
function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun + "s.";
}

// Returns a random integer from 0 to max
function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1)
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x, y, z);
let sentence = createSentence(avg, "wombat");
console.log(sentence);

