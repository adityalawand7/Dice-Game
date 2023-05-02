var d1 = Math.floor(Math.random()*6) + 1;
var d2 = Math.floor(Math.random()*6) + 1;

var srcImg1 = "images/dice" + d1 + ".png";
var srcImg2 = "images/dice" + d2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",srcImg1)
document.querySelector(".dice .img2").setAttribute("src",srcImg2);

if(d1>d2){
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(d1<d2){
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").textContent="Draw";
}































// if (d1==1) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");
// }
// else if (d1==2) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");
// }
// else if (d1==3) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");
// }
// else if (d1==4) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");
// }
// else if (d1==5) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");
// }
// else if (d1==6) {
//     document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
// }
// if (d2 == 1) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
// }
// else if (d2 == 2) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
// }
// else if (d2 == 3) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
// }
// else if (d2 == 4) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
// }
// else if (d2 == 5) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
// }
// else if (d2 == 6) {
//     document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
// }

// if(d1>d2){
//     document.querySelector("h1").textContent="Player 1 Wins!!";
// }
// else if(d1<d2){
//     document.querySelector("h1").textContent="Player 2 Wins!!";
// }
// else{
//     document.querySelector("h1").textContent="No one wins.";
// }