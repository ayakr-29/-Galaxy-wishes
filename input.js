  "use strict";

const button = document.getElementById("startBtn");
const stars = document.getElementById("stars");
const shootingStars = document.getElementById("shooting-stars");
const moon = document.getElementById("moon");
const container = document.getElementById("welcome");
const messageBox = document.getElementById("messageBox");
const wishText = document.getElementById("wishText");
const closeBtn = document.getElementById("closeBtn");

const messages = [
  "Never stop believing in yourself.",
  "A beautiful surprise is waiting for you.",
  "You are stronger than you think.",
  "Every star shines in its own time.",
  "Keep going, your future is bright."
];

let started = false;
let shootingInterval = null;

function createStar() {
  const star = document.createElement("div");

  star.className = "star";

  const size = Math.random() * 2.5 + 1;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.animationDuration =
    `${Math.random() * 3 + 4}s`;

  star.addEventListener("click", showWish);

  return star;
}

function createShootingStar() {
  if (!shootingStars) return;

  const star = document.createElement("div");

  star.className = "shooting-star";

  star.style.left = `${Math.random() * 60 + 35}%`;
  star.style.top = `${Math.random() * 35}%`;

  shootingStars.appendChild(star);

  window.setTimeout(() => {
    if (star && star.parentNode) {
      star.parentNode.removeChild(star);
    }
  }, 2600);
}

function showWish() {
  const randomIndex =
    Math.floor(Math.random() * messages.length);

  wishText.textContent = messages[randomIndex];

  messageBox.classList.add("show");
  messageBox.setAttribute("aria-hidden", "false");
}

function closeWish() {
  messageBox.classList.remove("show");
  messageBox.setAttribute("aria-hidden", "true");
}

function startGalaxy() {
  if (started) return;

  started = true;

  container.classList.add("hide");

  moon.style.opacity = "1";

  stars.innerHTML = "";

  /*
    100 stars instead of 200.
    This keeps the animation much lighter
    on phones, especially iPhone/Safari.
  */
  const numberOfStars = 100;

  const fragment =
    document.createDocumentFragment();

  for (let i = 0; i < numberOfStars; i++) {
    fragment.appendChild(createStar());
  }

  stars.appendChild(fragment);

  if (!shootingInterval) {
    createShootingStar();

    shootingInterval =
      window.setInterval(
        createShootingStar,
        2500
      );
  }
}

if (button) {
  button.addEventListener(
    "click",
    startGalaxy
  );
}

if (closeBtn) {
  closeBtn.addEventListener(
    "click",
    closeWish
  );
}

messageBox.addEventListener(
  "click",
  function (event) {
    if (event.target === messageBox) {
      closeWish();
    }
  }
);
