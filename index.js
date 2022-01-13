// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
    //slice copies the array without changing the original array
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
    //to get the last 2 items in an array, use negative number frothe end
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//array can have anything including objects,functions and etc
const createFareMultiplier = function (multiplier) {
    return function (tomato) {
        return multiplier * tomato
//u can return function another function which can return another function with value
}
}
    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function (thing, func ) {
    return func(thing)
}



//function needs a keyword(const), if u name (parameter goes here), {}statement has to be closed
//it is a cb bc u calling the argument u already called, and u passing an argument into that