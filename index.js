// primeData
const burrito = 15.678;
const steak = 123.965;
const ramen = 90.2345;

// exercise 1
const maxPrice = Math.max(burrito, steak, ramen);
console.log(Math.max(burrito, steak, ramen));

// document.writeIn(<p>'some text'</p>)
// exercise 2
const minPrice = Math.min(burrito, steak, ramen);
console.log(minPrice);

// exercise 3
const sumPrices = burrito + ramen + steak;
console.log(sumPrices);

// exercise 4
const floorBurrito = Math.floor(burrito);
const floorSteak = Math.floor(steak);
const floorRamen = Math.floor(ramen);
const sumFloorFood = floorBurrito + floorSteak + floorRamen;
console.log(sumFloorFood);

// exercise 6
const preRound = sumFloorFood / 100;
const roundToHundred = Math.round(preRound) * 100;
console.log(roundToHundred);

// const preRound = sumFloorFood/100
// const roundToHundred = Math.ceil (preRound)*100
// console.log (roundToHundred)

// exercise 7

function testNum(sumFloorFood) {
  let result;
  if (sumFloorFood % 2 == 0) {
    result = "Yep, it's even.";
  } else {
    result = "Emm, nope...";
  }
  return result;
}
console.log(testNum(sumFloorFood));

// exercise 8
const takeAll = burrito + steak + ramen;
const keepTheChangeBitch = 500 - takeAll;
console.log(keepTheChangeBitch);

// exercise 9
const averageValue = takeAll / 3;
console.log(averageValue.toFixed(2));

// exercise 10
const discount = Math.round(Math.random() * 100);

const cost = takeAll / 2;
console.log(discount);
const discountValue = (takeAll * discount) / 100;
const needToPay = takeAll - discountValue;
console.log(needToPay.toFixed(2));
const profit = cost - discountValue;
console.log(profit.toFixed(2));

// last part
document.writeln("Maximal price:");
document.writeln(maxPrice);
document.writeln("<br/>");

document.writeln("Minimal price:");
document.writeln(minPrice);
document.writeln("<br/>");

document.writeln("Summary price:");
document.writeln(sumPrices);
document.writeln("<br/>");

document.writeln("Summary price without coins:");
document.writeln(sumFloorFood);
document.writeln("<br/>");

document.writeln("Rounded to hundred:");
document.writeln(roundToHundred);
document.writeln("<br/>");

document.writeln("Is that value even?");
document.writeln(testNum(sumFloorFood));
document.writeln("<br/>");

document.writeln("I have 500$. Okay, your change is");
document.writeln(keepTheChangeBitch);
document.writeln("<br/>");

document.writeln("Average value:");
document.writeln(averageValue.toFixed(2));
document.writeln("<hr/>");

document.writeln("Let's imagine prikolejshn. If you'll have discount");
document.writeln(discount);

document.writeln("%, you pay me");
document.writeln(needToPay.toFixed(2));
document.writeln("$,")
document.writeln("<br/>");
document.writeln("than my profit will be only");
document.writeln(profit.toFixed(2));
document.writeln("$. Isn't it creepy?");
