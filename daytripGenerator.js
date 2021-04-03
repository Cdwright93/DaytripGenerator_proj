// make a function that can return random string variables from an array ---- DONE

//make a prompt menu that asks users if they would like to rerandomize a different array, keeping all the other arrays the same

// make a prompt ask a user "if their daytrip is complete" as a yes or no.

// make an alert function that displays the the completed trip information from all randomized functions

//Variables
let places = ["New York City", "Boston", "Providence", "Philadelphia", "Buffalo"];
let rest = ["McDonalds", "Five Guys", "Burger King", "Shake Shack"];
let travel = ["Plane", "Car", "Ferry", "Gondala", "Tandem Bike"];
let fun = ["See a Movie", "Go Bowling", "Take a Tour","Go to a Concert", "Go to the Park"];
let anyList = [];

//functions

function getRandomDestination(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * 6);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomRest(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * 6);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomTransportation(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * 6);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomFun(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * 6);
    randomizedVar = anyList[x]
    return randomizedVar
}
//Randomizer function

getRandomDestination(places)

getRandomRest(rest)

getRandomTransportation(travel)

getRandomFun(fun)
