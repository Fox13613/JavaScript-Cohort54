const cat = document.getElementById("cat");
cat.style.left = "0px";

let walkTimer;
let originalSrc = cat.src;
let isDancing = false;

function catWalk() {
  if (isDancing) return;

  let currentLeft = parseInt(cat.style.left, 10);
  let newLeft = currentLeft + 10;

  if (newLeft > window.innerWidth - cat.width) {
    newLeft = 0;
  }

  cat.style.left = newLeft + "px";

  
  let middle = Math.floor(window.innerWidth / 2 - cat.width / 2);
  if (currentLeft < middle && newLeft >= middle) {
    makeCatDance();
  }
}

function makeCatDance() {
  isDancing = true;
  cat.src =
    "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

  setTimeout(() => {
    cat.src = originalSrc;
    isDancing = false;
  }, 5000);
}

window.onload = () => {
  walkTimer = setInterval(catWalk, 50);
};
