const loader = document.querySelector(".loader-section");
const loaderBtn = document.querySelector(".loader-btn");
const music = document.querySelector("#music-btn");

loaderBtn.addEventListener("click", () => {
  loader.classList.add("hide");
  document.body.style.overflow = "";

  music.play();
});

function startCountdown(dateString, selector) {
  const [day, month, year] = dateString.split(".");
  const targetDate = new Date(`${year}-${month}-${day}T00:00:00`).getTime();
  const element = document.querySelector(selector);

  if (!element) return;

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      element.textContent = "Bayram boshlandi!";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const d = String(days).padStart(2, "0");
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    element.textContent = `${d} kun, ${h} soat, ${m} minut, ${s} sekund`;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

startCountdown("08.10.2026", "#countdown");
