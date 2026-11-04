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

for (let i = 0; i < passengers.length; i++) {
    console.log(`${passengers[i].name}`);
    console.log(`${passengers[i].age}`);
    console.log(`${passengers[i].passportNumber}`);
}

// console.log("First Passenger Name: ", passengers[0].name);
// console.log("Second Passenger Name: ", passengers[1].name);

// for (let i = 0; i < passengers.length; i++) {
//     console.log(`Passenger ${i + 1}: Name - ${passengers[i].name}, Age - ${passengers[i].age}, Passport Number - ${passengers[i].passportNumber}`);
// }

// for (let passenger of passengers) {
//     console.log(`Passenger Name: ${passenger.name}, Age: ${passenger.age}, Passport Number: ${passenger.passportNumber}`);
// }
