let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight   = document.getElementById("goLight");

function turnoff() {
    stopLight.style.backgroundColor = "#111";
    slowLight.style.backgroundColor = "#111";
    goLight.style.backgroundColor = "#111";
}

stopButton.addEventListener("click", () => {
    turnoff();
    stopLight.style.backgroundColor = "red";
});

slowButton.addEventListener("click", () => {
    turnoff();
    slowLight.style.backgroundColor = "orange";
});

goButton.addEventListener("click", () => {
    turnoff();
    goLight.style.backgroundColor = "green";
});
