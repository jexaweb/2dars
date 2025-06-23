const pulus = document.querySelector("#pulus");
const minus = document.querySelector("#minus");
const title = document.querySelector("h1");
const titl = document.querySelector("body");

let counter = 0;

pulus.addEventListener("click", () => {
  counter++;
  title.textContent = counter;
  if (counter == 15) {
    pulus.disabled = true;
  } else {
    pulus.disabled = false;
  }
  minus.disabled = false;

  title.classList.remove("green-text", "red-text", "yellow-text");
  titl.classList.remove("green-bg", "red-bg");

  if (counter > 0) {
    title.classList.add("green-text");
    titl.classList.add("red-bg");
  } else if (counter === 0) {
    title.classList.add("yellow-text");
    titl.classList.add("green-bg");
  } else {
    title.classList.add("red-text");
    titl.classList.add("green-bg");
  }
});

minus.addEventListener("click", () => {
  counter--;
  title.textContent = counter;
  if (counter == -15) {
    minus.disabled = true;
  } else {
    minus.disabled = false;
  }
  pulus.disabled = false;
  title.classList.remove("green-text", "red-text", "yellow-text");
  titl.classList.remove("green-bg", "red-bg");

  if (counter < 0) {
    title.classList.add("red-text");
    titl.classList.add("green-bg");
  } else if (counter === 0) {
    title.classList.add("yellow-text");
    titl.classList.add("red-bg");
  } else {
    title.classList.add("green-text");
    titl.classList.add("red-bg");
  }
});
