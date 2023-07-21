
// const crypto = require("crypto");

// const fs = require("fs")

// const guest = {}
// const guests = []

// function generateUID() {
//     // I generate the UID from two parts here 
//     // to ensure the random number provide enough bits.
//     var firstPart = (Math.random() * 46656) | 0;
//     var secondPart = (Math.random() * 46656) | 0;
//     firstPart = ("000" + firstPart.toString(36)).slice(-3);
//     secondPart = ("000" + secondPart.toString(36)).slice(-3);
//     return firstPart + secondPart;
// }

// for (let index = 0; index < 25; index++) {
//     const id = generateUID()
//     // guest.id = id
//     // guest.guest = {
//     //     name: "Jhon Doe",
//     //     companions: 2,
//     //     allow_childs: false
//     // }
//     guests.push({
//         id,
//         guest: {
//             name: "Jhon Doe",
//             companions: 2,
//             allow_childs: false,
//             gender: "F"
//         }
//     })
//     console.log(guest)
// }

// const jsn = JSON.stringify(guests)
// fs.writeFileSync("guests.json", jsn, "utf-8")


const guestList = require("./src/data/guests.json")

for (let index = 0; index < guestList.length; index++) {
    const guest = guestList[index];
    const url = `https://maldonadoverawedding.com/?invite_id=${guest.id}`
    console.log(`${guest.guest.name} ==> ${url}`)

    
}