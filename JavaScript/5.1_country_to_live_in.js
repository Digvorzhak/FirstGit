"use strict";

const countryToLiveIn = (language, isIsland, population, country) => {
  if (language === "English" && population < 50000000 && isIsland === false) {
    console.log("This country meets your criteria ✨");
  } else console.log("My country doesn't meet your criteria 😭");
};

countryToLiveIn("English", false, 10000000);
