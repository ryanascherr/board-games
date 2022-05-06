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
    },
    {
        name: "Skull",
        minPlayers: 3,
        maxPlayers: 6,
        playTime: 20,
        description: "Skull & Roses is the quintessence of bluffing, a game in which everything is played in the players' heads. Each player plays a face-down card, then each player in turn adds one more card - until someone feels safe enough to state that he can turn a number of cards face up and get only roses. Other players can then overbid him, saying they can turn even more cards face up. The highest bidder must then turn that number of cards face up, starting with his own. If he shows only roses, he wins; if he reveals a skull, he loses, placing one of his cards out of play. Two successful challenges wins the game. Skull & Roses is not a game of luck; it's a game of poker face and meeting eyes.",
        img: "./img/skull.png",
        genre: "Social Deduction",
        favorite: true
    },
    {
        name: "Skull",
        minPlayers: 3,
        maxPlayers: 10,
        playTime: 10,
        description: "One Night Ultimate Werewolf is a fast-paced game where everyone is dealt a secret role. Many of these roles have special abilities that will aid that player in gaining information.  In the course of only one night and the following morning, the players will determine who among them is a werewolf...hopefully.",
        img: "./img/one-night-ultimate-werewolf.png",
        genre: "Social Deduction",
        favorite: false
    }
]

$.each(gamesList, function() {
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
});

$.each(gamesList, function() {
    $(".all-games-container").append(
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
});

$("#favorites").click(function() {
    $(".favorites-parent-container").slideToggle("slow");
});

$("#games").click(function() {
    $(".all-games-parent-container").slideToggle("slow");
});

$(".nav-dropdown-parent").click(function() {
    $(".nav-dropdown").toggleClass("hidden");
});