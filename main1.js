const teddyTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' },
  { transform: 'rotate(-360deg) scale(1)' },
];

const teddyTumbling2 = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(-360deg) scale(0)' },
  { transform: 'rotate(360deg) scale(1)' },
];

const teddyTiming = {
  duration: 2290,
  iterations: 1,
  fill: 'forwards'
}

const teddy1 = document.querySelector("#teddy1");
const teddy2 = document.querySelector("#teddy2");
const teddy3 = document.querySelector("#teddy3");

const para = document.querySelector("p");
const btn = document.querySelector("#button");
const audi = document.querySelector("audio");

async function runAnimation() {
  try {
    para.style.visibility = "hidden";
    audi.play();
    await teddy1.animate(teddyTumbling, teddyTiming).finished;
    await teddy2.animate(teddyTumbling2, teddyTiming).finished;
    await teddy3.animate(teddyTumbling, teddyTiming).finished;
    para.style.visibility = "visible";
  }
  catch (error) {
    console.error(`Error occur with: ${error}`);
  }
}
btn.addEventListener("click", runAnimation);

const canvas = document.querySelector('canvas');
const width = canvas.width = window.innerWidth * 0.75;
const height = canvas.height = window.innerHeight/2;
const ctx = canvas.getContext('2d');

const startX = (width/2) - 120;
const startY = 100;
const peak = startY-30;
const land = startY;
const offset = 20;
let next = startX;

ctx.fillStyle = "rgb(0, 120, 0)";
ctx.beginPath();
ctx.moveTo(startX, startY);

for (let i=1; i<=6; i++) {
    next += offset;
    ctx.lineTo(next, peak);
    next += offset;
    ctx.lineTo(next, land);
}

ctx.fill();