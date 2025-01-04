let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Month index +1 since getMonth() returns 0-11
let currentDay = currentDate.getDate(); // Calendar day (1-31)
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

// HTML Elements
const DOMTime = document.getElementById("time");
const DOMCity = document.getElementById("city");
const DOMTemperature = document.getElementById("temperature");
const DOMWeather = document.getElementById("weather");
const DOMMinTemperature = document.getElementById("min-temperature");
const DOMMaxTemperature = document.getElementById("max-temperature");

// Format time with leading zeros

let formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
let formattedMinute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
DOMTime.innerHTML = `${formattedHour}:${formattedMinute}`;

const iphoneTimeInterval = setInterval(() => {
  currentDate = new Date();
  currentHour = currentDate.getHours();
  currentMinute = currentDate.getMinutes();

  formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
  formattedMinute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;

  DOMTime.innerHTML = `${formattedHour}:${formattedMinute}`;
}, 1000);

const DOMDynamicIsland = document.getElementsByClassName("dynamic-island")[0];
const DOMDynamicIslandCamera = document.getElementsByClassName("camera")[0];

DOMDynamicIsland.onclick = function () {
  DOMDynamicIsland.classList.toggle("clicked");
  DOMDynamicIslandCamera.classList.toggle("clicked");
};

let appsDescriptions = document.querySelectorAll(".app-description");
appsDescriptions.forEach((element) => {
  element.style.tranform = "scale(10)";
});

const DOMMainBoxes = document.querySelectorAll(".box");
DOMMainBoxes.forEach((element) => {
  element.style.height = window.getComputedStyle(element).width;
});

const DOMOuterApps = document.querySelectorAll(".app");
DOMOuterApps.forEach((element) => {
  element.style.height = window.getComputedStyle(element).width;
});

const DOMInnerApps = document.querySelectorAll(".inner-app");
DOMInnerApps.forEach((element) => {
  element.style.height = window.getComputedStyle(element).width;
});

const DOMOuterMultipleAppsContainer = document.querySelectorAll(
  ".outer-multiple-apps-container"
);
const DOMInnerAppsInnerContainer = document.querySelectorAll(
  ".inner-apps-container"
);
const DOMIphoneContainer =
  document.getElementsByClassName("iphone-container")[0];

DOMOuterMultipleAppsContainer.forEach((element) => {
  element.onclick = function () {
    element.style.height = window.getComputedStyle(element).width;
    element.style.transition = "250ms all ease-in-out";
    element.style.transform = "translateX(33px) scale(5)";

    element.style.background = "rgba(75, 75, 75, 0.5)";
    element.style.zIndex = "10";
    element.style.backdropFilter = "blur(20px)";
  };
});

const DOMIphoneThemes = document.querySelectorAll(".theme");
DOMIphoneThemes.forEach((element) => {
  element.onclick = function () {
    DOMIphoneThemes.forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    element.classList.add("active");
    DOMIphoneContainer.style.background =
      element.getAttribute("data-background");
  };
});
