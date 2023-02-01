const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/*
 * 사각형 만들고 채우는 가장 간단한 방법
ctx.fillRect(10, 10, 50, 50);
*/

/*
 * fillRect 함수 세분화
ctx.rect(10, 10, 50, 50);
ctx.rect(60, 60, 50, 50);
ctx.fill();
ctx.rect(110, 110, 50, 50);
ctx.stroke();

ctx.beginPath();
ctx.rect(160, 160, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
*/

/* 
 * rect 함수 세분화
ctx.moveTo(10, 10);
ctx.lineTo(60, 10);
ctx.lineTo(60, 60);
ctx.lineTo(10, 60);
ctx.lineTo(10, 10);
ctx.fill();
*/

/* 
 * 집 만들기 
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
*/

ctx.fillRect(170, 160, 15, 100);
ctx.fillRect(310, 160, 15, 100);
ctx.fillRect(220, 160, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(230, 90, 8, Math.PI, 2* Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(270, 90, 8, Math.PI, 2* Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(250, 110, 16, 0, Math.PI);
ctx.fill();




