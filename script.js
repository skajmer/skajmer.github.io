// Change this to your username
var username = "Mariusz";

if (localStorage.getItem('data') == null) var mode = "dark";
else mode = localStorage.getItem('data');

const determineGreet = hours => document.getElementById("greeting").innerText = ` ${hours < 12 ? "Dzień dobry," : hours < 18 ? "Dobrego popołudnia," : "Dobry wieczór,"} ${username}.`;

// The same as "onload"
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString('pl-PL', { timeZone: 'Europe/Warsaw' },[], { hour: '2-digit', minute: '2-digit' });
    change_colors(mode);
    determineGreet(new Date().getHours());
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString('pl-PL', { timeZone: 'Europe/Warsaw' },[], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

document.getElementById("mode").addEventListener("click", function () {
    if (mode == "dark") {
        change_colors("light");
        localStorage.setItem('data', 'light');
        data = localStorage.getItem('data');
        mode = data;
    }
    else {
        change_colors("dark");
        localStorage.setItem('data', 'dark');
        data = localStorage.getItem('data');
        mode = data;
    }
});

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}

function dark_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#1e232f";
    document.getElementById("greeting").style.color = "#dee3de";
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "#bbb";

}

function light_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#FFE8D4";
    document.getElementById("greeting").style.color = "#767283";
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "#767283";
}

function change_colors(mode) {
    if (mode == "dark") light_colors();
    else dark_colors();
}
