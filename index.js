document.addEventListener('DOMContentLoaded', function () {
    windowHeight = window.innerHeight;
    document.body.style.height = `${windowHeight}px`;

    windowWidth = window.innerWidth;

    console.log('Window Height:', windowHeight);
    console.log('Window Width:', windowWidth);

    for (let i = 1; i <= 32; i++) {
        let calenderItem = document.createElement('div');
        calenderItem.id = `calender-item-${i}`;
        calenderItem.classList.add('calender-item');

        calenderItem.innerHTML = i;

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
            calenderItem.style.borderColor = 'transparent';
            calenderItem.innerHTML = '';
        }

    }

    // Monat kriegen
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    let month = monthList[d.getMonth()];

    // Jahr kriegen
    const y = new Date();
    let year = y.getFullYear();

    // Auf Datum DOMs zugreifen
    let resetDate = document.getElementById('reset-date');
    let currentMonth = document.getElementById('month');
    let currentYear = document.getElementById('year');

    currentMonth.innerHTML = month;
    currentYear.innerHTML = year;

    // Auf Datum + und - zugreifen
    let dateMinus = document.getElementById('minus');
    let datePlus = document.getElementById('plus');

    function leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    function setCalender() {
        for (let i = 1; i <= 31; i++) {
            i % 2 == 0 ? document.getElementById(`calender-item-${i}`).style.background = 'rgba(69, 84, 165, 1)' : document.getElementById(`calender-item-${i}`).style.background = 'rgba(69, 84, 165, 0.8)';
            document.getElementById(`calender-item-${i}`).style.borderColor = 'rgb(26, 28, 42)';
            document.getElementById(`calender-item-${i}`).innerHTML = i;
        }

        if (month == 'April' || month == 'June' || month == 'September' || month == 'November') {
            for (let i = 31; i <= 31; i++) {
                document.getElementById(`calender-item-${i}`).style.background = 'transparent';
                document.getElementById(`calender-item-${i}`).style.borderColor = 'transparent';
                document.getElementById(`calender-item-${i}`).innerHTML = '';
            }
        } else if (month == 'February') {
            for (let i = leapYear(2024) == true ? 30 : 29; i <= 31; i++) {
                document.getElementById(`calender-item-${i}`).style.background = 'transparent';
                document.getElementById(`calender-item-${i}`).style.borderColor = 'transparent';
                document.getElementById(`calender-item-${i}`).innerHTML = '';
            }
        }
    }

    setCalender();

    resetDate.onclick = function () {
        month = monthList[d.getMonth()];
        year = y.getFullYear();
        currentMonth.innerHTML = month;
        currentYear.innerHTML = year;
        setCalender();
    }

    dateMinus.onclick = function () {
        if (monthList.indexOf(month) !== 0) {
            currentMonth.innerHTML = monthList[monthList.indexOf(month) - 1];
            month = currentMonth.innerHTML;
        } else {
            year -= 1;
            currentYear.innerHTML = year;
            month = 'December';
            currentMonth.innerHTML = month;
        }
        setCalender();
    }

    datePlus.onclick = function () {
        if (monthList.indexOf(month) !== 11) {
            currentMonth.innerHTML = monthList[monthList.indexOf(month) + 1];
            month = currentMonth.innerHTML;
        } else {
            year += 1;
            currentYear.innerHTML = year;
            month = 'January';
            currentMonth.innerHTML = month;
        }
        setCalender();
    }

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

    let twoDots = document.getElementsByClassName('fa-grip-lines')[0];

    // Test Case: There is no internet connection
    // let twoDots = document.getElementById('profile');

    twoDots.onclick = function () {
        if (checkDevice == 0) {
            if (main.style.width != '100%') {
                main.style.width = '100%';
            } else if (main.style.width != 'calc(100% - 270px)') {
                main.style.width = 'calc(100% - 270px)';
            }
        } else {
            if (leftSidebar.style.minHeight == '270px') {
                leftSidebar.style.minHeight = '0';
                leftSidebar.style.maxHeight = '0';
                main.style.height = 'calc(100% - 70px)';
                document.querySelector('.left-sidebar .title').style.display = 'none';
                document.querySelector('.left-sidebar .list').style.display = 'none';
                main.style.top = '70px';
                console.log('1');
            } else if (leftSidebar.style.minHeight != '270px') {
                leftSidebar.style.minHeight = '270px';
                main.style.height = 'calc(100% - 70px - 270px)';
                main.style.top = 'calc(70px + 270px)';
                console.log('2');
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

    let difference = 926 - windowHeight - 70;

    console.log('Check Device:', checkDevice);

    if (checkDevice == 0) {
        setSectionHeights(`calc(100% + ${difference - 70}px)`, `calc(100% + ${difference + 124}px)`);
    }

    function setSectionHeights(height, forLongSections) {
        if (windowHeight <= 926) {
            leftSidebar.style.minHeight = height;
            leftSidebar.style.maxHeight = height;

            main.style.minHeight = height;
            main.style.maxHeight = height;
        } else {
            leftSidebar.style.minHeight = forLongSections;
            leftSidebar.style.maxHeight = forLongSections;

            main.style.minHeight = forLongSections;
            main.style.maxHeight = forLongSections;
        }
    }

    clickedSelector(0, dashboardSection, null, `calc(100% + ${difference - 70}px)`);
    clickedSelector(1, notAvailableSection, 'Email', `calc(100% + ${difference - 70}px)`);
    clickedSelector(2, calenderSection, 'Calendar', `calc(100% + ${difference}px)`);
    clickedSelector(3, pagesSection, null, `calc(100% + ${difference - 70}px)`);
    clickedSelector(4, aboutSection, null, `calc(100% + ${difference - 70}px)`);

    function clickedSelector(index, section, textContent, height) {
        allSelectors[index].onclick = function () {
            if (allSelectors[index].style.opacity == '0.6') {
                document.querySelector('.main .not-available .header .left .title').textContent = textContent;
                document.querySelector('.main .not-available .header .right #title').textContent = textContent;

                if (checkDevice == 0) {
                    setSectionHeights(height, 'calc(100% - 70px) !important');
                }

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
                    console.log('3');
                    leftSidebar.style.minHeight = '0';
                    leftSidebar.style.maxHeight = '0';
                    main.style.height = 'calc(100% - 70px)';
                    main.style.top = '70px';
                    document.querySelector('.left-sidebar .title').style.display = 'none';
                    document.querySelector('.left-sidebar .list').style.display = 'none';
                }
            }
        }
    }
});
