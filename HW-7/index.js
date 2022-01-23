const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};
const poland = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

// 1
function getMyTaxes(salary) {
  const taxes = this.tax * salary;
  return taxes.toFixed(2);
}
console.log("My taxes in Ukraine:", getMyTaxes.call(ukraine, 3000));

// 2
function getMiddleTaxes() {
  const taxes = this.tax * this.middleSalary;
  return taxes.toFixed(2);
}
console.log("Middle taxes in Latvia:", getMiddleTaxes.call(latvia));

// 3
function getTotalTaxes() {
  const totalTaxes = this.tax * this.middleSalary * this.vacancies;
  return totalTaxes.toFixed(2);
}
console.log("Total taxes in Poland:", getTotalTaxes.call(poland));

// 4
setInterval(getMyProfit, 10000, latvia);
function getMyProfit(country) {
  const randSalary = Math.floor(Math.random() * 501) + 1500;
  const getTax = country.tax * randSalary;
  const getProf = randSalary - getTax;
  console.log({
    salary: randSalary,
    taxes: getTax,
    profit: getProf,
  });
}