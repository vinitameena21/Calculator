function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.value = "Error";
    }
}

// Dark mode toggle
document.getElementById("themeSwitcher").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});