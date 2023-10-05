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
  duration: 2500,
  iterations: 1,
  fill: 'forwards'
}

const teddy1 = document.querySelector("#teddy1");
const teddy2 = document.querySelector("#teddy2");
const teddy3 = document.querySelector("#teddy3");

const para = document.querySelector("p");
const btn = document.querySelector("#button");

async function runAnimation() {
  try {
    para.style.visibility = "hidden";
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
