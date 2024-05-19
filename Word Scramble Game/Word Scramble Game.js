document.addEventListener("DOMContentLoaded", function () {
    let wordList = [
        "School", "Water", "Physic", "Happy", "Elephant", "Guitar",
        "Sunshine", "Diamond", "Butterfly", "Rainbow", "Firework", "Journey",
        "Paradise", "Whisper", "Galaxy", "Treasure", "Cinnamon", "Sapphire",
        "Thunder", "Miracle", "Voyage", "Wonderful", "Infinity", "Passion",
        "Eclipse", "Blossom", "Sunset", "Cascade", "Serene", "Twilight",
        "Serenity", "Petal", "Rhythm", "Fantasy", "Shimmer", "Breeze",
        "Aurora", "Melody", "Dewdrop", "Golden", "Tropical", "Dawn",
        "Echo", "Dusky", "Vivid"
    ];

    let DomWord = document.getElementById("word");
    let DomRefresh = document.getElementById("refresh");
    let DomCheck = document.getElementById("check");
    let DomInput = document.getElementById("input");
    let DomHint = document.getElementById("hint");
    let DomTime = document.getElementById("time");

    let word;

    function NewWord() {
        let index = Math.floor(Math.random() * wordList.length);
        word = wordList[index];
        
        switch (word) {
            case "School":
                DomHint.textContent = "Hint: Education";
                break;
            case "Water":
                DomHint.textContent = "Hint: H2O";
                break;
            case "Physic":
                DomHint.textContent = "Hint: Science";
                break;
            case "Happy":
                DomHint.textContent = "Hint: Emotion";
                break;
            case "Elephant":
                DomHint.textContent = "Hint: Big mammal";
                break;
            case "Guitar":
                DomHint.textContent = "Hint: Musical instrument";
                break;
            case "Sunshine":
                DomHint.textContent = "Hint: Bright light";
                break;
            case "Diamond":
                DomHint.textContent = "Hint: Precious gem";
                break;
            case "Butterfly":
                DomHint.textContent = "Hint: Insect with wings";
                break;
            case "Rainbow":
                DomHint.textContent = "Hint: Colorful arc";
                break;
            case "Firework":
                DomHint.textContent = "Hint: Explosive display";
                break;
            case "Journey":
                DomHint.textContent = "Hint: Adventure";
                break;
            case "Paradise":
                DomHint.textContent = "Hint: Heaven";
                break;
            case "Whisper":
                DomHint.textContent = "Hint: Quiet communication";
                break;
            case "Galaxy":
                DomHint.textContent = "Hint: Space system";
                break;
            case "Treasure":
                DomHint.textContent = "Hint: Valuable findings";
                break;
            case "Cinnamon":
                DomHint.textContent = "Hint: Spice";
                break;
            case "Sapphire":
                DomHint.textContent = "Hint: Blue gem";
                break;
            case "Thunder":
                DomHint.textContent = "Hint: Sound of lightning";
                break;
            case "Miracle":
                DomHint.textContent = "Hint: Amazing event";
                break;
            case "Voyage":
                DomHint.textContent = "Hint: Journey";
                break;
            case "Wonderful":
                DomHint.textContent = "Hint: Fantastic";
                break;
            case "Infinity":
                DomHint.textContent = "Hint: Endless";
                break;
            case "Passion":
                DomHint.textContent = "Hint: Strong feeling";
                break;
            case "Eclipse":
                DomHint.textContent = "Hint: Celestial event";
                break;
            case "Blossom":
                DomHint.textContent = "Hint: Flowering";
                break;
            case "Sunset":
                DomHint.textContent = "Hint: Dusk";
                break;
            case "Cascade":
                DomHint.textContent = "Hint: Waterfall";
                break;
            case "Serene":
                DomHint.textContent = "Hint: Peaceful";
                break;
            case "Twilight":
                DomHint.textContent = "Hint: Evening";
                break;
            case "Serenity":
                DomHint.textContent = "Hint: Tranquility";
                break;
            case "Petal":
                DomHint.textContent = "Hint: Flower part";
                break;
            case "Rhythm":
                DomHint.textContent = "Hint: Beat";
                break;
            case "Fantasy":
                DomHint.textContent = "Hint: Imagination";
                break;
            case "Shimmer":
                DomHint.textContent = "Hint: Glimmer";
                break;
            case "Breeze":
                DomHint.textContent = "Hint: Gentle wind";
                break;
            case "Aurora":
                DomHint.textContent = "Hint: Polar lights";
                break;
            case "Melody":
                DomHint.textContent = "Hint: Musical tune";
                break;
            case "Dewdrop":
                DomHint.textContent = "Hint: Morning moisture";
                break;
            case "Golden":
                DomHint.textContent = "Hint: Precious metal";
                break;
            case "Tropical":
                DomHint.textContent = "Hint: Warm climate";
                break;
            case "Dawn":
                DomHint.textContent = "Hint: Morning";
                break;
            case "Echo":
                DomHint.textContent = "Hint: Sound reflection";
                break;
            case "Dusky":
                DomHint.textContent = "Hint: Dark";
                break;
            case "Vivid":
                DomHint.textContent = "Hint: Bright and intense";
                break;
        }

        wordList.splice(index, 1);

        let shuffledWord = word.split('').sort(function () { return Math.random() - 0.5; }).join('');

        DomWord.textContent = shuffledWord.toUpperCase();

        timeLeft = 30;
        updateTimer();
    }

    function updateTimer() {
        DomTime.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            DomRefresh.disabled = true;
            DomCheck.disabled = true;
            DomInput.disabled = true;
            DomRefresh.style.backgroundColor = "red";
            DomCheck.style.backgroundColor = "red";
            clearInterval(timerInterval);
        }
        timeLeft--;
    }

    let timerInterval;

    DomRefresh.onclick = function () {
        clearInterval(timerInterval);
        NewWord();
        timerInterval = setInterval(updateTimer, 1000);
    }

    DomCheck.onclick = function () {
        if (DomInput.value.trim() === word || DomInput.value.trim().toUpperCase() === word.toUpperCase()) {
            window.alert("Correct!");
            clearInterval(timerInterval);
            NewWord();
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            window.alert("Incorrect!");
        }
        DomInput.value = "";
    }

    NewWord();
    timerInterval = setInterval(updateTimer, 1000);
});
