let setup = document.getElementById("setup");
let btn1 = document.getElementById("btn1");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeimg = document.getElementById("joke-img");
let joke = {};

const tellAJoke = () => {
  fetch("https://official-joke-api.appspot.com/random_joke ")
    .then((res) => res.json())
    .then(
      (data) => (
        (setup.innerHTML = data.setup),
        (btn1.style.display = "block"),
        (joke = data)
      )
    )
    .catch((err) => console.log(err));
};

const tellPunchLine = () => {
  punchline.innerHTML = joke.punchline;
  jokeimg.src =
    "https://cdn.pixabay.com/photo/2017/01/06/17/01/smiley-1958283__340.png";
};
