/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").style.backgroundColor = "#b000b0";
document.querySelector("html")
        .addEventListener("click", function () 
        { alert("Ouch! Stop poking me!") });
 */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } 
  else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };


const myImage = document.querySelector("img");
const myHead = document.querySelector("h1");
const myP1 = document.querySelector("#p1");
const myP2 = document.querySelector("#p2");
const myP3 = document.querySelector("#p3");
//alert(myP1);
const myLi1 = document.querySelector("#li1");
const myLi2 = document.querySelector("#li2");
const myLi3 = document.querySelector("#li3");

myImage.onclick = () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-logo.png") 
     {
       myImage.setAttribute("src", "images/safari-logo.png");
       myHead.textContent = "Safari is nice";
       myP1.textContent = "Safari mostly used on mobile device";
       myLi1.textContent = "fast";
       myLi2.textContent = "secure";
       myLi3.textContent = "robust"
     } 
     else 
     {
       myImage.setAttribute("src", "images/firefox-logo.png");
       myHead.textContent = "Mozilla is cool";
       myP1.textContent = "At Mozilla, we’re a global community of";
       myLi1.textContent = "technologists";
       myLi2.textContent = "thinkers";
       myLi3.textContent = "builders";
     }
};
