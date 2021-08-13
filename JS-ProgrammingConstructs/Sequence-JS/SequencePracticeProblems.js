//UC-1 RandomFunction
let randomValue = Math.floor(Math.random()*10)
console.log("1-Random Value generated is: "+randomValue)

//UC-2 Random value for a Dice 

let diceValue = Math.floor(Math.random()*6)
console.log("2-Random Dice Value generated is: "+diceValue)

//uc-3 Addition of random dice values

let diceValue1 = Math.floor(Math.random()*6)
let diceValue2 = Math.floor(Math.random()*6)
let result = diceValue1+diceValue2
console.log("3-Addition of two Random Dice Value "+diceValue1+" and "+diceValue2+" is"+result)

//UC-4 Generate 5 random TWO digit value and return sum

let randomValue1 = Math.floor(Math.random()*100)
let randomValue2 = Math.floor(Math.random()*100)
let randomValue3 = Math.floor(Math.random()*100)
let randomValue4 = Math.floor(Math.random()*100)
let randomValue5 = Math.floor(Math.random()*100)
newResult = randomValue1+randomValue2+randomValue3+randomValue4+randomValue5
console.log("4-Generated values are "+randomValue1+" "+randomValue2+" "+randomValue3+" "+randomValue4+" "+randomValue5+" Their sum is " +newResult)

//UC-5 Unit Conversion

let input = 42;
console.log("42 inch is: "+input/12+" ft");
//2: Calculate area of rectrangle
const meterConvert=0.3048
const length=60;
const breadth=40
console.log("5-Area of rectangle 60 x 40 ft plot is: "+ length*breadth*meterConvert+"m");
//3: Calculate 50 such plot areas in acre
const acre=0.00024711;
console.log("5-Area of 25 rectangle 60 x 40 ft plot is: "+(25*length*breadth*meterConvert*acre).toFixed(2)+" acre");

