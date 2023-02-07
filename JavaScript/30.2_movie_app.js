const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const poster = document.querySelector(".poster");
const moveTitle = document.querySelector(".title");
const genre = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const actors = document.querySelector(".actors");
const director = document.querySelector(".director");
const ratings = document.querySelector(".ratings");

const movie = () => {
  button.addEventListener("click", async () => {
    const movieID = input.value.split(" ").join("+");
    console.log(input.value);
    const res = await fetch(`https://www.omdbapi.com/?t=${movieID}&apikey=2884cb9`);
    const data = await res.json();
    poster.style.background = `url("${data.Poster}") no-repeat center center/cover`;
    moveTitle.innerHTML = data.Title;
    genre.innerHTML = data.Genre;
    year.innerHTML = data.Year;
    plot.innerHTML = data.Plot;
    actors.innerHTML = data.Actors;
    director.innerHTML = data.Director;
    ratings.innerHTML = data.Ratings.map((element) => `${element.Source}: ${element.Value} <br>`).join(" ");
  });
};

movie();
