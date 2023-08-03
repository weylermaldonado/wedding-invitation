const guestList = require("./src/data/guests.json")

for (let index = 0; index < guestList.length; index++) {
    const guest = guestList[index];
    const url = `https://maldonadoverawedding.com/?invite_id=${guest.id}`
    console.log(`${guest.guest.name} ==> ${url}`)

    
}