"use strict";

const shade = (color) => {
  switch (color) {
    case "Pink":
    case "Yellow":
    case "Orange":
      return "Light color";
    case "Blue":
    case "Brown":
    case "Purple":
      return "Dark color";
    case color:
      return "Unknown color";
  }
};
