const prompt = require("prompt-sync")();

// Getting inputs and parsing them to integers
let basicSalary = parseInt(prompt("Enter your basic salary: "));
let benefits = parseInt(prompt("Enter your benefits: "));
let insurance = parseInt(prompt("Enter your insurance: "));
let mortgage = parseInt(prompt("Enter your mortgage: "));

// Function to calculate taxation
function taxation(grossSalary, insurance) {
  let paye = 0;

  // Tax brackets and PAYE calculation
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  }
   else if (grossSalary > 24000 && grossSalary <= 32333) 
    {
    paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } 
  else if (grossSalary > 32333 && grossSalary <= 500000) 
    {
    paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } 
  else if (grossSalary > 500000 && grossSalary <= 800000) 
    {
    paye = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } 
  else if (grossSalary > 800000) 
    {
    paye = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
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

// Function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) return 150;
  if (grossSalary <= 7999) return 300;
  if (grossSalary <= 11999) return 400;
  if (grossSalary <= 14999) return 500;
  if (grossSalary <= 19999) return 600;
  if (grossSalary <= 24999) return 750;
  if (grossSalary <= 29999) return 850;
  if (grossSalary <= 34999) return 900;
  if (grossSalary <= 39999) return 950;
  if (grossSalary <= 44999) return 1000;
  if (grossSalary <= 49999) return 1100;
  if (grossSalary <= 59999) return 1200;
  if (grossSalary <= 69999) return 1300;
  if (grossSalary <= 79999) return 1400;
  if (grossSalary <= 89999) return 1500;
  if (grossSalary <= 99999) return 1600;
  return 1700;
}

// Function to calculate NSSF deduction
function calculateNSSF(grossSalary) {
  let tierI = Math.min(grossSalary, 7000) * 0.06;
  let tierII = Math.max(0, Math.min(grossSalary - 7000, 36000 - 7000)) * 0.06;
  return tierI + tierII;
}

let deductions = benefits + mortgage;
// Calculate gross salary
let grossSalary = basicSalary - deductions;

// Check disability status
let disability = prompt('Do you have a disability exemption certificate? (yes/no) ');

let paye = 0;
if (disability.toLowerCase() === 'yes') {
  paye = 0;
} else {
  paye = taxation(grossSalary, insurance);
}

// Calculate NHIF deduction
let nhif = calculateNHIF(grossSalary);

// Calculate NSSF deduction
let nssf = calculateNSSF(grossSalary);

// Calculate net salary
let netSalary = grossSalary - paye - nhif - nssf;

console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE: ${paye.toFixed(2)}`);
console.log(`NHIF: ${nhif}`);
console.log(`NSSF: ${nssf.toFixed(2)}`);
console.log(`Net Salary: ${netSalary.toFixed(2)}`);
