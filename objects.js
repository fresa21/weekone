//ACTIVITY 1
/*const person = {
    name:"Rachel",
    age: 55,
    songs: [
        "Jump",
        "song2",
        "song3"
    ],

        sayHi()   { 
        return console.log(`Hello, my name is ${this.name}.`) 
        }

    }
person.sayHi();*/
//console.log(person.songs);
//console.log(person.name); just to get name value from object


//-----------------------------------------------------------------------------


// The function is within the object and is now a method for it to operate.
/*let day = "Monday";

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
    alarm = alarmClock.weekendAlarm;
    console.log(`Hello Myles: ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`Hello Myles: ${alarm}`)
}*/

//---------------------------------------------

//ACTIVITY 2

/*const pet = {
    name:"Daisy",
    typeOfPet:"mouse",
    age: 2,
    color:"white",

    eat()  {
        return console.log(`${this.name} is eating.`)
    },
    drink() {
        return console.log(`${this.name} is drinking`)
}
}
pet.eat();
pet.drink();*/

//-------------------------------------------------------
/*const coffeeShop = {
    branch: "MCR",
    drinks: [
        `coffee - £1`,
        `tea -£1`,
        `coke - £2`
    ],
    food: [
        `sandwich - £2`,
        `toast - £2`,
        `cake - £3`

    ],
    drinksOrdered() {
        return drinks.pop()
    },
    foodOrdered() {
        return food.shift()
        
    },
    myOrder(drinksOrdered,foodOrdered) {
        return(myOrder())
        console.log(myOrder) }
}*/

// Day 4 PM possible solutions 

// Objects: Activity 1-------------------------------------
// const person = {
//     name: "Jeff",
//     age: 29,

//     sayHi(){
//         return console.log(`Hello my name is ${this.name}`)
//     }
// }
// person.sayHi();

// Objects: Activity 2-------------------------------------

// const pet = {
//     name:  "Ruby",
//     animal: "Cat",
//     age: "10",
//     colour: "Black ",

//     eat(){
//         return console.log(`The ${this.animal} named ${this.name} is eating.`)
//     }, 
//     drink(){
//         return console.log(`The ${this.animal} named ${this.name} is drinking.`)
//     }}
//     pet.eat();
//     pet.drink();


// Objects: Activity 3-------------------------------------


// const coffeeShop = {
//     branch: 'Manchester',
  
//     drinks: {
//       americano: 2,
//       latte: 2.50,
//       espresso: 1.5,
//       capuccino: 3,
//     },
  
//     food: {
//       cookie: 1.5,
//       muffin: 2,
//       sandwich: 3,
//     },
  
//     drinksOrdered(...drinks) {
//       let cost = 0;
//       const drinksStr = drinks.join(' & ');
//       drinks.forEach(drink => (cost += this.drinks[drink]));
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(drinksStr, cost);
//     },
  
//     foodOrdered(...food) {
//       let cost = 0;
//       const foodStr = food.join(' & ');
  
//       food.forEach(item => (cost += this.food[item]));
  
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(foodStr, cost);
//     },
  
//     displayOrder(order, cost) {
//       return console.log(
//         `Your ${order} will be with you shortly, the total is £${cost}.`
//       );
//     },
//   };
  
//   coffeeShop.drinksOrdered('capuccino', 'espresso');
//   coffeeShop.foodOrdered('cookie', 'muffin');


// Alternative solution -------------


// drinksOrder = [
//     "Espresso",
//     "Americano",
//     "Latte"
// ]
// foodOrder = [
//     "Biscuit",
//     "Cake"
// ]
// coffeeShop = {
//     branch : "Costa",
//     drinks : [
//         "Espresso", 
//         "Cappuccino", 
//         "Latte" ,
//         "Americano", 
//         "HotChocolate", 
//         "Tea"
//     ],
//     drinkPrices : [
//         1.50,
//         4,
//         3,
//         3.50,
//         2.50
//     ],
//     food: [
//         "Sandwich",
//         "Salad" ,
//         "Snack" ,
//         "Biscuit" ,
//         "Cake"
//     ],
//     foodPrices: [
//         4,
//         4.58,
//         3,
//         1,
//         3.50
//     ],
//     drinksOrdered() {
//         drinksBill = []
//         for (let i = 0 ; i < drinksOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.drinks.length; j++) {
//                 if (drinksOrder[i] == coffeeShop.drinks[j]){
//                     drinksBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Your drinks order is:\n`)
//         sum = 0
//         for (l = 0; l < drinksBill.length; l++) {
//             console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
//             sum += coffeeShop.drinkPrices[drinksBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//         },
    
//     foodOrdered() {
//         foodBill = []
//         for (let i = 0 ; i < foodOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.food.length; j++) {
//                 if (foodOrder[i] == coffeeShop.food[j]){
//                     foodBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Your food order is:\n`)
//         sum = 0
//         for (l = 0; l < foodBill.length; l++) {
//             console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
//             sum += coffeeShop.foodPrices[foodBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//     }
    
// }
// // total
// let foodSum = coffeeShop.foodOrdered()
// let drinkSum = coffeeShop.drinksOrdered()
// console.log(`Grand Total: £ ${foodSum + drinkSum}`)