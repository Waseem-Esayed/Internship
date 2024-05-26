document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");

    title.textContent = "Turn: Player 1";

    const DOMPlayer_1_Points = document.getElementById("player-1-points");
    const DOMPlayer_2_Points = document.getElementById("player-2-points");

    let player_1_Points = 0;
    let player_2_Points = 0;
    let turn = 0;

    DOMPlayer_1_Points.textContent = player_1_Points;
    DOMPlayer_2_Points.textContent = player_2_Points;

    const buttons = [];
    const images = [];
    for (let i = 1; i <= 30; i++) {
        buttons.push(document.getElementById("button" + i));
        images.push(document.getElementById("img" + i));
    }

    initField();

    function initField() {
        let count = 0;
        let firstImage, secondImage;

        images.forEach(img => {
            img.style.display = "none";
        });

        let randomImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        let i = 1;
        while (randomImage.length > 0) {
            const number = randomImage.splice(Math.floor(Math.random() * randomImage.length), 1)[0];
            images[i - 1].setAttribute("alt", number);
            i++;
        }

        randomImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        i = 16;
        while (randomImage.length > 0) {
            const number = randomImage.splice(Math.floor(Math.random() * randomImage.length), 1)[0];
            images[i - 1].setAttribute("alt", number);
            i++;
        }

        images.forEach(setImage);
        buttons.forEach((btn, index) => showImage(btn, images[index]));

        function setImage(img) {
            const alt = img.getAttribute("alt");
            switch (alt) {
                case "1":
                    img.setAttribute("src", "images/akatsuki.png");
                    break;
                case "2":
                    img.setAttribute("src", "images/itachi.png");
                    break;
                case "3":
                    img.setAttribute("src", "images/kaguya.png");
                    break;
                case "4":
                    img.setAttribute("src", "images/kurama.png");
                    break;
                case "5":
                    img.setAttribute("src", "images/naruto.png");
                    break;
                case "6":
                    img.setAttribute("src", "images/obito.png");
                    break;
                case "7":
                    img.setAttribute("src", "images/pain.png");
                    break;
                case "8":
                    img.setAttribute("src", "images/sasuke-naruto.png");
                    break;
                case "9":
                    img.setAttribute("src", "images/blood.png");
                    break;
                case "10":
                    img.setAttribute("src", "images/boruto.png");
                    break;
                case "11":
                    img.setAttribute("src", "images/gaara.png");
                    break;
                case "12":
                    img.setAttribute("src", "images/icon1.jpg");
                    break;
                case "13":
                    img.setAttribute("src", "images/icon2.jpg");
                    break;
                case "14":
                    img.setAttribute("src", "images/shake-naruto.png");
                    break;
                case "15":
                    img.setAttribute("src", "images/sharingan.png");
                    break;
            }
        }

        function showImage(btn, img) {
            btn.onclick = function() {
                if (img.style.display !== "block") {
                    if (count % 2 === 0) {
                        firstImage = img;
                        img.style.display = "block";
                        count++;
                    } else {
                        secondImage = img;
                        img.style.display = "block";
                        count++;

                        if (firstImage.getAttribute("alt") !== secondImage.getAttribute("alt")) {
                            buttons.forEach(button => button.setAttribute("disabled", ""));
                            setTimeout(() => {
                                buttons.forEach(button => button.removeAttribute("disabled"));
                                firstImage.style.display = "none";
                                secondImage.style.display = "none";
                            }, 1500);
                            turn++;
                        } else {
                            firstImage.style.cursor = "default";
                            secondImage.style.cursor = "default";

                            if (turn % 2 === 0) {
                                player_1_Points++;
                                DOMPlayer_1_Points.textContent = player_1_Points;
                            } else {
                                player_2_Points++;
                                DOMPlayer_2_Points.textContent = player_2_Points;
                            }
                        }

                        title.textContent = `Turn: Player ${turn % 2 === 0 ? 1 : 2}`;
                    }
                }
            }
        }
    }
});
