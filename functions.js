/*const cashWithdraawal = (amount, accountNum) => {
    console.log( "withdrawing ${amount} from{accountNum}");
}
cashWithdraawal(300,)*/


//-------------------------------------------------------------
//activity 1
/*function factorial (n){
    if ((n === 0) || (n === 1))  

    return 1;

}else{
    return(n * factorial(n-1));
}

console.log(factorial(33));
//This is the most modern way below to state a function

const factorial (n)  => {
    if ((n === 0) || (n === 1))  

    return 1;
}else{
    return(n * factorial(n-1));
}

console.log(factorial(33));*/


//-------------------------------------------------------------------------------
//ACTIVITY 2
/*Edit the below snippet to include two parameters and a running order count updated when the function is called*/
/*let order count = 0;

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple");

let order count = 0;*/

/*const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("pineapple","salami");*/

//----------------------------------------------------------

//ACTIVITY 3
// A cash machine dispenses cash if your pin numer is correct and
//your balance is equal to string, or more than, the amount you're trying
//to withdraw.

/*let balance = "£100"
let pin = 1234
let newBalance = balance - amount

const  withdrawal = (pin,amount) => {
if (pin !== 1234 && withdrawal > "£100")
    console.log(balance - amount);
    console.log("Please speak to your bank manager");
        
    } else if (pin !== 1234 && withdrawal <= ("£100")) {
        console.log(balance - amount);
        console.log("Not accepted, wrong pin"); 
             
        } else {
            console.log(balance - amount);
            console.log("Please take your money.  This is your new ${newBalance}.");
         };
        withdrawal(1234, "£50")()*/


  // Day 4 AM possible solutions 

// Functions: Activity 1-------------------------------------

// Turn into an arrow function-------------------------------------

// function factorial(n) {
//     if ((n === 0) || (n === 1)){
//     return 1;
//     } else {
//       return (n*factorial(n-1));
//     }
//   }
//   console.log(factorial(33));

// Solution-------------------------------------
// const factorial = (n) => {
//   if ((n === 0) || (n === 1)){
//     return 1;
//   } else {
//     return (n* factorial(n-1))
//   }
// } 
// console.log(factorial(33))

// ---------------------------------------------------------------------------------------------------------------
// Functions: Activity 2-------------------------------------

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++;
//   console.log(`Order count = ${orderCount}`)
// }
// takeOrder ("ham", "pineapple");

// ---------------------------------------------------------------------------------------------------------------
// Functions: Activity 3-------------------------------------

// let pinNumber = 2425;
// let balance = 2000

// const cashMachine = (pin, amount) => {

//   if ((pin === pinNumber) && (amount <= balance)){
//     const newBalance = balance - amount;
//     console.log(`Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}.`)
//   } else if ((pin === pinNumber) && (amount > balance)){
//     console.log(`You cannot withdraw more than your current balance of £${balance}`)
//   } else if (pin != pinNumber){
//     console.log("Your pin is incorrect!")
//   } else {
//     console.log (`Your pin is incorrect or your balance isn't high enough!`)
//   }
// }

// cashMachine(2425, 3000);      