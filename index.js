document.addEventListener('DOMContentLoaded', function () {
    let navElements = document.querySelectorAll('header .nav_elements_box ul li a');
    let navLine = document.getElementById('home-line');

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

    let capImage = document.getElementById('cap-image');
    let firstPageContentBox = document.querySelector('main .first-page .container .content-box');
    let firstPageCircleContainer = document.querySelector('main .first-page .container .circle-container');

    let secondPageLeftSide = document.querySelector('main .second-page .left-side');
    let secondPageRightSide = document.querySelector('main .second-page .right-side');

    capImage.style.position = 'relative';
    firstPageContentBox.style.position = 'relative';
    firstPageCircleContainer.style.position = 'relative';

    capImage.style.left = '0';
    firstPageContentBox.style.right = '0';
    firstPageCircleContainer.style.right = '0';

    capImage.style.opacity = 0.6;
    firstPageContentBox.style.opacity = 1;
    firstPageCircleContainer.style.opacity = 1;

    window.onscroll = function () {
        if (scrollY > 275) {
            secondPageLeftSide.style.right = 0;
            secondPageRightSide.style.left = 0;

            secondPageLeftSide.style.opacity = 1;
            secondPageRightSide.style.opacity = 1;
        }
    }
})
