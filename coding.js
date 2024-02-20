// var massMark1 = 78;
// var heightMark1 = 1.69; 
// var massJohn1 = 92; 
// var heightJohn1 = 1.95;
// var BMIMark1 = massMark1 / (heightMark1 * heightMark1);
// var BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);


// console.log("Data 1:");
// console.log("Mark's BMI:", BMIMark1);
// console.log("John's BMI:", BMIJohn1);

// var markHigherBMI1 = BMIMark1 > BMIJohn1;

// console.log("Does Mark have a higher BMI than John?", markHigherBMI1);

// var massMark2 = 95; 
// var heightMark2 = 1.88;
// var massJohn2 = 85;
// var heightJohn2 = 1.76; 
// var BMIMark2 = massMark2 / (heightMark2 * heightMark2);
// var BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// console.log("Data 2:");
// console.log("Mark's BMI:", BMIMark2);
// console.log("John's BMI:", BMIJohn2);

// var markHigherBMI2 = BMIMark2 > BMIJohn2;

// console.log("Does Mark have a higher BMI than John?", markHigherBMI2);

//challenges2

// var massMark1 = 78; 
// var heightMark1 = 1.69; 
// var massJohn1 = 92; 
// var heightJohn1 = 1.95; 

// var massMark2 = 95; 
// var heightMark2 = 1.88; 
// var massJohn2 = 85; 
// var heightJohn2 = 1.76; 

// var BMIMark1 = massMark1 / (heightMark1 * heightMark1);
// var BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

// var BMIMark2 = massMark2 / (heightMark2 * heightMark2);
// var BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);


// var printHigherBMI = (BMIMark, BMIJohn) => {
//     if (BMIMark > BMIJohn) {
//         console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
//     } else if (BMIJohn > BMIMark) {
//         console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
//     } else {
//         console.log("Mark and John have the same BMI!");
//     }
// };

// console.log("Data 1:");
// printHigherBMI(BMIMark1, BMIJohn1);

// console.log("Data 2:");
// printHigherBMI(BMIMark2, BMIJohn2);

//challenges 3

// const dolphinsScores1 = [96, 108, 89];
// const koalasScores1 = [88, 91, 110];

// var sum=0;
// for(let Average of dolphinsScores1)
//     {
//         dolphinsum = (sum+Average)/dolphinsScores1.length;
//     } 

//     for(let Average of koalasScores1)
//     {
//         koalassum = (sum+Average)/dolphinsScores1.length;
//     }

//     if (dolphinsum > koalassum) {
//         console.log("Dolphins win the trophy");
//     } else if (koalassum > dolphinsum) {
//         console.log("Koalas win the trophy");
//     } else {
//         console.log("Both win the trophy");
//     }


//challenges4

var bill = 275;


 if (50 <= bill <= 300){
    tip = bill * 0.15;
    var totalvalue = bill+tip;
    console.log(`${tip} ${totalvalue}`)
 }
 else{
    tip = bill * 0.20;
    var totalvalue = bill+tip;
    console.log(`${tip} ${totalvalue}`)
 }
    


    


