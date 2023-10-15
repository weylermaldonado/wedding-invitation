
const crypto = require("crypto");
const csv = require('csv-parser')
const results = [];
const fs = require("fs")

const guest = {}
const guests = []

function readCSV() {
   return new Promise((resolve,reject) => {
    fs.createReadStream('./invitados.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      resolve()
    });
   })
}

function generateUID() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

function generateGuestJSON() {
    for (let index = 0; index < results.length; index++) {
        const invitado = results[index]
        const id = generateUID()

        const isMultipleInvite = invitado.Nombre.trim().split("&").length > 1
      

    guests.push({
        id,
        guest: {
            name: invitado.Nombre.trim(),
            companions: Number.parseInt(invitado.Acompanantes),
            show_child_message: false,
            multiple: isMultipleInvite,
            gender: "F"
        }
    })
}
console.log(guests)
const jsn = JSON.stringify(guests)
fs.writeFileSync("guests.json", jsn, "utf-8")
}


async function main() {
    // await readCSV()
    // generateGuestJSON()
    console.log(generateUID())
} 

main()