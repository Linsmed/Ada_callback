let setup = document.getElementById("setup");
let btn1 = document.getElementById("btn1");
let punchline = document.getElementsByClassName("punchline")[0];
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
};
