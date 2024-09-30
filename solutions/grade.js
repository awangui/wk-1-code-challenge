//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

//asking user to enter marks
const prompt = require('prompt-sync')();
let marks = Number(prompt('Enter your marks: '));
//function to grade marks
function grading(marks){
    let grade='';
//checking if marks are valid
    while(marks>100 || marks<0){
        console.log('Invalid marks');
        marks = Number(prompt('Please enter a valid number: '));
    }
//grading of valid marks
    if(marks>=0 && marks<=100){
        if(marks>79){
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
        else if (marks<40){
            grade='E';
        }
}
    return grade;
}
console.log('Grade: '+grading(marks));

