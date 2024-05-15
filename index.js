document.addEventListener('DOMContentLoaded', function () {
    let fixingElements = document.querySelectorAll("#game-list .fixing");
    fixingElements.forEach(function (element) {

        element.removeAttribute("href");

        let fixingLabel = document.createElement('span');
        fixingLabel.textContent = 'Fixing';

        fixingLabel.classList.add("projects-info");

        element.insertBefore(fixingLabel, element.firstChild.nextSibling);
    });

    let green = document.getElementById("green");
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let purple = document.getElementById("purple");
    let orange = document.getElementById("orange");

    clickColor(green, "rgb(29, 209, 161)");
    clickColor(red, "rgb(255, 107, 107)");
    clickColor(blue, "rgb(46, 134, 222)");
    clickColor(purple, "rgb(243, 104, 224)");
    clickColor(orange, "rgb(255, 159, 67)");

    let colorList = ["rgb(29, 209, 161)", "rgb(19, 199, 189)"];

    document.body.style.backgroundColor = colorList[0];
    document.body.style.transition = "all 0.2s";

    let header = document.getElementById("header");
    leftSidebar = document.querySelectorAll(".left-sidebar");
    rightSidebar = document.querySelectorAll(".right-sidebar");

    function setSidebarBGC(sidebar) {
        sidebar.forEach(function (element) {
            colorList.length == 2 ? element.style.backgroundColor = colorList[1] : element.style.backgroundColor = colorList[0];
        })
    }

    header.style.backgroundColor = colorList[1];
    setSidebarBGC(leftSidebar);
    setSidebarBGC(rightSidebar);

    function clickColor(element, color) {
        element.style.backgroundColor = color;
        element.onclick = function () {
            colorList.splice(0);
            switch (element) {
                case green:
                    colorList.push("rgb(9, 189, 189)");
                    break;
                case red:
                    colorList.push("rgb(235, 87, 127)");
                    break;
                case blue:
                    colorList.push("rgb(26, 114, 242)");
                    break;
                case purple:
                    colorList.push("rgb(223, 84, 244)");
                    break;
                case orange:
                    colorList.push("rgb(235, 139, 87)");
                    break;
            };
            header.style.backgroundColor = colorList[0];
            setSidebarBGC(leftSidebar);
            setSidebarBGC(rightSidebar);
            document.body.style.backgroundColor = color;
        }
    }

    let Projects = document.querySelectorAll("#game-list a");
    let lastProject = Projects[Projects.length - 1];
    lastProject.style.marginBottom = "80px";

    let activeProjects = document.querySelectorAll(".projects");
    let sidebarProjects = document.querySelectorAll(".sidebar-projects");

    function combineProjects(element) {
        element.forEach(function (item) {
            item.onmouseenter = function () {
                if (element == sidebarProjects) {
                    item.style.backgroundColor = document.body.style.backgroundColor;
                } else {
                    colorList.length == 2 ? item.style.backgroundColor = colorList[1] : item.style.backgroundColor = colorList[0];
                }
                item.style.color = "white";
            }
            item.onmouseleave = function () {
                item.style.backgroundColor = "white";
                item.style.color = "black";
            }
        })
    }

    combineProjects(activeProjects);
    combineProjects(sidebarProjects);

    let greetings = [
        "Welcome to our project showcase!",
        "Ready for endless project exploration!",
        "Explore the world of projects with us!",
        "Join us for thrilling project adventures!",
        "Embark on a journey through our projects!",
        "Welcome to the ultimate project destination!",
        "Prepare to be amazed by our projects!",
        "Experience projects like never before!",
        "Get lost in the excitement of our projects!",
        "Discover your next favorite project here!",
        "Welcome to the project hub of your dreams!",
        "Dive into a world of endless project possibilities!",
        "Unleash your inner creator with us!",
        "Join our project community and thrive!",
        "Experience the joy of projects with us!",
        "Step into the realm of project excellence!",
        "Your adventure in project exploration starts here!",
        "Welcome to the home of epic projects!",
        "Prepare for non-stop project action!",
        "Embrace the thrill of projects with us!",
        "Enter a world of project wonders!",
        "Join us for a project extravaganza!",
        "Welcome, fellow creator, to our realm!",
        "Prepare for project excitement galore!",
        "Your project journey begins right here!",
        "Get ready to level up your project experience!",
        "Welcome aboard the project express!",
        "Embrace the power of projects with us!",
        "Let the project adventures begin!",
        "Welcome to the land of project dreams!",
        "Unleash your project potential with us!",
        "Join us and create like a champion!",
        "Welcome to the heart of project excellence!",
        "Prepare for an epic project odyssey!",
        "Embark on a project quest like no other!",
        "Discover new possibilities through our projects!",
        "Welcome to the project haven of your dreams!",
        "Experience the magic of projects with us!",
        "Dive into a sea of project possibilities!",
        "Prepare to be amazed by our project treasures!",
        "Welcome to the future of projects!",
        "Get ready for project greatness!",
        "Let the projects begin!",
        "Experience the joy of project nirvana!",
        "Welcome to the project universe!",
        "Prepare to be awestruck by our projects!",
        "Welcome to the project paradise of your dreams!",
        "Your adventure in project paradise starts now!",
        "Step into a world of project magic!",
        "Join us for an epic project journey!",
        "Welcome to the ultimate project experience!",
        "Get ready to level up your project skills!",
        "Your next project adventure awaits!",
        "Prepare for a project experience like no other!",
        "Discover the joy of projects with us!",
        "Welcome to the project oasis of your dreams!",
        "Let the projects begin and the fun never end!",
        "Embrace the thrill of project excellence!",
        "Experience project bliss with us!",
        "Get lost in the excitement of our projects!",
        "Welcome to the center of project innovation!",
        "Your gateway to project paradise starts here!",
        "Prepare for a project journey of epic proportions!",
        "Unleash your inner creator and conquer new heights!",
        "Join us and let's create together!",
        "Experience the power of projects with us by your side!",
        "Welcome to the project sanctuary of creators!",
        "Prepare for an adrenaline-fueled project experience!",
        "Your ticket to project nirvana has arrived!",
        "Embrace the joy of project discovery with us!",
        "Your journey into the heart of projects begins here!",
        "Step into the realm of project legend and lore!",
        "Join us on a quest for project greatness!",
        "Prepare to be amazed by our world-class projects!",
        "Enter the world of project wonders and delights!",
        "Your quest for project excitement ends here!",
        "Welcome to the project haven where memories are made!",
        "Join us as we redefine the art of projects!",
        "Experience the magic of projects with us by your side!",
        "Get ready to experience projects like never before!",
    ];

    let randomIndex = Math.floor(Math.random() * greetings.length);

    let greetingElement = document.querySelector("header h1");
    greetingElement.textContent = greetings[randomIndex];

    let searchInput = document.getElementById("searchInput");

    let gameLinks = document.querySelectorAll("nav #game-list li a");

    searchInput.addEventListener("input", function () {
        let searchTerm = searchInput.value.toLowerCase().trim();

        gameLinks.forEach(function (link) {
            let gameName = link.textContent.toLowerCase();

            if (gameName.includes(searchTerm)) {
                link.style.display = "flex";
            } else {
                link.style.display = "none";
            }
        });
    });
});
