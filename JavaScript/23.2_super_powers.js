const storm = {
  superPower: "teleporting",
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

const newPower = printSuperPower.bind(storm);
newPower();
