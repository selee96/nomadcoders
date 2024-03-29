const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

const colors = [
    "#f03e3e",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14"
]

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function cancelPainting(){
    isPainting = false;
}
function onLineWidthChange(event) {
    ctx.beginPath();
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.beginPath();
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    ctx.beginPath();
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick() {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}
function onCanvasClick() {
    if(isFilling) {
        // ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        ctx.fill();
    }
}
function onDestroyClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}
function onEraserClick() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        // ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(image, 0, 0);
        fileInput.value = null;
    }
}
function onDoubleClick(event) {
    const text = textInput.value;
    if(text !== "") {
        const font_size = lineWidth.value * 10;
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = `${font_size}px serif`;
        if(isFilling) {
            ctx.fillText(text, event.offsetX, event.offsetY);
        } else {
            ctx.strokeText(text, event.offsetX, event.offsetY);
        }
        ctx.restore();
    }
}
function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);

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

/*
 * 로봇 만들기 
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
*/

