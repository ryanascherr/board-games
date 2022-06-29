const gamesList = [
    {
        name: "Cockroach Poker",
        playerCount: "3-7",
        playTime: 20,
        description: "Cockroach Poker is a reverse set collection game that is all about bluffing. Deceive the other players into thinking you are lying or telling the truth about what card you're giving them. Fool one player enough times, and they lose!",
        img: "./img/cockroach-poker.png",
        genre: "Social Deduction",
        favorite: false,
        new: true,
        bachelor: true
    },
    {
        name: "Take 5 (6 Nimmt)",
        playerCount: "3-7",
        playTime: 20,
        description: "In Take 5, players simultaneously play cards from their hand into a play area. Knowing when to play each card in your hand is key; play the wrong one and you might be collecting 5 cards and getting all of their points. The player with the least amount of points wins.",
        img: "./img/take-5.png",
        genre: "Card Game",
        favorite: false,
        new: true,
        bachelor: true
    },
    {
        name: "The Crew: Mission Deep Sea",
        playerCount: "2-5",
        playTime: 20,
        description: "In the trick-taking card game The Crew: Mission Deep Sea, you and the other players work together to search for the lost continent of Mu. In each mission, players have to work together to complete its unique tasks, but players aren't allowed to talk!",
        img: "./img/the-crew.png",
        genre: "Trick-Taking Game",
        favorite: true,
        bachelor: true
    },
    {
        name: "Skull",
        playerCount: "3-6",
        playTime: 20,
        description: "In the bluffing game Skull, each player plays a face-down card (a skull or rose), then each player in turn adds one more card - until someone feels safe enough to state that he can turn a number of cards face up and get only roses. If they can do it, they win the round. Win two rounds to win the game!",
        img: "./img/skull.png",
        genre: "Social Deduction",
        favorite: true,
        bachelor: true
    },
    {
        name: "One Night Ultimate Werewolf",
        playerCount: "3-10",
        playTime: 10,
        description: "One Night Ultimate Werewolf is a fast-paced game where everyone is dealt a secret role, some of which have special abilities that will aid that player in gaining information. In the course one night and the following morning, the players will determine who among them is a werewolf...hopefully.",
        img: "./img/one-night-ultimate-werewolf.png",
        genre: "Social Deduction",
        favorite: false,
        bachelor: true
    },
    {
        name: "Codenames",
        playerCount: "2-8",
        playTime: 15,
        description: "In Codenames, each team leader wants their team to guess a list of words from a selection of 25. They do so by giving clues about them - one word followed by the number of words the clue corresponds to.A team wins when they guess all of their leader's words.",
        img: "./img/codenames.png",
        genre: "Card Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "Oath",
        playerCount: "1-6",
        playTime: 120,
        description: "In Oath, players guide the course of history in an ancient land. The consequences of one game will ripple through those that follow, changing what resources and actions future players may have at their disposal and even altering the game's core victory condition.",
        img: "./img/oath.png",
        genre: "Political",
        favorite: true
    },
    {
        name: "Long Shot: The Dice Game",
        playerCount: "1-8",
        playTime: 25,
        description: "In Long Shot: The Dice Game, players will strategize and push their luck as the action unfolds in a tense race of eight horses. During the game you buy horses, place bets, influence race movement, and utilize special abilities. Will you play it safe, or risk it big on a long shot?",
        img: "./img/long-shot.png",
        genre: "Gambling",
        favorite: false,
        bachelor: true
    },
    {
        name: "The Quacks of Quedlinburg",
        playerCount: "2-4",
        playTime: 45,
        description: "In The Quacks of Quedlinburg, players are making their own secret brew. Each player draws ingredient chips from their bags and add them to their pots. The more chips you place, the better the pot. Push your luck as far as you can, but if you add too many cherry bombs, your pot will explode!",
        img: "./img/quacks.png",
        genre: "Push Your Luck",
        favorite: true
    },
    {
        name: "Hive",
        playerCount: "2",
        playTime: 20,
        description: "Hive is a two-player chess-like strategy game. Players will place their bug tiles in play, creating the shared playing space. Each different bug tile has a unique way of moving around the board. The player to totally surround his opponent's queen wins the game.",
        img: "./img/hive.png",
        genre: "Strategy",
        favorite: true
    },
    {
        name: "A Little Wordy",
        playerCount: "2",
        playTime: 10,
        description: "In this two-player word game, each player is given a pile of letters and must rearrange them to form a word that their opponent won't easily guess. Use a variety of clue cards to figure out your opponent's word before they figure out yours.",
        img: "./img/wordy.png",
        genre: "Word Game",
        favorite: false
    },
    {
        name: "SHOBU",
        playerCount: "2",
        playTime: 15-30,
        description: "In this two-player strategy game, each player controls 16 stones across four boards. During a turn, a player can move one of their stones, then must move a stone on a different board in the same way. The second move can push opposing stones off the board. The first to remove all of their opponent's stones from any board is the winner.",
        img: "./img/shobu.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Klask",
        playerCount: "2",
        playTime: 10,
        description: "Klask is a two-player air-hockey-like dexterity game. Each player controls a magnetic 'striker' which they use to bounce the game ball into their opponent's goal. Players can also score if their opponent loses control of their striker, attracks two of the three magnets on the board, or lands in their striker in their own goal.",
        img: "./img/klask.png",
        genre: "Dexterity",
        favorite: true,
        new: true,
        bachelor: true
    },
    {
        name: "Trails",
        playerCount: "2-4",
        playTime: 30,
        description: "In TRAILS, players hike back and forth along the trail, collecting rocks, acorns and leaves; taking pictures; and encountering wildlife to gain bonuses. At trailhead and trail end, you can turn in resources to earn badges, which give you points. The player with the most points from collected badges, photos taken, and bird sightings wins.",
        img: "./img/trails.png",
        genre: "Resource Management",
        favorite: false
    },
    {
        name: "Arboretum",
        playerCount: "2-4",
        playTime: 30,
        description: "Players create garden paths for their visitors with their tree cards. Each turn, players play and discard a card, and your discarded cards can be taken by your opponents. The player with the most points from their garden paths win the game.",
        img: "./img/arboretum.png",
        genre: "Card Game",
        favorite: true
    },
    {
        name: "The Fox in the Forest",
        playerCount: 2,
        playTime: "30",
        description: "The Fox in the Forest is a trick-taking game for two players, where some cards have special abilities. You score points by winning more tricks than your opponent, but don't get greedy! Win too many tricks, and you will fall like the villain in so many fairy tales...",
        img: "./img/fox-in-the-forest.png",
        genre: "Trick-Taking Game",
        favorite: false
    },
    {
        name: "Hounded",
        playerCount: 2,
        playTime: "20",
        description: "In Hounded, players will either be the cunning fox, trying to elude capture, or the determined hunting party, trying to hunt down the fox. Each player moves their pawns and turns over tiles as they do, sometimes triggering effects. Which side will win?",
        img: "./img/hounded.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Secret Hitler",
        playerCount: "5-10",
        playTime: 45,
        description: "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930s Germany. Each player is randomly and secretly assigned to be a liberal or a fascist, and one player is Secret Hitler. The fascists coordinate to sow distrust and install their cold-blooded leader; the liberals must find and stop the Secret Hitler before it's too late.",
        img: "./img/secret-hitler.png",
        genre: "Social Deduction",
        favorite: true,
        bachelor: true
    },
    {
        name: "Ca$h 'n Guns",
        playerCount: "4-8",
        playTime: 30,
        description: "In an abandoned warehouse a gangster band is splitting its loot, but they can't agree on the split! It's time to let the guns talk and soon everyone is aiming at everyone. The richest surviving gangster wins the game! The goal is to have more money than anyone else after eight rounds while still being alive.",
        img: "./img/cash-n-guns.png",
        genre: "Party Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "Wavelength",
        playerCount: "2-12",
        playTime: 35,
        description: "Wavelength is a social guessing game in which two teams compete to read each other's minds. Teams take turns rotating a dial to where they think a hidden bullseye is located on a spectrum. One of the players on your team — the Psychic — knows exactly where the bullseye is, and gives a clue to get their team to guess.",
        img: "./img/wavelength.png",
        genre: "Party Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "Dungeon Mayhem",
        playerCount: "2-6",
        playTime: 10,
        description: "In Dungeons & Dragons card game Dungeon Mayhem, you win by being the last adventurer standing. Play as one of twelve characters, battling it out in a dungeon full of treasure! You win if you're the last character alive.",
        img: "./img/dungeon-mayhem.png",
        genre: "Card Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "Disney Villainous",
        playerCount: "2-6",
        playTime: 50,
        description: "In Villainous, each player takes control of one of six Disney villains. Each turn, players take one or more actions visible, often by playing cards from their hand. Cards are allies, items, effects, conditions, and curses. You need to use your cards to fulfill your unique win condition.",
        img: "./img/villainous.png",
        genre: "Card Game",
        favorite: false
    },
    {
        name: "Jaipur",
        playerCount: "2",
        playTime: 30,
        description: "Jaipur is a fast-paced card game, a blend of tactics, risk and luck. On your turn, you can either take or sell cards. If you take cards, you have to choose between taking all the camels, taking one card from the market, or swapping 2-5 cards between the market and your cards. If you sell cards, you get to sell only one type of good, and you receive as many chips for that good as the number of cards you sold. The chips' values decrease as the game progresses, so you'd better hurry! On the other hand, you receive increasingly high rewards for selling three, four, or five cards of the same good at a time, so you'd better wait!",
        img: "./img/jaipur.png",
        genre: "Card Game",
        favorite: false
    },
    {
        name: "Werewords",
        playerCount: "2-20",
        playTime: 10,
        description: "In Werewords, players guess a word by asking 'yes' or 'no' questions. Figure out the magic word before time is up, and you win! However, one of the players is secretly a werewolf who is not only working against you, but also knows the magic word. If you don't guess the word in time, you can still win by identifying the werewolf! To help you out, one player is the Seer, who knows the word, but has to be careful while helping you. If you guess the word, the werewolf can pull out a win by identifying the Seer!",
        img: "./img/werewords.png",
        genre: "Social Deduction",
        favorite: false,
        bachelor: true
    },
    {
        name: "Silver & Gold",
        playerCount: "2-4",
        playTime: 20,
        description: "Distant islands with golden treasures — who hasn't dreamed of that?! Silver & Gold combines simple rules, fast action, luck, and planning as players try to complete treasure map after treasure map, with the maps being printed on wipeable cards to allow for endless adventures...",
        img: "./img/silver-&-gold.png",
        genre: "Grid Coverage",
        favorite: false
    },
    {
        name: "Machi Koro 2",
        playerCount: "2-5",
        playTime: 45,
        description: "In Machi Koro 2, veteran players will notice some big changes. Under the new zoning laws, players receive a limited budget to choose their own starting establishments. The available cards are pulled from three decks and arranged for all to see. It's a race to grab the coolest new establishments and landmarks in the land! The cards in this set have exciting, never-before-seen effects. But choose what you build wisely, as your landmarks might also benefit your opponents! With more variety than ever before, no two games will be the same. Machi Koro 2 will have fans visiting again and again!",
        img: "./img/machi-koro-2.png",
        genre: "City Building",
        favorite: false
    },
    {
        name: "Tiny Towns",
        playerCount: "1-6",
        playTime: 50,
        description: "You are the mayor of a tiny town in the forest in which the smaller creatures of the woods have created a civilization hidden away from predators. This new land is small and the resources are scarce, so you take what you can get and never say no to building materials. Cleverly plan and construct a thriving town, and don't let it fill up with wasted resources! Whoever builds the most prosperous tiny town wins! In Tiny Towns, your town is represented by a 4x4 grid on which you will place resource cubes in specific layouts to construct buildings. Each building scores victory points (VPs) in a unique way. When no player can place any more resources or construct any buildings, the game ends, and any squares without a building are worth -1 VP. The player with the most VP wins!",
        img: "./img/tiny-towns.png",
        genre: "City Building",
        favorite: false
    },
    {
        name: "Patchwork",
        playerCount: "2",
        playTime: 25,
        description: "In Patchwork, two players compete to build the most aesthetic (and high-scoring) patchwork quilt on a personal 9x9 game board. To start play, lay out all of the patches at random in a circle and place a marker directly clockwise of the 2-1 patch. Each player takes five buttons — the currency/points in the game — and someone is chosen as the start player. On a turn, a player either purchases one of the three patches standing clockwise of the spool or passes. To purchase a patch, you pay the cost in buttons shown on the patch, move the spool to that patch's location in the circle, add the patch to your game board, then advance your time token on the time track a number of spaces equal to the time shown on the patch. You're free to place the patch anywhere on your board that doesn't overlap other patches, but you probably want to fit things together as tightly as possible. If your time token is behind or on top of the other player's time token, then you take another turn; otherwise the opponent now goes. Instead of purchasing a patch, you can choose to pass; to do this, you move your time token to the space immediately in front of the opponent's time token, then take one button from the bank for each space you moved.",
        img: "./img/patchwork.png",
        genre: "Grid Coverage",
        favorite: false
    },
    {
        name: "Pandemic",
        playerCount: "2-4",
        playTime: 45,
        description: "In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. Taking a unique role within the team, players must plan their strategy to mesh with their specialists' strengths in order to conquer the diseases. For example, the Operations Expert can build research stations which are needed to find cures for the diseases and which allow for greater mobility between cities; the Scientist needs only four cards of a particular disease to cure it instead of the normal five—but the diseases are spreading quickly and time is running out. If one or more diseases spreads beyond recovery or if too much time elapses, the players all lose. If they cure the four diseases, they all win!",
        img: "./img/pandemic.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Ticket to Ride",
        playerCount: "2-5",
        playTime: 45,
        description: "Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets - goal cards that connect distant cities; and to the player who builds the longest continuous route.",
        img: "./img/ticket-to-ride.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Point Salad",
        playerCount: "2-6",
        playTime: 25,
        description: "Point Salad is a fast and fun card drafting game for the whole family. There are over 100 ways to score points. Players may use a variety of strategies and every game of Point Salad is unique! Cards come in six different types of veggies, and the back of each card has a different scoring method. So for instance, one scoring method may award 2 points for every carrot you have, but deduct a point for every onion. By drafting combinations of veggies and point cards that work for your strategy, you can amass the most points and win.",
        img: "./img/point-salad.png",
        genre: "Card Came",
        favorite: false
    },
    {
        name: "Forbidden Desert",
        playerCount: "2-5",
        playTime: 45,
        description: "In Forbidden Desert, you'll need to coordinate with your teammates and use every available resource if you hope to survive the scorching heat and relentless sandstorm of an ancient desert city. Find the flying machine and escape before you all become permanent artifacts of the forbidden desert!",
        img: "./img/forbidden-desert.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Mysterium",
        playerCount: "2-7",
        playTime: 42,
        description: "In Mysterium, one player takes the role of ghost while everyone else represents a medium. To solve the crime, the ghost must first recall (with the aid of the mediums) all of the suspects present on the night of the murder. A number of suspect, location and murder weapon cards are placed on the table, and the ghost randomly assigns one of each of these in secret to a medium. Each hour (i.e., game turn), the ghost hands one or more vision cards face up to each medium, refilling their hand to seven each time they share vision cards. These vision cards present dreamlike images to the mediums, with each medium first needing to deduce which suspect corresponds to the vision cards received. Once the ghost has handed cards to the final medium, they start a two-minute sandtimer. Once a medium has placed their token on a suspect, they may also place clairvoyancy tokens on the guesses made by other mediums to show whether they agree or disagree with those guesses.",
        img: "./img/mysterium.png",
        genre: "Deduction",
        favorite: false
    },
    {
        name: "Takenoko",
        playerCount: "2-4",
        playTime: 45,
        description: "A long time ago at the Japanese Imperial court, the Chinese Emperor offered a giant panda bear as a symbol of peace to the Japanese Emperor. Since then, the Japanese Emperor has entrusted his court members (the players) with the difficult task of caring for the animal by tending to his bamboo garden. In Takenoko, the players will cultivate land plots, irrigate them, and grow one of the three species of bamboo (Green, Yellow, and Pink) with the help of the Imperial gardener to maintain this bamboo garden. They will have to bear with the immoderate hunger of this sacred animal for the juicy and tender bamboo. The player who manages his land plots best, growing the most bamboo while feeding the delicate appetite of the panda, will win the game.",
        img: "./img/takenoko.png",
        genre: "Territory Building",
        favorite: false
    },
    {
        name: "On Tour",
        playerCount: "1-4",
        playTime: 20,
        description: "You're living the dream. You're in a band and they're about to go on tour. It's your job to schedule the band's stops over your 100-day tour, visiting as many states as possible. Each turn in On Tour, two ten-sided dice are rolled to make two two-digit numbers. For example, a roll of 3 and 7 creates the numbers 37 and 73. All players write each of those numbers in a state on their map. The regions they can write in are restricted by three cards turned up in the middle of the table. At the end of the game, each player draws a route on their map, starting with a low number and visiting adjacent states with higher and higher numbers. Players get a point for every state they visit. There are also some bonus points available, a way to get wilds, and a variable set-up step that makes every game different.",
        img: "./img/on-tour.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Coup",
        playerCount: "2-6",
        playTime: 15,
        description: "In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards, each with a unique ability. When you take one of the character actions, you can bluff as any character, and it automatically succeeds unless an opponent challenges you. If you lose both you're out of the game.",
        img: "./img/coup.png",
        genre: "Social Deduction",
        favorite: false,
        bachelor: true
    },
    {
        name: "Monikers",
        playerCount: "4-16",
        playTime: 45,
        description: "Monikers is a party game based on the public domain game Celebrity, where players take turns attempting to get their teammates to guess names by describing or imitating well-known people. In the first round, clue givers can say anything they want, except for the name itself. For the second round, clue givers can only say one word. And in the final round, clue givers can’t say anything at all: they can only use gestures and charades.",
        img: "./img/monikers.png",
        genre: "Party Game",
        favorite: true,
        bachelor: true
    },
    {
        name: "CONFIDENT?",
        playerCount: "3-99",
        playTime: 30,
        description: "CONFIDENT? is a trivia game where instead of giving exact answers, you guess with a RANGE! You only need to get the right answer in your range to win points so everyone can have a go, but the smaller your range compared to everyone else, the more you score! Are you CONFIDENT enough to win?",
        img: "./img/confident.png",
        genre: "Trivia",
        favorite: false,
        bachelor: true
    },
    {
        name: "Betrayal at House on the Hill",
        playerCount: "3-6",
        playTime: 60,
        description: "In Betrayal at House on the Hill, players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate. Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it's too late!",
        img: "./img/betrayal.png",
        genre: "Exploration",
        favorite: false
    },
    {
        name: "Here to Slay",
        playerCount: "2-6",
        playTime: 45,
        description: "Here to Slay is a competitive role-playing fantasy strategy card game that's all about assembling a party of Heroes and slaying monsters (and sometimes sabotaging your friends too) from the creators of Unstable Unicorns. In this game, you'll assemble a full party of heroes to slay dangerous monsters while working to avoid the sabotage of your foes. The game also includes items you can equip to your heroes, 1V1 challenge cards, and roll modifiers to tip the odds in your favor. The first person to successfully slay three monsters, or build a full party with six classes, wins the game!",
        img: "./img/here-to-slay.png",
        genre: "Card Game",
        favorite: false
    },
    {
        name: "Fuse",
        playerCount: "1-5",
        playTime: 10,
        description: "FUSE is a real-time co-operative game that employs 25 dice and 65 cards. Each game is set to a ten-minute timer, and players must work together in that ten minutes to defuse all of the bombs. Each bomb is represented by a card which needs a certain combination of dice in order to defuse it. A player will draw a number of dice equal to the number of players out of a bag and roll them. Players must then decide who will get which dice, but each player must take one and only one. It's a simple task: maximize the potential of your dice among all of the players. The problem is that you have only ten minutes, and there are more than twenty bombs on your ship. You don't have time to think through every option. You barely have time to yell at Grandma as she reaches for that red die you need. This game will self-destruct in ten minutes...",
        img: "./img/fuse.png",
        genre: "Dexterity",
        favorite: false,
        bachelor: true
    },
    {
        name: "One Deck Dungeon",
        playerCount: "1-2",
        playTime: 40,
        description: "One Deck Dungeon is a card game 'roguelike' — a dungeon delve that is different every time, difficult to survive, with a character you build up from scratch. The deck consists of various foes to combat and other perils from the dungeon. Each card, though, depicts both the obstacle to overcome and the potential rewards for doing so. When you defeat a card, you claim it as either experience, an item, or a skill, tucking it under the appropriate side of your character card to show its benefits. The longer you take exploring the dungeon, the deeper you'll delve, and the difficulty will scale up quickly! If you make it far enough, you'll have to fight the dungeon boss. Survive, and you'll be a legend!",
        img: "./img/one-deck-dungeon.png",
        genre: "Card Game",
        favorite: false
    },
    {
        name: "Prime Climb",
        playerCount: "1-4",
        playTime: 35,
        description: "Prime Climb is a new board game that uses arithmetic to open a beautiful world of possibility. Players race to be the first to get to the center of the board while avoiding getting knocked back to the start by other players. Highlighting the power of the prime numbers, Prime Climb is mathematical, deep, creative, and fun. Each player controls two pawns that start at the 0 circle. Players take turns rolling two 10-sided dice and applying the values to their two pawns using any of the four basic arithmetic operations: addition, subtraction, multiplication, and division. The first to get both pawns into the 101 circle exactly wins the game! Be careful: if another player lands on you, you get sent back to the start. Along the way, players who land on the red circles collect Prime cards—some are helpful now, some are helpful later, and a few are trouble!",
        img: "./img/prime-climb.png",
        genre: "Number",
        favorite: false
    },
    {
        name: "The Mind",
        playerCount: "2-4",
        playTime: 20,
        description: "The Mind is more than just a game. It's an experiment, a journey, a team experience in which you can't exchange information, yet will become one to defeat all the levels of the game. In more detail, the deck contains cards numbered 1-100, and during the game you try to complete 12, 10, or 8 levels of play with 2, 3, or 4 players. In a level, each player receives a hand of cards equal to the number of the level: one card in level 1, two cards in level 2, etc. Collectively you must play these cards into the center of the table on a single discard pile in ascending order but you cannot communicate with one another in any way as to which cards you hold. You simply stare into one another's eyes, and when you feel the time is right, you play your lowest card. If no one holds a card lower than what you played, great, the game continues! If someone did, all players discard face up all cards lower than what you played, and you lose one life.",
        img: "./img/the-mind.png",
        genre: "Card Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "The Keeyp",
        playerCount: "2-6",
        playTime: 30,
        description: "Explore the dungeon each turn. Gather unique items and engage in combat with other players. The first player to get the Key and escape through the Gate wins. (Or the last player standing wins.) There are 12 unique characters called Keeyplings that players can play as. Each Keeypling has an attack, defense, and speed stat paired with a special ability. At the beginning of the game, players get two of these Keeyplings to pick from. Players will spend the first half of the game building out the map and finding treasure chests to collect weapons, shields, and items. Once the Key has been found, the combat phases begins. You can attack a player by landing on the same tile as them. Combat is determined by the players ATK stat verses the defending players DEF stat. These stats can be increased by using items. If your Keeypling is defeated, you then use your second Keeypling. If that Keeypling is defeated then you are out of the game.",
        img: "./img/the-keeyp.png",
        genre: "Strategy",
        favorite: false
    },
    {
        name: "Illusion",
        playerCount: "2-5",
        playTime: 15,
        description: "Can you trust your eyes? How much color do you really see? These questions are what drive gameplay in Illusion, with rules that allow for gameplay to start immediately. Who has the right perspective not to be fooled?",
        img: "./img/illusion.png",
        genre: "Card Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "Superfight",
        playerCount: "3-20",
        playTime: 15,
        description: "Superfight is party game of super powers and super problems. The game is all about arguing with your friends about ridiculous fights. The core deck contains 500 cards. 160 characters (white cards), and 340 powers and weaknesses (black cards). Players use a hand of three white cards and three black cards, and choose one of each to beat the player next to them. Then they get a random black card before fighting. Players then argue their case for why they should win, and the table votes.",
        img: "./img/superfight.png",
        genre: "Party Game",
        favorite: false
    },
    {
        name: "Anomia",
        playerCount: "3-6",
        playTime: 30,
        description: "Anomia plays off the fact that our minds are positively brimming with all sorts of random information: things to eat, pop songs, websites, etc... Sure, under normal circumstances, it's easy to give an example of a frozen food or a dog breed, but you'll find that your brain works a little differently under pressure!",
        img: "./img/anomia.png",
        genre: "Party Game",
        favorite: false,
        bachelor: true
    },
    {
        name: "No Thanks!",
        playerCount: "3-7",
        playTime: 20,
        description: "The rules are simple. Each turn, players have two options: play one of their chips to avoid picking up the current face-up card, or pick up the face-up card (along with any chips that have already been played on that card) and turn over the next card. However, the choices aren't so easy as players compete to have the lowest score at the end of the game. The deck of cards is numbered from 3 to 35, with each card counting for a number of points equal to its face value. Runs of two or more cards only count as the lowest value in the run - but nine cards are removed from the deck before starting, so be careful looking for connectors. Each chip is worth -1 point, but they can be even more valuable by allowing you to avoid drawing that unwanted card.",
        img: "./img/no-thanks.png",
        genre: "Card Game",
        favorite: false,
        new: true,
        bachelor: true
    },
    {
        name: "Doodle Dash",
        playerCount: "3-7",
        playTime: 20,
        description: "Doodle Dash is a party game where the players draw the same word at the same time. It's a drawing competition where speed can beat skill, so anyone can win! Win by being the fastest doodler, but watch out - you only score if the guesser can actually tell what your drawing is!",
        img: "./img/doodle-dash.png",
        genre: "Party Game",
        favorite: true,
        new: true,
        bachelor: true
    },
    {
        name: "Blood on the Clocktower",
        playerCount: "5-20",
        playTime: 75,
        description: "Blood on the Clocktower is a bluffing game enjoyed by 5 to 20 players on opposing teams of Good and Evil, overseen by a Storyteller player who conducts the action and makes crucial decisions. The goal of the game is to successfully deduce and execute the demons before they outnumber the townfolk.",
        img: "./img/clocktower.png",
        genre: "Social Deduction",
        favorite: true,
        new: false,
        wishlist: true,
        bachelor: true
    },
    {
        name: "Root",
        playerCount: "2-4",
        playTime: 75,
        description: "Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness. The nefarious Marquise de Cat has seized the great woodland, intent on harvesting its riches. Under her rule, the many creatures of the forest have banded together. This Alliance will seek to strengthen its resources and subvert the rule of Cats. In this effort, the Alliance may enlist the help of the wandering Vagabonds who are able to move through the more dangerous woodland paths. Though some may sympathize with the Alliance's hopes and dreams, these wanderers are old enough to remember the great birds of prey who once controlled the woods. Meanwhile, at the edge of the region, the proud, squabbling Eyrie have found a new commander who they hope will lead their faction to resume their ancient birthright. The stage is set for a contest that will decide the fate of the great woodland. It is up to the players to decide which group will ultimately take root.",
        img: "./img/root.png",
        genre: "Wargame",
        favorite: false,
        new: false,
        wishlist: true
    },
    {
        name: "Modern Art",
        playerCount: "3-5",
        playTime: 45,
        description: "Buying and selling paintings can be a very lucrative business. Five different artists have produced a bunch of paintings, and it's the player's task to be both the buyer and the seller, hopefully making a profit in both roles. He does this by putting a painting from his hand up for auction each turn. He gets the money if some other player buys it, but must pay the bank if he buys it for himself. After each round, paintings are valued by the number of paintings of that type that were sold. The broker with the most cash after four rounds is the winner.",
        img: "./img/modern-art.png",
        genre: "Auction",
        favorite: false,
        new: false,
        wishlist: true
    },
    {
        name: "The Adventure Zone: Bureau of Balance",
        playerCount: "2-5",
        playTime: 75,
        description: "In TAZ: Bureau of Balance, you and friends are adventurers charged with retrieving dangerous artifacts from nefarious villains. To succeed, you may have to outwit vile gerblins, armwrestle ogres, or endure the withering criticism of sarcastic specters. Can you work together and overcome all challenges before your health runs out? TAZ: Bureau of Balance is a cooperative storytelling game for 2-5 players. It uses a dynamically generated dungeon created by combining multiple decks of cards; as challenges are overcome, new challenges are revealed. The mechanics are easy to learn and players are encouraged to describe their heroic deeds. No experience is required, and any group of friends can have a hilarious adventure in about an hour!",
        img: "./img/taz.png",
        genre: "Card Game",
        favorite: false,
        new: false
    },
    // {
    //     name: "Inis",
    //     playerCount: "2-4",
    //     playTime: 75,
    //     description: "Inis is a game deeply rooted in Celtic history and lore in which players win by being elected King of the Island (Inis). Players can try to achieve one of three different victory conditions. Over the course of the game, players also earn deeds, typically chanted by bards or engraved by master crafters, that reduce by one the magic total of six for any condition. While one victory condition is enough to claim the title of King, a game of experienced players usually has a tight balance of power, emphasizing the leadership of the capital of the island.",
    //     img: "./img/inis.png",
    //     genre: "Strategy",
    //     favorite: false,
    //     new: false,
    //     wishlist: true
    // },
    {
        name: "Calico",
        playerCount: "1-4",
        playTime: 45,
        description: "In Calico, players compete to sew the coziest quilt as they collect and place patches of different colors and patterns. Each quilt has a particular pattern that must be followed, and players are also trying to create color and pattern combinations that are not only aesthetically pleasing, but also able to attract the cuddliest cats! Turns are simple. Select a single patch tile from your hand and sew it into your quilt, then draw another patch into your hand from the three available. If you are able to create a color group, you may sew a button onto your quilt. If you are able to create a pattern combination that is attractive to any of the cats, it will come over and curl up on your quilt! At the end of the game, you score points for buttons, cats, and how well you were able to complete your unique quilt pattern.",
        img: "./img/calico.png",
        genre: "Strategy",
        favorite: false,
        new: true
    },
    {
        name: "Inhuman Conditions",
        playerCount: "2",
        playTime: 5,
        description: "Inhuman Conditions is a five-minute, two-player game of surreal interrogation and conversational judo, set in the heart of a chilling bureaucracy. Each game has one Investigator and one Suspect. Armed only with two stamps and a topic of conversation, the Investigator must figure out whether the Suspect is a Human or a Robot. Robots must answer the Investigator's questions without arousing suspicion, but are hampered by some specific malfunction in their ability to converse. They must be clever, guiding the conversation in subtle ways without getting caught. Humans may speak freely, but may find this freedom as much curse as gift. There are no right or wrong answers, only suspicious and innocuous ones, and one slip of the tongue could land Humans and Robots alike in the Bureau's Invasive Confirmation Unit. There, alongside Investigators who make improper determinations, they will await further testing ...",
        img: "./img/inhuman.png",
        genre: "Social Deduction",
        favorite: false,
        new: false,
        wishlist: true
    },
    // {
    //     name: "Clank!",
    //     playerCount: "2-4",
    //     playTime: 45,
    //     description: "Clank! is a deck-building game. Each player has their own deck, and building yours up is part of playing the game. You start each of your turns with five cards in your hand, and you'll play them all in any order you choose. Most cards will generate resources, of which there are three different kinds. Every time you acquire a new card, you put it face up in your discard pile. Whenever you need to draw a card and find your deck empty, you shuffle your discard pile and turn it face down to form a new deck. With each shuffle, your newest cards become part of a bigger and better deck! Each player starts with the same cards in their deck, but they'll acquire different cards during their turns. Because cards can do many different things, each player's deck (and strategy) will become more and more different as the game unfolds.",
    //     img: "./img/clank.png",
    //     genre: "Deck-Builder",
    //     favorite: false,
    //     new: false,
    //     wishlist: true
    // },
    {
        name: "The Fuzzies",
        playerCount: "2-4",
        playTime: 10,
        description: "The Fuzzies is a game about creating gravity-defying towers out of fuzzy little balls. Draw a card a remove that color of fuzzy using either tweezers or your fingers but you can not get out of your seat. Stick it anywhere higher on the tower. If you are successful then the next player goes but if any balls drop, you must draw cards equal to the number of balls dropped and do the challenge on your next turn (e.g. remove a Fuzzy while covering your eye) The game ends when someone oafishly knocks over the tower. That player is the loser, everyone else wins!",
        img: "./img/fuzzies.png",
        genre: "Dexterity",
        favorite: false,
        new: true
    },
    {
        name: "Radlands",
        playerCount: "2",
        playTime: 30,
        description: "Radlands is a competitive, dueling card game about identifying fiercely powerful card synergies. Act as the leader of your post apocalyptic group of survivors in a tooth-and-nail fight to protect your three camps from a vicious rival tribe. If all of them are destroyed, you lose the game.",
        img: "./img/radlands.png",
        genre: "Card Game",
        favorite: true,
        new: true,
        bachelor: false
    },
    {
        name: "The Game",
        playerCount: "1-5",
        playTime: 20,
        description: "Players in The Game try to discard all 98 cards in the deck onto four discard piles in order to win, but they need to do so in the right ways. On a turn, a player must discard at least two cards from their hand onto one or more discard piles, with cards on the 1 piles being placed in ascending order and cards on the 100 piles being placed in descending order. One tricky aspect of the game is that you can play a card exactly 10 higher/lower than the top card of a discard pile even when you would normally have to play in a descending/ascending order.",
        img: "./img/game.png",
        genre: "Card Game",
        new: true,
        bachelor: true
    }
]

$('#game-choice').change(function() {
    let name = $("#game-choice").val();
    $("#game-choice").val("");
    $.each(sortedArray, function() {
        if (this.name != name) return;
        if (this.name == name) {
            $(".bachelor-container").empty();
            $(".show-all-btn-container").empty();
            $(".show-all-btn-container").append(`<button class="show-all-btn">Show All Games</button>`);
            $(".bachelor-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`);
        }
    });
});

$(".show-all-btn-container").click(function() {
    $(".bachelor-container").empty();
    $(".show-all-btn-container").empty();
    $.each(sortedArray, function() {
        if (this.bachelor && !this.favorite) {
            $(".bachelor-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        } else if (this.bachelor && this.favorite) {
            $(".bachelor-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img class="favorite" src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        }
    });
})

let sortedArray= gamesList.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

$.each(sortedArray, function() {
    if (this.bachelor && !this.favorite) {
        $(".bachelor-container").append(
            `<div class="game">
            <div class="game-head">
            <h3>${this.name}</h3>
            </div>
            <div class="game-body">
            <div class="img-container"><img src="${this.img}"></div>
            <ul>
            <li>Player Count: ${this.playerCount}</li>
            <li>Play Time: ${this.playTime} minutes</li>
            <li>Genre: ${this.genre}</li>
            </ul>
            <p class="description">${this.description}</p>
            </div>
            </div>`)
    } else if (this.bachelor && this.favorite) {
        $(".bachelor-container").append(
            `<div class="game">
            <div class="game-head">
            <h3>${this.name}</h3>
            </div>
            <div class="game-body">
            <div class="img-container"><img class="favorite" src="${this.img}"></div>
            <ul>
            <li>Player Count: ${this.playerCount}</li>
            <li>Play Time: ${this.playTime} minutes</li>
            <li>Genre: ${this.genre}</li>
            </ul>
            <p class="description">${this.description}</p>
            </div>
            </div>`)
    }
});

// $.each(sortedArray, function() {
//     if (this.favorite) {
//         $(".favorites-container").append(
//         `<div class="game">
//         <div class="game-head">
//         <h3>${this.name}</h3>
//         </div>
//         <div class="game-body">
//         <div class="img-container"><img class="favorite" src="${this.img}"></div>
//         <ul>
//         <li>Player Count: ${this.playerCount}</li>
//         <li>Play Time: ${this.playTime} minutes</li>
//         <li>Genre: ${this.genre}</li>
//         </ul>
//         <p class="description">${this.description}</p>
//         </div>
//         </div>`)
//     }
// });

// $.each(sortedArray, function() {
//     if (!this.wishlist && !this.favorite) {
//         $(".all-container").append(
//             `<div class="game">
//             <div class="game-head">
//             <h3>${this.name}</h3>
//             </div>
//             <div class="game-body">
//             <div class="img-container"><img src="${this.img}"></div>
//             <ul>
//             <li>Player Count: ${this.playerCount}</li>
//             <li>Play Time: ${this.playTime} minutes</li>
//             <li>Genre: ${this.genre}</li>
//             </ul>
//             <p class="description">${this.description}</p>
//             </div>
//             </div>`)
//     }
//     if (!this.wishlist && this.favorite) {
//         $(".all-container").append(
//             `<div class="game">
//             <div class="game-head">
//             <h3>${this.name}</h3>
//             </div>
//             <div class="game-body">
//             <div class="img-container"><img class="favorite" src="${this.img}"></div>
//             <ul>
//             <li>Player Count: ${this.playerCount}</li>
//             <li>Play Time: ${this.playTime} minutes</li>
//             <li>Genre: ${this.genre}</li>
//             </ul>
//             <p class="description">${this.description}</p>
//             </div>
//             </div>`)
//     }
// });

// $.each(sortedArray, function() {
//     if (this.new && !this.favorite) {
//         $(".recent-container").append(
//         `<div class="game">
//         <div class="game-head">
//         <h3>${this.name}</h3>
//         </div>
//         <div class="game-body">
//         <div class="img-container"><img src="${this.img}"></div>
//         <ul>
//         <li>Player Count: ${this.playerCount}</li>
//         <li>Play Time: ${this.playTime} minutes</li>
//         <li>Genre: ${this.genre}</li>
//         </ul>
//         <p class="description">${this.description}</p>
//         </div>
//         </div>`)
//     }
//     if (this.new && this.favorite) {
//         $(".recent-container").append(
//             `<div class="game">
//             <div class="game-head">
//             <h3>${this.name}</h3>
//             </div>
//             <div class="game-body">
//             <div class="img-container"><img class="favorite" src="${this.img}"></div>
//             <ul>
//             <li>Player Count: ${this.playerCount}</li>
//             <li>Play Time: ${this.playTime} minutes</li>
//             <li>Genre: ${this.genre}</li>
//             </ul>
//             <p class="description">${this.description}</p>
//             </div>
//             </div>`)
//     }
// });

// $.each(sortedArray, function() {
//     if (this.wishlist) {
//         $(".wishlist-container").append(
//         `<div class="game">
//         <div class="game-head">
//         <h3>${this.name}</h3>
//         </div>
//         <div class="game-body">
//         <div class="img-container"><img src="${this.img}"></div>
//         <ul>
//         <li>Player Count: ${this.playerCount}</li>
//         <li>Play Time: ${this.playTime} minutes</li>
//         <li>Genre: ${this.genre}</li>
//         </ul>
//         <p class="description">${this.description}</p>
//         </div>
//         </div>`)
//     }
// });

$(".recent").addClass("selected");

$(".nav-item").click(function() {
    $(".nav-item").removeClass("selected");
    $(this).addClass("selected");
})

$(".recent").click(function() {
    $(".parent-container").addClass("hidden");
    $(".recent-parent-container").removeClass("hidden");
})

$(".favorites").click(function() {
    $(".parent-container").addClass("hidden");
    $(".favorites-parent-container").removeClass("hidden");
})

$(".all").click(function() {
    $(".parent-container").addClass("hidden");
    $(".all-parent-container").removeClass("hidden");
})

$(".wishlist").click(function() {
    $(".parent-container").addClass("hidden");
    $(".wishlist-parent-container").removeClass("hidden");
})

$(".search").click(function() {
    $(".parent-container").addClass("hidden");
    $(".tag").removeClass("selected-tag");
    $(".search-parent-container").removeClass("hidden");
})

// let arrayOfTags = [];
$(".tag").click(function() {
    let tag = $(this).data("tag");

    $(".search-container").empty();

    // if ($(this).hasClass("selected-tag")) {
    //     $(this).removeClass("selected-tag");
    //     arrayOfTags.splice($.inArray(tag, arrayOfTags), 1 );
    //     console.log(arrayOfTags);
    // } else {
    //     $(this).addClass("selected-tag");
    //     arrayOfTags.push(tag);
    //     console.log(arrayOfTags); 
    // }

    $(".tag").removeClass("selected-tag");
    $(this).addClass("selected-tag");

    $.each(sortedArray, function() {
        if (tag == this.genre && !this.wishlist && !this.favorite) {
            $(".search-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        }
        if (tag == this.genre && !this.wishlist && this.favorite) {
            $(".search-container").append(
                `<div class="game">
                <div class="game-head">
                <h3>${this.name}</h3>
                </div>
                <div class="game-body">
                <div class="img-container"><img class="favorite" src="${this.img}"></div>
                <ul>
                <li>Player Count: ${this.playerCount}</li>
                <li>Play Time: ${this.playTime} minutes</li>
                <li>Genre: ${this.genre}</li>
                </ul>
                <p class="description">${this.description}</p>
                </div>
                </div>`)
        }
    })

    // $.each(sortedArray, function () {
    //     let matchesAll = true;
    //     $.each(this.genre, function () {
    //         if (arrayOfTags.includes(this)) return;
    //         if (!arrayOfTags.includes(this)) {
    //             matchesAll = false;
    //         }
    //     })
    //     if (matchesAll) {
    //         $(".search-container").append(
    //             `<div class="game">
    //             <div class="game-head">
    //             <h3>${this.name}</h3>
    //             </div>
    //             <div class="game-body">
    //             <div class="img-container"><img src="${this.img}"></div>
    //             <ul>
    //             <li>Player Count: ${this.playerCount}</li>
    //             <li>Play Time: ${this.playTime} minutes</li>
    //             <li>Genre: ${this.genre}</li>
    //             </ul>
    //             <p class="description">${this.description}</p>
    //             </div>
    //             </div>`)
    //     }
    // })
})