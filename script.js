function callMe() {
    document.getElementById('q1').style.backgroundColor = "transparent";
    document.getElementById('q2').style.backgroundColor = "transparent";
    document.getElementById('q3').style.backgroundColor = "transparent";
}

let number1, number2, question;

document.getElementById('q1').addEventListener("mouseover", function Quiz1() {
    if (document.getElementById('q1').style.backgroundColor !== "green") {
        number1 = Math.floor(Math.random() * 5 + 1);
        number2 = Math.floor(Math.random() * 5 + 1);
        question = prompt("Was ist das Ergebnis aus " + number1 + '+' + number2 + "?");

        function Check1() {
            if (number1 + number2 == question) {
                document.getElementById('q1').style.backgroundColor = "green";
            } else {
                document.getElementById('q1').style.backgroundColor = "red";
            }
        }
        Check1();
    } else {
        alert("You already did it correctly!");
    }
});


document.getElementById('q2').addEventListener("mouseover", function Quiz2() {
    if (document.getElementById('q2').style.backgroundColor !== "green") {
        number1 = Math.floor(Math.random() * 20 + 1);
        number2 = Math.floor(Math.random() * 20 + 1);
        question = prompt("Was ist das Ergebnis aus " + number1 + '+' + number2 + "?");

        function Check2() {
            if (number1 + number2 == question) {
                document.getElementById('q2').style.backgroundColor = "green";
            } else {
                document.getElementById('q2').style.backgroundColor = "red";
            }
        }
        Check2();
    } else {
        alert("You already did it correctly!");
    }
});

document.getElementById('q3').addEventListener("mouseover", function Quiz3() {
    if (document.getElementById('q3').style.backgroundColor !== "green") {
        number1 = Math.floor(Math.random() * 35 + 1);
        number2 = Math.floor(Math.random() * 35 + 1);
        question = prompt("Was ist das Ergebnis aus " + number1 + '+' + number2 + "?");

        function Check3() {
            if (number1 + number2 == question) {
                document.getElementById('q3').style.backgroundColor = "green";
            } else {
                document.getElementById('q3').style.backgroundColor = "red";
            }
        }
        Check3();
    } else {
        alert("You already did it correctly!");
    }
});