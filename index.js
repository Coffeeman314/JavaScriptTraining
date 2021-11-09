const burrito = 15.678;
const steak = 123.965;
const ramen = 90.2345;

const maxPrice = Math.max(burrito, steak, ramen);
console.log(Math.max(burrito, steak, ramen));

const minPrice = Math.min(burrito, steak, ramen);
console.log(minPrice);

const sumPrices = burrito + ramen + steak;
console.log(sumPrices);

const floorBurrito = Math.floor(burrito);
const floorSteak = Math.floor(steak);
const floorRamen = Math.floor(ramen);
const sumFloorFood = floorBurrito + floorSteak + floorRamen;
console.log(sumFloorFood);

const preRound = sumFloorFood / 100;
const roundToHundred = Math.round(preRound) * 100;
console.log(roundToHundred);

function testNum(sumFloorFood) {
  if (sumFloorFood % 2 === 0) {
    return "Yep, it's even";
  } else {
    return "Emm, nope...";
  }
}
console.log(testNum(sumFloorFood));

const takeAll = burrito + steak + ramen;
const money = 500;
const keepTheChangeBitch = money - takeAll;
console.log(keepTheChangeBitch);

const averageValue = takeAll / 3;
console.log(averageValue.toFixed(2));

const discount = Math.round(Math.random() * 100);

const cost = takeAll / 2;
console.log(discount);
const discountValue = (takeAll * discount) / 100;
const needToPay = takeAll - discountValue;
console.log(needToPay.toFixed(2));
const profit = cost - discountValue;
console.log(profit.toFixed(2));

let container = document.querySelector("#container");
container.innerHTML = `
<p>Maximal price: ${maxPrice};</p>
<p>Minimal price: ${minPrice};</p>
<p>Summary price: ${sumPrices};</p>
<p>Each item without coins: ${sumFloorFood};</p>
<p>Rounded to hundred: ${roundToHundred};</p>
<p>Is that value even? ${testNum(sumFloorFood)};</p>
<p>I have 500$. Okay, your change is ${keepTheChangeBitch};</p>
<p>Average value: ${averageValue.toFixed(2)};</p>
<p>Let's imagine prikolejshn.</p>
<p>If you'll have discount ${discount}%,</p>
<p>You pay me ${needToPay.toFixed(2)}$,<p>
<p>Than my profit will be only ${profit.toFixed(2)}$. Isn't it creepy?<p>
`;
