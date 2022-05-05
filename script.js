const gamesList = [
    {
        name: "Cockroach Poker",
        minPlayers: 3,
        maxPlayers: 4,
        playTime: 20,
        description: "Cockroach Poker is a reverse set collection game that has nothing to do with poker - except that the game is all about bluffing, with cards that show cockroaches, rats and stink bugs. The goal is to force another player to collect 4 of any one type of critter.",
        img: "./img/cockroach-poker.png",
        genre: "Social Deduction",
        favorite: true
    },
    {
        name: "Take 5 (6 Nimmt)",
        minPlayers: 3,
        maxPlayers: 7,
        playTime: 20,
        description: "Take 5 description",
        img: "./img/take-5.png",
        genre: "Card Game",
        favorite: false
    },
    {
        name: "The Crew: Mission Deep Sea",
        minPlayers: 2,
        maxPlayers: 5,
        playTime: 20,
        description: "The Crew description",
        img: "./img/the-crew.png",
        genre: "Trick-Taking Game",
        favorite: true
    }
]

$.each(gamesList, function() {
    console.log(this.name);
    if (this.favorite) {
        $(".favorites-container").append(
        `<div class="game">
        <h3>${this.name}</h3>
        <div class="img-container"><img src="${this.img}"></div>
        <ul>
        <li>Player Count: ${this.minPlayers}-${this.maxPlayers}</li>
        <li>Play Time: ${this.playTime} minutes</li>
        <li>Genre: ${this.genre}</li>
        </ul>
        <p>${this.description}</p>
        <hr>
        </div>`)
    }
    // $("body").append(`<img src="${this.img}">`);
})

$("#favorites").click(function() {
    $(".favorites-container").slideToggle("slow");
})