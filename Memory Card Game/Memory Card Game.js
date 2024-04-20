body = document.getElementById("body");

btn1 = document.getElementById("button1");
btn2 = document.getElementById("button2");
btn3 = document.getElementById("button3");
btn4 = document.getElementById("button4");
btn5 = document.getElementById("button5");
btn6 = document.getElementById("button6");
btn7 = document.getElementById("button7");
btn8 = document.getElementById("button8");
btn9 = document.getElementById("button9");
btn10 = document.getElementById("button10");
btn11 = document.getElementById("button11");
btn12 = document.getElementById("button12");
btn13 = document.getElementById("button13");
btn14 = document.getElementById("button14");
btn15 = document.getElementById("button15");
btn16 = document.getElementById("button16");

img1 = document.getElementById("img1");
img2 = document.getElementById("img2");
img3 = document.getElementById("img3");
img4 = document.getElementById("img4");
img5 = document.getElementById("img5");
img6 = document.getElementById("img6");
img7 = document.getElementById("img7");
img8 = document.getElementById("img8");
img9 = document.getElementById("img9");
img10 = document.getElementById("img10");
img11 = document.getElementById("img11");
img12 = document.getElementById("img12");
img13 = document.getElementById("img13");
img14 = document.getElementById("img14");
img15 = document.getElementById("img15");
img16 = document.getElementById("img16");

initField();

function initField() {
    for (let i = 1; i <= 16; i++) {
        window["img" + i].style.display = "none";
    }

    let randomImage = [1, 2, 3, 4, 5, 6, 7, 8];

    let number;
    let index;
    let i = 1;

    do {
        number = Math.round(Math.random() * 7) + 1;
        if (randomImage.indexOf(number) != -1) {
            index = randomImage.indexOf(number);
            window["img" + i].setAttribute("alt", number);
            /*console.log(randomImage);
            console.log(number);*/
            i++;
            randomImage.splice(index, 1);
        }
    } while (randomImage.length > 0);

    randomImage = [1, 2, 3, 4, 5, 6, 7, 8];
    i = 9;

    do {
        number = Math.round(Math.random() * 7) + 1;
        if (randomImage.indexOf(number) != -1) {
            index = randomImage.indexOf(number);
            window["img" + i].setAttribute("alt", number);
            /*console.log(randomImage);
            console.log(number);*/
            i++;
            randomImage.splice(index, 1);
        }
    } while (randomImage.length > 0);

    function setImage(img) {
        const alt = img.getAttribute("alt");
        switch (alt) {
            case "1":
                img.setAttribute("src", "images/akatsuki.png")
                break;
            case "2":
                img.setAttribute("src", "images/itachi.png")
                break;
            case "3":
                img.setAttribute("src", "images/kaguya.png")
                break;
            case "4":
                img.setAttribute("src", "images/kurama.png")
                break;
            case "5":
                img.setAttribute("src", "images/naruto.png")
                break;
            case "6":
                img.setAttribute("src", "images/obito.png")
                break;
            case "7":
                img.setAttribute("src", "images/pain.png")
                break;
            case "8":
                img.setAttribute("src", "images/sasuke-naruto.png")
                break;
        }
    }

    setImage(img1);
    setImage(img2);
    setImage(img3);
    setImage(img4);
    setImage(img5);
    setImage(img6);
    setImage(img7);
    setImage(img8);
    setImage(img9);
    setImage(img10);
    setImage(img11);
    setImage(img12);
    setImage(img13);
    setImage(img14);
    setImage(img15);
    setImage(img16);

    /*console.log(img1.getAttribute("alt"));
    console.log(img2.getAttribute("alt"));
    console.log(img3.getAttribute("alt"));
    console.log(img4.getAttribute("alt"));
    console.log(img5.getAttribute("alt"));
    console.log(img6.getAttribute("alt"));
    console.log(img7.getAttribute("alt"));
    console.log(img8.getAttribute("alt"));
    console.log(img9.getAttribute("alt"));
    console.log(img10.getAttribute("alt"));
    console.log(img11.getAttribute("alt"));
    console.log(img12.getAttribute("alt"));
    console.log(img13.getAttribute("alt"));
    console.log(img14.getAttribute("alt"));
    console.log(img15.getAttribute("alt"));
    console.log(img16.getAttribute("alt"));*/

    function showImage(btn, img) {
        btn.onclick = function () {
            img.style.display = "block";
        }
    }

    /*for (let i=0; i<=16; i++) {
        showImage("btn"+i, "img"+i);
    }*/

    showImage(btn1, img1);
    showImage(btn2, img2);
    showImage(btn3, img3);
    showImage(btn4, img4);
    showImage(btn5, img5);
    showImage(btn6, img6);
    showImage(btn7, img7);
    showImage(btn8, img8);
    showImage(btn9, img9);
    showImage(btn10, img10);
    showImage(btn11, img11);
    showImage(btn12, img12);
    showImage(btn13, img13);
    showImage(btn14, img14);
    showImage(btn15, img15);
    showImage(btn16, img16);
}
