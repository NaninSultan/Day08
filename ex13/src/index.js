function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber(minNumber, maxNumber);
console.log(randomRangeNumber(2, 10));
module.exports = randomRangeNumber;
