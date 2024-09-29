// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.
const prompt = require("prompt-sync")();

// Getting inputs and parsing them to integers
let basicSalary = parseInt(prompt("Enter your basic salary: "));
let benefits = parseInt(prompt("Enter your benefits: "));
let insurance = parseInt(prompt("Enter your insurance: "));


// Calculate gross salary (add all components)
let grossSalary = basicSalary - benefits;

// Function to calculate taxation
function taxation(grossSalary, insurance) {
  let paye = 0;

  // Tax brackets and PAYE calculation
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  } 
  else if (grossSalary > 24000 && grossSalary <= 32333) {
    paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } 
  else if (grossSalary > 32333 && grossSalary <= 500000) {
    paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } 
  else if (grossSalary > 500000 && grossSalary <= 800000) {
    paye =24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } 
  else if (grossSalary > 800000) {
    paye =
      24000 * 0.1 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (grossSalary - 800000) * 0.35;
  }

  // Reliefs
  let personalRelief = 2400;
  let insuranceRelief = 0.15 * insurance;

  // Limit insurance relief to a maximum of 5000
  if (insuranceRelief > 5000) {
    insuranceRelief = 5000;
  }

  // Subtract reliefs from PAYE
  paye = paye - personalRelief - insuranceRelief;

  // Ensure paye is not negative
  if (paye < 0) {
    paye = 0;
  }

  return paye;
}

// Calculate PAYE
let paye = taxation(grossSalary, insurance);

// Calculate net salary
let netSalary = grossSalary - paye;

console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE: ${paye.toFixed(2)}`);
console.log(`Net Salary: ${netSalary.toFixed(2)}`);
