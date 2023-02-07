const jokeTitle = document.querySelector(".joke-title");
const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

// const countriesContainer = document.querySelector(".countriesContainer");

const jokeToday = async () => {
  const res = await fetch("https://api.jokes.one/jod");
  const data = await res.json();
  console.log(data);
  const title = data.contents.jokes[0].joke.title;
  console.log(title);
  const jokeText = data.contents.jokes[0].joke.text;
  console.log(jokeText);
  jokeTitle.innerHTML = `${title}`;
  joke.innerHTML = `${jokeText}`;
};

btn.addEventListener("click", jokeToday);
