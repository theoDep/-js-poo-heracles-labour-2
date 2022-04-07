const Fighter = require("./src/Fighter.js");
const Weapon = require('./src/Weapon.js');

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

const sword = new Weapon('Sword');

const shield = new Weapon('Shield');

heracles.weapon = sword;
heracles.shield = shield;

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

console.log(3 + null)
