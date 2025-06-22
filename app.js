const pulus = document.querySelector("#pulus");
const minus = document.querySelector("#minus");
const title = document.querySelector("h1");
const titl = document.querySelector("body");

let counter = 0;

pulus.addEventListener("click", () => {
  if (counter < 15) {
    counter++;
    title.textContent = counter;

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
  }
});

minus.addEventListener("click", () => {
  if (counter > -15) {
    counter--;
    title.textContent = counter;

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
  }
});
