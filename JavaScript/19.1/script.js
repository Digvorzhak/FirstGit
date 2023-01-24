const startLocation = document.querySelector(".start-here");
startLocation.textContent = "main title";

const subtitle4 = document.createElement("li");
subtitle4.innerHTML = "sub title 4";
const unorderedList = document.getElementsByTagName("ul");
unorderedList[1].appendChild(subtitle4);

const li = document.getElementsByTagName("li");
console.log(li);

for (let i = 0; i < li.length; i++) {
  li[i].setAttribute("class", `start-here${i}`);
}
console.log(li);

const li7 = document.querySelector(".start-here7");
li7.parentNode.removeChild(li7);

const firstTitle = document.querySelector(".start-here0");
firstTitle.textContent = "Master Of The Dom";

const p = document.querySelector("p");
p.innerHTML = "I managed to change the text";
