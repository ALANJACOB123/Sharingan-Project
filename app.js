const tomoe = document.querySelectorAll(".tomoe-sharingan");
const mangekuo = document.querySelectorAll(".mangekuo-sharingan");
const header = document.querySelector(".hero-banner");

async function spinTheSharingan() {
  setTimeout(() => {
    tomoe.forEach((item) => (item.style.display = "none"));
    mangekuo.forEach((item) => (item.style.display = "block"));
  }, 3500);
  setTimeout(() => {
    var audio = new Audio("soundeffect.mp3");
    audio.play();
  },2500);
  setTimeout(() => {
    trappedInGenjutstu();
  }, 5500);
}

spinTheSharingan();

function trappedInGenjutstu() {
  document.body.innerHTML = `
  <div class="main-container">
  <div class="box">
  <p>You are now trapped in a Genjutsu. Click the below Button to escape</p>
  <button>Escape</button>
  </div>
  </div>
  `;
  const EscapeBtn = document.querySelector("button");
  EscapeBtn.addEventListener("click", () => {
    window.location.reload();
    tomoe.forEach((item) => (item.style.display = "block"));
    mangekuo.forEach((item) => (item.style.display = "none"));
  });
}
