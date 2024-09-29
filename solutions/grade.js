//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

//asking user to enter marks
const prompt = require('prompt-sync')();
let marks = prompt('Enter your marks: ');
//function to grade marks
function grading(marks){
    let grade='';
//checking if marks are valid
    if(marks>100 || marks<0){
        grade='Invalid marks';
    }
//grading the marks
    else if(marks>79){
        grade='A';
    }
    else if(marks>=60 && marks<=79){
        grade='B';
    }
    else if (marks>=49 && marks<=59){
        grade='C';
    }
    else if (marks>=40 && marks<=49){
        grade='D';
    }
    else {
        grade='E';
    }
    return grade;
}
console.log('Grade: '+grading(marks));

