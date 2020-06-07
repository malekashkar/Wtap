const mongoose = require("mongoose");
const fetch = require("node-fetch");

module.exports = async(client) => {
    console.log('Ready!');

    let mainGuild = client.guilds.cache.get(`707028332360892447`);
    let likedRole = mainGuild.roles.cache.get(`718895011701456906`);

    setInterval(async() => {
        /* Likes and donations */
        let donationAmount = 0;
        mainGuild.members.cache.forEach(m => {
            if(m.roles.cache.has("718903278410399765")) donationAmount++;
        });
        /* End Likes and donations */

        /* Server players */
        let base;
        await fetch(`https://api.mcsrvstat.us/2/wtap.us`)
        .then(base => base.json())
        .then(async json => (base = await json))

        if(base.online) base = base.players.online;
        else base = 0;
        /* End Server Players */

        /* Total Likes */
        let likes;
        await fetch(`https://api.namemc.com/server/wtap.us/likes`)
        .then(likes => likes.json())
        .then(async json => (likes = await json))
        /* End Total Likes */

        mainGuild.channels.cache.get(`718878420053917706`).setName(`Server Players: ${base}`);
        mainGuild.channels.cache.get(`718878561272070164`).setName(`Total Likes: ${likes.length}`);
        mainGuild.channels.cache.get(`718878531374940160`).setName(`Donators: ${donationAmount}`);

        let array;
        await fetch(`https://api.namemc.com/server/wtap.us/likes`)
        .then(array => array.json())
        .then(async json => (array = await json))

        for(let i = 0; i < array.length; i++) {
            mongoose.connection.useDb("verification").collection("verified").findOne({ minecraft: array[i] }, (err, res) => {
                if(err) return console.log(err);
                else if(res === null) return;

                let member = mainGuild.members.cache.find(x => x.user.tag === res.discord);
                if(member.roles.cache.has(`718895011701456906`)) return;

                member.roles.add(likedRole);
            });
        }
    }, 120000);
}