'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let scoredPlayers = Object.entries(game.scored);
console.log(scoredPlayers);

for (let [key, value] of scoredPlayers) {
  console.log(`Goal ${Number(key) + 1} : ${value}`);
}

let arr = Object.values(game.odds);
let total = 0;
for (let x of arr) {
  total += x;
}
console.log(total / 3);

let { team1, x, team2 } = game.odds;
console.log(team1, x, team2);

for (let i in game.odds) {
  console.log(game.odds[i]);
}

// !!!!!!!!!!!!!!!!!!!--------------IMPORTANT----------------!!!!!!!!!!!!!!//

for (let [team, odd] of Object.entries(game.odds)) {
  // ------------------------------this is my code ----------------------//
  // console.log(
  //   `odd of victory ${game?.[team] ?? `draw`}: ${odd}` || `Odd of draw: ${odd}`
  // );

  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd} `);
}
