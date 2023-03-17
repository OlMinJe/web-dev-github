let demo1 = document.getElementById("demo1");
let imgBulb = document.getElementById("imgBulb");

function changeContent() {
    demo1.innerHTML = "HelloJava";
}

function changeStyle() {
    demo1.style.fontSize = "25px";
    demo1.style.color = "red";
    demo1.style.backgroundColor = "yellow"
}

function light(sw) {
    if(sw === 0) {
        imgBulb.src = "./img/pic_bulboff.gif";
    } else {
        imgBulb.src = "./img/pic_bulbon.gif";
    }
}