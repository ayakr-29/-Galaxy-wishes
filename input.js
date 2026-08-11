const bouton =
document.getElementById("startBtn");
étoiles constantes =
document.getElementById("stars");

const shootingStars =
document.getElementById("étoiles filantes");

const message = [
«Ne cesse jamais de croire en toi.»
Une belle surprise vous attend.
« Tu es plus fort que tu ne le penses. »
« Chaque étoile brille en son temps. »
«Continue comme ça, ton avenir est prometteur.»
];
bouton.ajouterÉcouteurÉvénement("clic",
fonction () {
alerte("Bienvenue dans Galaxy Wishes !");
document.getElementById("moon").style.opacity="1";
document.querySelector(".container").classList.add("hide");
étoiles.innerHTML="";
pour (soit i = 0 ; i < 330 ; i++) {
const étoile =
document.createElement("div");
étoile.className="étoile";
const taille = Math.random() * 3 * 1;
étoile.style.largeur = taille + "px";
étoile.style.hauteur = taille + "px";
étoile.style.gauche = Math.random() * 100 + "%";
étoile.style.top = Math.random()* 100 + "%";
star.style.animationDuration =(Math.random() * 4 + 4) +"s";
étoile.ajouterÉcouteurÉvénement("clic",
fonction() {
const message aléatoire =
message[Math.floor(Math.random()*message.length)];
document.getElementById("wishText").textContent = randomMessage;
const box =
document.getElementById("messageBox");
console.log(box);
box.classList.add("show")});
étoile.style.opacité = "0";
étoiles.appendChild(étoile);
star.style.transition ="opacité 0.6s ease";
setTimeout(() => {
étoile.style.opacité = "1";
}, i * 15);
}
});
fonction créerÉtoileFilante(){
const étoile =
document.createElement("div");
star.classList.add("étoile filante"
);
étoile.style.gauche = Math.random() * 40 + "%";
étoile.style.top = Math.random() * 40 + "%";
document.body.appendChild(étoile);
setTimeout(() => {
étoile.supprimer();
}, 2000);
}
laisser shootingInterval ;
bouton.addEventListener("click", function(){
définirIntervalle(créerÉtoileFilante,
1200);
});
const closeBtn =
document.getElementById("closeBtn");
const messageBox =
document.getElementById("messageBox");
closeBtn.addEventListener("click",
fonction() {
messageBox.classList.remove("show");
});
  
