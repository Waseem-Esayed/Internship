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
