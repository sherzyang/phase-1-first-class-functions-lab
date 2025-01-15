// Code your solution in this file!

const returnFirstTwoDrivers = function (names) {
    return names.slice(0,2);
}

const returnLastTwoDrivers = function(names) {
    return names.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare){return fare*x};
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, a){
    return a(drivers);
}

fareDoubler(fare)

fareTripler(fare)

