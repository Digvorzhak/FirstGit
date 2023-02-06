// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself

const jokeTitle = document.querySelector(".joke-title");
const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
// const countriesContainer = document.querySelector(".countriesContainer");

const jokeToday = () => {
  fetch("https://api.jokes.one/jod")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const title = data.contents.jokes[0].joke.title;
      console.log(title);
      const jokeText = data.contents.jokes[0].joke.text;
      console.log(jokeText);
      jokeTitle.innerHTML = `${title}`;
      joke.innerHTML = `${jokeText}`;
    });
};

btn.addEventListener("click", jokeToday);
