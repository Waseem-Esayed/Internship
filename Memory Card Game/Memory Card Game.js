body = document.getElementById("body");

title = document.getElementById("title");
error = document.getElementById("error");

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
btn17 = document.getElementById("button17");
btn18 = document.getElementById("button18");
btn19 = document.getElementById("button19");
btn20 = document.getElementById("button20");
btn21 = document.getElementById("button21");
btn22 = document.getElementById("button22");
btn23 = document.getElementById("button23");
btn24 = document.getElementById("button24");
btn25 = document.getElementById("button25");
btn26 = document.getElementById("button26");
btn27 = document.getElementById("button27");
btn28 = document.getElementById("button28");
btn29 = document.getElementById("button29");
btn30 = document.getElementById("button30");

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
img17 = document.getElementById("img17");
img18 = document.getElementById("img18");
img19 = document.getElementById("img19");
img20 = document.getElementById("img20");
img21 = document.getElementById("img21");
img22 = document.getElementById("img22");
img23 = document.getElementById("img23");
img24 = document.getElementById("img24");
img25 = document.getElementById("img25");
img26 = document.getElementById("img26");
img27 = document.getElementById("img27");
img28 = document.getElementById("img28");
img29 = document.getElementById("img29");
img30 = document.getElementById("img30");

initField();

function initField() {

    let count = 0;
    let firstImage;
    let secondImage;
    let error;

    /*randomId = [1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16,];

    let numb;
    let ind;
    let x = 1;

    do {
        numb = Math.round(Math.random() * 15) + 1;
        if (randomId.indexOf(numb) != -1) {
            ind = randomId.indexOf(numb);
            window["button" + x].setAttribute("id", numb);
            console.log(randomId);
            console.log(numb);
            x++;
            randomId.splice(ind, 1);
        }
    } while (randomId.length > 0);*/

    for (let i = 1; i <= 30; i++) {
        window["img" + i].style.display = "none";
    }

    let randomImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let number;
    let index;
    let i = 1;

    do {
        number = Math.round(Math.random() * 14) + 1;
        if (randomImage.indexOf(number) != -1) {
            index = randomImage.indexOf(number);
            window["img" + i].setAttribute("alt", number);
            console.log(randomImage);
            console.log(number);
            i++;
            randomImage.splice(index, 1);
        }
    } while (randomImage.length > 0);

    randomImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    i = 16;

    do {
        number = Math.round(Math.random() * 14) + 1;
        if (randomImage.indexOf(number) != -1) {
            index = randomImage.indexOf(number);
            window["img" + i].setAttribute("alt", number);
            console.log(randomImage);
            console.log(number);
            i++;
            randomImage.splice(index, 1);
        }
    } while (randomImage.length > 0);

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
    setImage(img17);
    setImage(img18);
    setImage(img19);
    setImage(img20);
    setImage(img21);
    setImage(img22);
    setImage(img23);
    setImage(img24);
    setImage(img25);
    setImage(img26);
    setImage(img27);
    setImage(img28);
    setImage(img29);
    setImage(img30);

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
    showImage(btn17, img17);
    showImage(btn18, img18);
    showImage(btn19, img19);
    showImage(btn20, img20);
    showImage(btn21, img21);
    showImage(btn22, img22);
    showImage(btn23, img23);
    showImage(btn24, img24);
    showImage(btn25, img25);
    showImage(btn26, img26);
    showImage(btn27, img27);
    showImage(btn28, img28);
    showImage(btn29, img29);
    showImage(btn30, img30);


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
            case "9":
                img.setAttribute("src", "images/blood.png")
                break;
            case "10":
                img.setAttribute("src", "images/boruto.png")
                break;
            case "11":
                img.setAttribute("src", "images/gaara.png")
                break;
            case "12":
                img.setAttribute("src", "images/icon1.jpg")
                break;
            case "13":
                img.setAttribute("src", "images/icon2.png")
                break;
            case "14":
                img.setAttribute("src", "images/shake-naruto.png")
                break;
            case "15":
                img.setAttribute("src", "images/sharingan.png")
                break;
        }
    }

    function showImage(btn, img) {
        btn.onclick = function () {
            if (img.style.display !== "block") {
                if (count % 2 === 0) {
                    firstImage = img;
                    img.style.display = "block";
                    count++;
                    title.innerHTML = count;
                } else {
                    secondImage = img;
                    img.style.display = "block";
                    count++;
                    title.innerHTML = count;
                    if (firstImage.getAttribute("alt") === secondImage.getAttribute("alt")) {
                        firstImage.setAttribute("test", "1");
                        secondImage.setAttribute("test", "1");
                    } else {
                        setTimeout(function () {
                            error++
                            firstImage.style.display = "none";
                            secondImage.style.display = "none";
                        }, 1500);
                    }
                }
            }
        }
    }
}
