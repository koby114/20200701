import "./styles.css";

const canvas = document.querySelector("#draw-area"); //htmlのid:draw-areaを参照
const context = canvas.getContext("2d"); //キャンパスに2Dの書き込みを許可

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstrat", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touched", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height); //指定範囲をクリア
  //引数:x座標,y座標,横幅,高さ
});

let isDrag = false;

function draw(x, y) {
  if (!isDrag) {
    return;
  }

  context.lineWidth = 5; //線の太さ
  context.strokeStyle = "#00FF00"; //線の色
  context.lineTo(x, y); //描画するポイントの座標
  context.stroke(); //描画の実行
}
