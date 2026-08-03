var background = document.getElementById("core");

function activate() {
    background.style.backgroundColor = "black";
}

function change() {
    background.style.backgroundColor = "lightcoral";
}

background.onclick = change;

