
// 1. Get array of random numbers
const numArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const randomNumArr = numArr.map(
  (item) => item + (Math.floor(Math.random() * 99) + 1)
);
console.log("1. Random array: ", randomNumArr);

// 2. getAverage function
const numbers = [2, 5, 4, 3, 6, 7, 4];
const getAverage = (numbers) => {
  const summary = numbers.reduce((summary, number) => {
    return summary + number;
  }, 0);
  return summary / numbers.length;
};
console.log('2. Average count: ', getAverage(numbers).toFixed(2));

// 3.
const allNumbers = [1, 2, 110, 4, 15, 8, 55, 99];
const oddOnly = allNumbers
  .filter((number) => Math.floor(number) === number)
  .filter((number) => number % 2 != 0);
console.log('3. Filtered array: ', oddOnly.join(", "));

// 4.
const taskFiveArr = [-1, 2, 5, -9, -4, 1, 14, -7];
const positiveNumbers = taskFiveArr.filter((number) => number > 0);
console.log('4. Positive numbers count: ', positiveNumbers.length);

// 5.
const getDividedByFive = allNumbers.filter((number) => number % 5 === 0);
console.log('5. Divided by 5 numbers: ', getDividedByFive);

// 6. generateCombinations
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur,
      memo = memo || [];
    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    
    return results;
  }

  return permute(inputArr);
}
console.log('6. Al combinations: ', permutator("abc".split("")).join("//"));