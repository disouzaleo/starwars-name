var uniqueRandomArray = require('random-uniq-array');
var starWarsName = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsName);

module.exports = {
  all: starWarsName,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 1; i < number; i++)
      randomItems.push(getRandomItem());

    return randomItems;
  }
}
