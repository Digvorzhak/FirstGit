const starWars = async () => {
  const array = [];
  try {
    for (let i = 1; i <= 10; i++) {
      const resPerson = await fetch(`https://swapi.dev/api/people/${i}/`);
      const personData = await resPerson.json();
      const personHome = personData.homeworld.slice(30, -1);
      const resPlanet = await fetch(`https://swapi.dev/api/planets/${personHome}/`);
      const planetData = await resPlanet.json();
      array[i - 1] = { name: personData.name, height: personData.height, hair: personData.hair_color, planet: { name: planetData.name, population: planetData.population } };
    }
    console.log(array);
  } catch (error) {
    console.error(error);
  }
};
starWars();

// We want the following information:
// 1. Name
// 2. Height
// 3. Hair Color
// 4. The planet they came from
// 5. Planet population
// Create the object structure like this:
// Each object will have the following:
// ● a key, the value of hair,
// ● a key, the value of height
// ● a key, the value of the name
// ● a key of the planet whose value is an object
// ○ inside that object you have a key, the value of the
// planets
// ● name and key, the value of the population.

// for (let i = 0; i < personList.length; i++) {
//   let person = new Person(personList[i].name, personList[i].age);
//   console.log(person);
// }
