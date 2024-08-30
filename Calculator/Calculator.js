let oldval = document.getElementById("displayer").value;
let clearval = "";

function number1() {
    document.getElementById("displayer").value = oldval + "1";
    oldval = oldval + 1;
}

function number2() {
    document.getElementById("displayer").value = oldval + "2";
    oldval = oldval + 2;
}

function number3() {
    document.getElementById("displayer").value = oldval + "3";
    oldval = oldval + 3;
}

function number4() {
    document.getElementById("displayer").value = oldval + "4";
    oldval = oldval + 4;
}

function number5() {
    document.getElementById("displayer").value = oldval + "5";
    oldval = oldval + 5;
}

function number6() {
    document.getElementById("displayer").value = oldval + "6";
    oldval = oldval + 6;
}

function number7() {
    document.getElementById("displayer").value = oldval + "7";
    oldval = oldval + 7;
}

function number8() {
    document.getElementById("displayer").value = oldval + "8";
    oldval = oldval + 8;
}

function number9() {
    document.getElementById("displayer").value = oldval + "9";
    oldval = oldval + 9;
}

function number0() {
    document.getElementById("displayer").value = oldval + "0";
    oldval = oldval + 0;
}

function numbera() {
    document.getElementById("displayer").value = oldval + "+";
    oldval = oldval + "+";
}

function numbers() {
    document.getElementById("displayer").value = oldval + "-";
    oldval = oldval + "-";
}

function numberm() {
    document.getElementById("displayer").value = oldval + "*";
    oldval = oldval + "*";
}

function numberd() {
    document.getElementById("displayer").value = oldval + "/";
    oldval = oldval + "/";
}

function numberc() {
    document.getElementById("displayer").value = clearval;
    oldval = clearval;
}

function numbere() {
    const display = document.getElementById('displayer');

    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    oldval = clearval;
}