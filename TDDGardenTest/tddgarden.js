const getYieldForPlant = function (plant) {
    console.log("getYieldForPlant:");
    console.log("Plant name: ", plant.name);
    console.log("Yield per plant: ", plant.yield);
    return Number(plant.yield);
}

let basicTest = function (number) {
    return number + 1;
}

// const getopbrengstForCrop = function (crop) {
//     console.log("getYieldForCrop:");
// }

// console.log(getYieldForPlant(corn))

module.exports = getYieldForPlant;
module.exports = basicTest;

