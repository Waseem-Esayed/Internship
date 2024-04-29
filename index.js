document.addEventListener('DOMContentLoaded', function () {
    const greetings = [
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
        "Welcome to the world of limitless project possibilities!",
        "Join us and let's create together!",
        "Experience the power of projects with us by your side!",
        "Welcome to the project sanctuary of creators!",
        "Prepare for an adrenaline-fueled project experience!",
        "Your ticket to project nirvana has arrived!",
        "Embrace the joy of project discovery with us!",
        "Get ready to immerse yourself in our world of projects!",
        "Welcome to the ultimate project destination for creators!",
        "Your journey into the heart of projects begins here!",
        "Step into the realm of project legend and lore!",
        "Join us on a quest for project greatness!",
        "Prepare to be amazed by our world-class projects!",
        "Welcome to the project utopia you've been searching for!",
        "Enter the world of project wonders and delights!",
        "Get ready to embark on a project adventure of a lifetime!",
        "Welcome to the project sanctuary where dreams come true!",
        "Join us for a project journey filled with excitement and joy!",
        "Experience the thrill of project excellence at its finest!",
        "Welcome to the project paradise where fun knows no bounds!",
        "Step into our realm of projects and let your imagination soar!",
        "Your quest for project excitement ends here!",
        "Welcome to the project haven where memories are made!",
        "Join us as we redefine the art of projects!",
        "Prepare to be enchanted by our enchanting array of projects!",
        "Experience the magic of projects with us by your side!",
        "Get ready to experience projects like never before!",
        "Embark on a journey through the realm of project innovation!",
        "Welcome to the ultimate destination for project enthusiasts!",
    ];


    const randomIndex = Math.floor(Math.random() * greetings.length);

    const greetingElement = document.querySelector('header h1');
    greetingElement.textContent = greetings[randomIndex];
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    const gameLinks = document.querySelectorAll('nav ul li a');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        gameLinks.forEach(function (link) {
            const gameName = link.textContent.toLowerCase();

            if (gameName.includes(searchTerm)) {
                link.style.display = 'flex';
            } else {
                link.style.display = 'none';
            }
        });
    });
});
