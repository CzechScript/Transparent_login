const input = document.getElementById("i1");
const input2 = document.getElementById("i4");


input.children[1].addEventListener("focus", zmenbarvu);
input2.children[1].addEventListener("focus", zmenbarvu1);
input.addEventListener("focusout", zmenbarvuzpet);
input2.addEventListener("focusout", zmenbarvuzpet1);

function zmenbarvu() {
    document.getElementById("i2").style.color = "#E7E9C0";
}
function zmenbarvuzpet() {
    document.getElementById("i2").style.color = "white";
}
function zmenbarvu1() {
    document.getElementById("i3").style.color = "#E7E9C0";
}
function zmenbarvuzpet1() {
    document.getElementById("i3").style.color = "white";
}