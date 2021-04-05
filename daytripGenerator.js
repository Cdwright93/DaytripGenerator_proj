"use strict"
// make a function that can return random string variables from an array ---- DONE

//make a prompt menu that asks users if they would like to rerandomize a different array, keeping all the other arrays the same --- done.

// make a prompt ask a user "if their daytrip is complete" as a yes or no. ----reworked, done.

// make an alert function that displays the the completed trip information from all randomized functions ----- done.

//Variables --- *changed* arrays to be more accurate
let placeList = ["New York City", "Boston", "Providence", "Philadelphia", "Buffalo"];
let foodList = ["McDonalds", "Five Guys", "Burger King", "Shake Shack"];
let travelList = ["Plane", "Car", "Ferry", "Gondala", "Tandem Bike"];
let funList = ["See a Movie", "Go Bowling", "Take a Tour","Go to a Concert", "Go to the Park"];
let anyList = [];

//functions

function getRandomDestination(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * anyList.length);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomRest(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * anyList.length);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomTransportation(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * anyList.length);
    randomizedVar = anyList[x]
    return randomizedVar
}
//
function getRandomFun(anyList){
  let x
  let randomizedVar
  x = Math.floor(Math.random() * anyList.length);
    randomizedVar = anyList[x]
    return randomizedVar
}
function getAlert(anyList){
placeList
foodList
travelList
funList

  let response = prompt("Your Day Trip: A) "+completeList[0]+ " B) " +completeList[1]+ " C) "+completeList[2]+ " D) "+completeList[3]+ ". To change any of the results, type their cooresponding letter. If not, type confirm.");

  if (response.toUpperCase() === "A") {
    completeList[0] = getRandomDestination(placeList);
    
  }

  if (response.toUpperCase() === "B") {
    completeList[1] = getRandomRest(foodList);
  
  }
  if (response.toUpperCase() === "C") {
    completeList[2] = getRandomTransportation(travelList);
  
  }
  if (response.toUpperCase() === "D") {
    completeList[3] = getRandomFun(funList);
  
  }
  if (response.toUpperCase() === "CONFIRM"){
    return(anyList)
    
  }
  getAlert(anyList)
}
// randomized values
let place = getRandomDestination(placeList)
let food = getRandomRest(foodList)
let travel = getRandomTransportation(travelList)
let fun = getRandomFun(funList)
let completeList = []

completeList.push(place)
completeList.push(food)
completeList.push(travel)
completeList.push(fun)
// prompt

getAlert(completeList)
console.log(alert("Your Day Trip: Destination: "+completeList[0]+ "                                             Restaraunt: " +completeList[1]+ "                                                                         Transportation: "+completeList[2]+"                                                           Entertainment: "+completeList[3]+""));