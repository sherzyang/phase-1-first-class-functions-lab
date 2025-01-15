// Code your solution in this file!

const returnFirstTwoDrivers = function (names) {
    return names.slice(0,2);
}

const returnLastTwoDrivers = function(names) {
    return names.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let integer;

function createFareMultiplier(integer){
    return function(fare){integer * fare;}
}

const fareDoubler = createFareMultiplier(2)