const prompt = require('prompt-sync')();
let basicSalary = prompt('Enter your basic salary: ');
let benefits=prompt('Enter your benefits: ');
// let insurance=prompt('Enter your insurance: ');
// let hosp=prompt('Enter your house allowance: ');
let grossSalary=parseInt(basicSalary)+parseInt(benefits);
//function to calculate taxation
function taxation(grossSalary,insurance){
    let paye=0;
    //calculating net salary
    //checking if net salary is taxable
    if(grossSalary<24000){
        paye=0;
    }
    //calculating paye
    if(grossSalary==24000){
        paye=grossSalary*0.10;
    }
    if(grossSalary>24000 && grossSalary<=32333){
        paye=grossSalary*0.25;
    }
    if(grossSalary>32333 && grossSalary<=500000){
        paye=grossSalary*0.30;
    }
    if(grossSalary>500000 && grossSalary<=800000){
        paye=grossSalary*0.325;
    }
    else if(grossSalary>800000){
        paye=grossSalary*0.35;
    }
    let personalRelief=2400;
    let insuranceRelief=0.15*parseInt(insurance);
    if(insuranceRelief>5000){
        insuranceRelief=5000;
    }
    else{
        insuranceRelief=insuranceRelief;
    }
    paye=paye-personalRelief-insuranceRelief;

    return paye;
}
function nhif(grossSalary) {
    // function to calculate NHIF contribution
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
function nssf(grossSalary) {
    // function to calculate NSSF contribution
function nssf(grossSalary) {;
        let tier1Limit = 7000;
        let tier2Limit = 36000;
  

    let tier1Contribution = Math.min(grossSalary, tier1Limit) * 0.06;
    let tier2Contribution = 0;

    if (grossSalary > tier1Limit) {
        tier2Contribution = Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit) * 0.06;
    }

    return tier1Contribution + tier2Contribution;
}
let nhifContribution = nhif(grossSalary);
let nssfContribution = nssf(grossSalary);
// let nhifContribution = nhif(grossSalary);
let netSalary = grossSalary - paye - nhifContribution - nssfContribution;sSalary);

console.log(`Net Salary: ${netSalary}`);
console.log(`NHIF Contribution: ${nhifContribution}`);
console.log(`NSSF Contribution: ${nssfContribution}`);

console.log(`Net Salary: ${netSalary}`);
