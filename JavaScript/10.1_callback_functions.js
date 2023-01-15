"use strict";

const isString = (str, funct) => (typeof str === "string" ? funct(str) : null);

const logger = (log) => console.log(log);

isString("hi", logger);

const firstWorldUpperCase = (str, funct) => {};

console.log("thesunisblue");
