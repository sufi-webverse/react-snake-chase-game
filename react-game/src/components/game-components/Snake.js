import { useEffect, useRef } from "react";

var ballX = 450;
var ballY = 300;
var ballRadius = 15;

var topWall = 100, bottomWall=100;
var leftWall = 100;
var rightWall = 1798;

let canvas = null;
let canvasRef = null;
let ctx = null;
function createCanvasContext() {
  canvas = canvasRef.current;
  ctx = canvas.getContext("2d");
}
function draw() {
  // clear the canvas for the next frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // tell canvas to start a new path

  // draw walls on left and right
  ctx.beginPath();
//   ctx.moveTo(leftWall, 0);
//   ctx.lineTo(leftWall, canvas.height);
//   ctx.moveTo(rightWall, 0);
//   ctx.lineTo(rightWall, canvas.height);
//   ctx.lineWidth = 2;
//   ctx.stroke();
  ctx.strokeRect(400, 100, 1000, 750)


  // draw a ball that the use can move with left/right arrow keys
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}
function keydownHandler(event) {
  const speed=20;
  const key = event.which;
  console.log(key);

  switch (key) {
    case 37:
      ballX -= speed;
      break;
    case 38:
      ballY -= speed;
      break;
    case 39:
      ballX += speed;
      break;
    case 40:
      ballY += speed;
      break;

    default:
      break;
  }

  draw();
}

function Snake(props) {
  canvasRef = useRef(null);

  useEffect(function () {
    createCanvasContext();
    draw();

    window.addEventListener("keydown", keydownHandler, true);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={props.width}
        height={props.height}
      ></canvas>
    </>
  );
}

export default Snake;
