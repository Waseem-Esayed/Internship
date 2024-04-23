text = document.getElementById("text");
btn = document.getElementById("button");
result = document.getElementById("result");

btn.onclick = function () {
    let first = text.value.slice(0, Math.floor(text.value.length / 2));
    let second = text.value.slice(Math.round(text.value.length / 2)).split('').reverse().join('');

    first == second ? result.textContent = "YES" : result.textContent = "NO";
}
