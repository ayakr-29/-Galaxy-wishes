const button = 
document.getElementById("startBtn");
const stars = 
document.getElementById("stars");

const shootingStars =
document.getElementById("shooting-stars");

const message = [
   "never stop believing in yourself.",
   "A beautiful surprise is waiting for you.",
   "you are stronger than you think.",
   "Every star shines in its own time.",
   "keep going, your future is bright."
   ];
   button.addEventListener("click",
   function () {
      alert("welcome to Galaxy wishes!");
   document.getElementById("moon").style.opacity="1";
   document.querySelector(".container").classList.add("hide");
      stars.innerHTML="";
      for (let i = 0; i < 330; i++) {
         const star = 
      document.createElement("div");
      star.className ="star";
      const size = Math.random() * 3 * 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left =Math.random() *100 +"%";
      star.style.top = Math.random()* 100 + "%";
      star.style.animationDuration =(Math.random() * 4 + 4) +"s";
      star.addEventListener("click",
      function() {
         const randomMessage =
message[Math.floor(Math.random()*message.length)];
         document.getElementById("wishText").textContent = randomMessage;
         const box =
         document.getElementById("messageBox");
         console.log(box);
         box.classList.add("show")});
      star.style.opacity = "0";
         stars.appendChild(star);
         star.style.transition ="opacity 0.6s ease";
         setTimeout(() => {
            star.style.opacity = "1";
         }, i * 15);
      }
      });
      function createShootingStar(){
      const star = 
      document.createElement("div");
      star.classList.add("shooting-star"
      );
      
      star.style.left = Math.random() * 40 + "%";
      star.style.top = Math.random() * 40 + "%";
      
      document.body.appendChild(star);
      setTimeout(() => {
         star.remove();
         }, 2000);
      }
      let shootingInterval;
      button.addEventListener("click", function(){
      setInterval(createShootingStar,
    1200);
      });
    const closeBtn =
    document.getElementById("closeBtn");
    const messageBox =
    document.getElementById("messageBox");
    closeBtn.addEventListener("click",
    function() {
      messageBox.classList.remove("show");
    });

     
