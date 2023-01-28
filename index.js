let setup = document.getElementById("setup");
let btn1 = document.getElementById("btn1");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeimg = document.getElementById("joke-img");
const resetbtn = document.getElementById("resetBtn-1");
const haveFun = document.getElementById("btn1");
const wait = document.querySelector(".roller");
let joke = {};

const tellAJoke = () => {
  wait.style.display = "block";
  haveFun.style.display = "block";

  fetch("https://official-joke-api.appspot.com/random_joke ")
    .then((res) => res.json())
    .then(
      (data) => (
        (wait.style.display = "none"),
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
  resetbtn.style.display = "block";
};
const myReset = () => {
  jokeimg.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLJIrDahmQwhOLR32cjnTVbZA2OUWA7CbAA&usqp=CAU";
  setup.innerHTML = "";
  btn1.style.display = "none";
  punchline.innerHTML = "";
  resetbtn.style.display = "none";
};
