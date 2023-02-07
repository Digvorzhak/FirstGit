const input = document.querySelector(".input");
const pic = document.querySelector(".profilePic");
const button = document.querySelector(".btn");
const username = document.querySelector(".name");
const repos = document.querySelector(".public-repos");

const github = () => {
  button.addEventListener("click", async function () {
    const res = await fetch(`https://api.github.com/users/${input.value}`);
    const data = await res.json();
    console.log(data);
    pic.style.background = `url("${data.avatar_url}") no-repeat center center/cover`;
    username.innerHTML = data.name;
    repos.innerHTML = `Public repos: ${data.public_repos}`;
  });
};

github();
