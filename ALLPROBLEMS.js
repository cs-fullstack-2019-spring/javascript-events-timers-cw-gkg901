
//PROBLEM1
//GRAB CHECKBOX HERE
var boxElement = document.getElementById('box');

//EVENT LISTENER WITH IN-LINE FUNCTION
boxElement.addEventListener('click', function (e) {
    alert("I TOLD YOU NOT TO CLICK THIS");
    e.preventDefault();
});


//PROBLEM2

//TEXT AREA WITH HIDDEN MESSAGE USING BOOLEAN VALUES
let canType = false;
let mybtn = document.getElementById('btn');
let myTA = document.getElementById("tarea");
let hiddenMSG = document.getElementById("hidden");
mybtn.addEventListener('click', function (e) {

    if (canType) {
        myTA.setAttribute("disabled", "");
        canType = false;
        hiddenMSG.textContent = ""
    } else {
        myTA.removeAttribute("disabled");
        canType = true;
        hiddenMSG.textContent = "START TYPING";
    }
});


//PROBLEM3

//GRAB COUNTWOWN ELEMENTS AND CREATE VARIABLE TO SUBTRACT FROM
var number = 10;
var display = document.getElementById('h2');
var btn = document.getElementById("takeoff");

//EVENT LISTENER WITH IN-LINE FUNCT-CEPTION
btn.addEventListener('click', function () {
        var intervalID = window.setInterval(myCallback, 1000);
        var x = 1;

        function myCallback() {

            display.innerHTML = number;
            x++;
            if (x === 12) {
                display.innerHTML = "LIFT OFF!!!";
                clearInterval(intervalID)
            }
            number--;
        }
    }
);
