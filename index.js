document.addEventListener('DOMContentLoaded', function () {
    windowHeight = window.innerHeight;
    document.body.style.height = `${windowHeight}px`;

    for (let i = 1; i <= 32; i++) {
        let calenderItem = document.createElement('div');
        calenderItem.id = `calender-item-${i}`;
        calenderItem.classList.add('calender-item');

        calenderItem.innerHTML = i;

        let CalenderSectionContentContainer = document.querySelector('.main .calender .container');

        if (i == 1) {
            calenderItem.style.borderTopLeftRadius = '5px';
        } else if (i == 8) {
            calenderItem.style.borderTopRightRadius = '5px';
        } else if (i == 25) {
            calenderItem.style.borderBottomLeftRadius = '5px';
        } else if (i == 31) {
            calenderItem.style.borderBottomRightRadius = '5px';
        }

        if (i % 2 == 0) {
            calenderItem.style.backgroundColor = 'rgba(69, 84, 165, 1)';
        }

        /* Another Design
        calenderItem.style.backgroundColor = `rgba(69, 84, ${165 + i * 2.790}, 0.8)`;
        */

        if (i <= 8) {
            let firstRow = document.querySelector('.calender .rows .first-row');
            firstRow.appendChild(calenderItem);
        } else if (i > 8 && i <= 16) {
            let secondRow = document.querySelector('.calender .rows .second-row');
            secondRow.appendChild(calenderItem);
        } else if (i > 16 && i <= 24) {
            let thirdRow = document.querySelector('.calender .rows .third-row');
            thirdRow.appendChild(calenderItem);
        } else if (i > 24 && i <= 31) {
            let fourthRow = document.querySelector('.calender .rows .fourth-row');
            fourthRow.appendChild(calenderItem);
        } else if (i == 32) {
            let fourthRow = document.querySelector('.calender .rows .fourth-row');
            fourthRow.appendChild(calenderItem);
            calenderItem.style.background = 'transparent';
            calenderItem.style.borderColor = "transparent";
            calenderItem.innerHTML = '';
        }

    }

    let twoDots = document.getElementsByClassName('fa-grip-lines')[0];
    let leftSidebar = document.getElementsByClassName('left-sidebar')[0];

    let main = document.getElementsByClassName('main')[0];

    let calenderSection = document.getElementsByClassName('calender')[0];
    let dashboardSection = document.getElementsByClassName('dashboard')[0];
    let pagesSection = document.getElementsByClassName('pages')[0];
    let aboutSection = document.getElementsByClassName('about')[0];
    let notAvailableSection = document.getElementsByClassName('not-available')[0];

    let SearchInput = document.getElementsByClassName('search-box')[0];
    let loupe = document.getElementsByClassName('fa-search')[0];

    pagesSection.style.display = 'none';
    calenderSection.style.display = 'none';
    aboutSection.style.display = 'none';
    notAvailableSection.style.display = 'none';

    leftSidebar.style.transition = 'all 0.3s';

    main.style.transition = 'all 0.3s';

    let checkDevice = window.innerWidth >= 1000 ? 0 : 1;

    if (checkDevice == 1) {
        SearchInput.onclick = function () {
            loupe.style.display = 'none';
        }
        SearchInput.onmouseleave = function () {
            loupe.style.display = 'block';
        }
    }

    twoDots.onclick = function () {
        if (checkDevice == 0) {
            if (main.style.width != '100%') {
                main.style.width = '100%';
                document.html.style.backgroundColor = "red";
            } else if (main.style.width != 'calc(100% - 270px)') {
                main.style.width = 'calc(100% - 270px)';
                document.html.style.backgroundColor = "red";
            }
        } else {
            if (leftSidebar.style.maxHeight == '250px') {
                leftSidebar.style.maxHeight = '0';
                main.style.height = 'calc(100% - 70px)';
                document.querySelector('.left-sidebar .title').style.display = 'none';
                document.querySelector('.left-sidebar .list').style.display = 'none';
            } else if (leftSidebar.style.maxHeight != '250px') {
                leftSidebar.style.maxHeight = '250px';
                main.style.height = 'calc(100% - 70px - 250px)';
                setTimeout(function () {
                    document.querySelector('.left-sidebar .title').style.display = 'block';
                    document.querySelector('.left-sidebar .list').style.display = 'block';
                }, 150)
            }
        }
    }

    let allMainSections = document.querySelectorAll('.main-section');

    let allSelectors = document.querySelectorAll('.selector');

    allSelectors.forEach(function (item) {
        item.style.opacity = '0.6';
    })

    document.querySelectorAll('.selector')[0].style.opacity = '1';

    clickedSelector(0, dashboardSection);
    clickedSelector(1, notAvailableSection, 'Email');
    clickedSelector(2, calenderSection, 'Calendar');
    clickedSelector(3, pagesSection);
    clickedSelector(4, aboutSection);

    function clickedSelector(index, section, textContent) {
        allSelectors[index].onclick = function () {
            if (allSelectors[index].style.opacity == '0.6') {
                if (textContent) {
                    document.querySelector('.main .not-available .header .left .title').textContent = textContent;
                    document.querySelector('.main .not-available .header .right #title').textContent = textContent;
                }
                // document.getElementsByTagName('html')[0].style.marginBottom = `${marginBottom}px`;
                allSelectors.forEach(function (item) {
                    item.style.opacity = '0.6';
                })
                allMainSections.forEach(function (item) {
                    item.style.display = 'none';
                })
                section.style.display = 'block';
                allSelectors[index].style.opacity = '1';
                allSelectors[index].style.color = 'white';

                if (checkDevice == 1) {
                    leftSidebar.style.maxHeight = '0';
                    main.style.height = 'calc(100% - 70px)';
                    document.querySelector('.left-sidebar .title').style.display = 'none';
                    document.querySelector('.left-sidebar .list').style.display = 'none';
                }
            }
        }
    }
});
