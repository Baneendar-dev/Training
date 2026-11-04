let passengers = [
    {
        name: "Anil Kumar",
        age: 30,
        passportNumber: "A1234567"
    },
    {
        name: "Sunil Kumar",
        age: 28,
        passportNumber: "B9876543"
    }
];

let passenger = {
    name: "Ramesh Kumar",
    age: 35,
    passportNumber: "C4567890"
};

function printData(data) {
    if(Array.isArray(data)) {
        console.log("Data is an array of passengers:")
        for(let d of data) {
            console.log(d)
        }
    }else {
        console.log("Data is a single passenger:")
        console.log(data)
    }
}

printData(passengers);
printData(passenger);

