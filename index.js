document.addEventListener("DOMContentLoaded", function () {
    let twoDots = document.getElementsByClassName("fa-grip-lines")[0];
    let leftScrollbar = document.getElementsByClassName("left-sidebar")[0];

    let main = document.getElementsByClassName("main")[0];
    let dashboardSection = document.getElementsByClassName("dashboard")[0];
    let pagesSection = document.getElementsByClassName("pages")[0];
    let aboutSection = document.getElementsByClassName("about")[0];
    let notAvailableSection = document.getElementsByClassName("not-available")[0];

    pagesSection.style.display = "none";
    aboutSection.style.display = "none";
    notAvailableSection.style.display = "none";

    let leftScrollbarWidth = 250;

    leftScrollbar.style.width = `${leftScrollbarWidth}px`;
    leftScrollbar.style.transition = "all 0.3s";

    main.style.transition = "all 0.3s";

    twoDots.onclick = function () {
        if (main.style.width != "100%") {
            main.style.width = "100%";
        } else if (main.style.width != "calc(100% - 270px)") {
            main.style.width = "calc(100% - 270px)";
        }
    }

    let allMainSections = document.querySelectorAll(".main-section");

    let allSelectors = document.querySelectorAll(".selector");

    allSelectors.forEach(function (item) {
        item.style.opacity = "0.6";
    })

    document.querySelectorAll(".selector")[0].style.opacity = "1";

    clickedSelector(0, dashboardSection, 50);
    clickedSelector(1, notAvailableSection, 0, "Email");
    clickedSelector(2, notAvailableSection, 0, "Calendar");
    clickedSelector(3, pagesSection);
    clickedSelector(4, aboutSection, 100);

    function clickedSelector(index, section, marginBottom, textContent) {
        allSelectors[index].onclick = function () {
            if (allSelectors[index].style.opacity == "0.6") {
                if (textContent) {
                    document.querySelector(".main .not-available .header .left .title").textContent = textContent;
                    document.querySelector(".main .not-available .header .right #title").textContent = textContent;
                }
                document.getElementsByTagName("html")[0].style.marginBottom = `${marginBottom}px`;
                allSelectors.forEach(function (item) {
                    item.style.opacity = "0.6";
                })
                allMainSections.forEach(function (item) {
                    item.style.display = "none";
                })
                section.style.display = "block";
                allSelectors[index].style.opacity = "1";
                allSelectors[index].style.color = "white";
            }
        }
    }
});
