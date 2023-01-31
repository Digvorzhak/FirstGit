function Pokemon(pokemonName, PokemonType, pokemonAttackList) {
  this.pokemonName = pokemonName;
  this.PokemonType = PokemonType;
  this.pokemonAttackList = pokemonAttackList;
}

const crabby = new Pokemon("Crabby", "aqua", ["Snare", "Bite", "Cleave"]);
const onix = new Pokemon("Onix", "Monolith", ["Slash", "Saliva", "Snare"]);
const beedrill = new Pokemon("Beedrill", "Insect", ["Bite", "Stun", "Shock"]);

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.pokemonName}!`;
};

Pokemon.prototype.attack = function (num) {
  return `${this.pokemonName} used ${this.pokemonAttackList[num]}`;
};

console.log(beedrill.callPokemon());

console.log(onix.attack(1));

console.log(crabby.attack(2));
