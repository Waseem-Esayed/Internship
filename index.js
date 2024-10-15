document.addEventListener('DOMContentLoaded', function () {
    let navElements = document.querySelectorAll('header .nav_elements_box ul li a');
    let navLine = document.getElementById('home-line');
    let main = document.querySelector("body > main");
    let firstPage = document.querySelector("body > main > div.first-page");
    let secondPage = document.querySelector("body > main > div.second-page");
    let capImage = document.getElementById('cap-image');
    let firstPageContentBox = document.querySelector('main .first-page .container .content-box');
    let firstPageCircleContainer = document.querySelector('main .first-page .container .circle-container');
    let secondPageLeftSide = document.querySelector('main .second-page .left-side');
    let secondPageRightSide = document.querySelector('main .second-page .right-side');

    //main.style.height = firstPage.clientHeight + secondPage.clientHeight + 'px';

    navElements.forEach(function (element) {
        element.style.color = 'white';
        if (element.textContent === 'Home') {
            element.style.color = 'rgb(16, 124, 243)';
        }

        element.onclick = function () {
            navElements.forEach(function (element) {
                element.style.color = 'white';
            })
            element.style.color = 'rgb(16, 124, 243)';
            element.appendChild(navLine);
            console.log('selected!');
        }
    })

    capImage.style.position = 'relative';
    firstPageContentBox.style.position = 'relative';
    firstPageCircleContainer.style.position = 'relative';

    capImage.style.left = '0';
    firstPageContentBox.style.right = '0';
    firstPageCircleContainer.style.right = '0';

    capImage.style.opacity = 0.6;
    firstPageContentBox.style.opacity = 1;
    firstPageCircleContainer.style.opacity = 1;

    if (window.matchMedia("(min-width: 769px)").matches) {
        // Der Bildschirm ist größer als 768px
        window.onscroll = function () {
            if (window.scrollY <= window.innerHeight) {
                secondPageLeftSide.style.right = (0 - (window.scrollY - 20)) + window.innerHeight + 'px';
                secondPageRightSide.style.left = (0 - (window.scrollY - 20)) + window.innerHeight + 'px';

                secondPageLeftSide.style.opacity = 1;
                secondPageRightSide.style.opacity = 1;
            } else {
                secondPageLeftSide.style.right = 0;
                secondPageRightSide.style.left = 0;
            }
        }
    } else {
        window.onscroll = function () {
            if (window.scrollY - window.innerHeight + 1000 <= window.innerHeight) {
                secondPageLeftSide.style.right = (0 - (window.scrollY - window.innerHeight + 1000 - 20)) + window.innerHeight + 'px';
                secondPageLeftSide.style.opacity = 1;
            } else {
                secondPageLeftSide.style.right = 0;
            }
            if (window.scrollY - window.innerHeight + 500 <= window.innerHeight) {
                secondPageRightSide.style.left = (0 - (window.scrollY - window.innerHeight + 500 - 20)) + window.innerHeight + 'px';
                secondPageRightSide.style.opacity = 1;
            } else {
                secondPageRightSide.style.left = 0;
            }
        }
    }
})
/*
window.alert(scrollY);
window.alert(window.innerHeight);

let secondPageRightSide = document.querySelector('main .second-page .right-side');
console.log(secondPageRightSide.style.opacity);
*/
