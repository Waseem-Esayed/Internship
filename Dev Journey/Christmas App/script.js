let demos = document.querySelectorAll(".demo");
let shadows = document.querySelectorAll(".shadow");
let features = document.querySelectorAll(".feature");

demos.forEach((element) => {
  element.style.height =
    parseFloat(window.getComputedStyle(element).width) - 70 + "px";
  window.onresize = function () {
    element.style.height =
      parseFloat(window.getComputedStyle(element).width) - 70 + "px";
  };
  element.onmouseleave = function () {
    element.classList.add("leave");
  };
  element.onmouseenter = function () {
    element.classList.remove("leave");
  };
});

shadows.forEach((element) => {
  element.style.height =
    Math.sqrt(
      Math.pow(
        parseFloat(
          window.getComputedStyle(document.getElementsByClassName("demo")[0])
            .width
        ),
        2
      ) +
        Math.pow(
          parseFloat(
            window.getComputedStyle(document.getElementsByClassName("demo")[0])
              .height
          ),
          2
        )
    ) + "px";
});

function setFeatureWidth() {
  features.forEach((element) => {
    element.style.height =
      parseFloat(
        window.getComputedStyle(document.getElementsByClassName("feature")[0])
          .width
      ) *
        0.7 +
      "px";
  });
}

setFeatureWidth();

window.onresize = setFeatureWidth;

function createSnowflake() {
  const snowflake = document.createElement("i");
  snowflake.classList.add("fas", "fa-snowflake", "snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, Math.random() * 3000 + 2000);
}

setInterval(createSnowflake, 200);

function countdown() {
  const christmasDate = new Date("December 25, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = christmasDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(countdown, 1000);
