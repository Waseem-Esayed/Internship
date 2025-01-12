const DOMElements = {
  body: document.querySelector("body"),
  bodyOverlayer: document.querySelector("body > .overlayer"),
  header: document.querySelector("header"),
  navs: document.querySelectorAll("header nav li a"),
  menuTogglerButton: document.getElementById("button"),
  menuTogglerButtonLines: document.querySelectorAll("#button .line"),
};

DOMElements.navs.forEach((element) => {
  element.onclick = function () {
    toggleSidebar();
    DOMElements.navs.forEach((el) => el.classList.remove("active"));
    element.classList.add("active");
  };
});

DOMElements.menuTogglerButton.addEventListener("click", () => {
  toggleSidebar();
});

DOMElements.bodyOverlayer.addEventListener("click", () => {
  toggleSidebar();
});

function toggleSidebar() {
  DOMElements.body.classList.toggle("show");
  DOMElements.header.classList.toggle("show");
  DOMElements.menuTogglerButton.classList.toggle("close");
}
