const totalWorkInput = document.getElementById("totalWork");
const capacityInput = document.getElementById("capacity");
const delayInput = document.getElementById("delay");
const deadlineInput = document.getElementById("deadline");

const delayText = document.getElementById("delayText");
const daysLeftText = document.getElementById("daysLeftText");
const stressFill = document.getElementById("stressFill");
const dailyWorkText = document.getElementById("dailyWork");
const freeTimeText = document.getElementById("freeTime");

const ctx = document.getElementById("workChart");
let chart;

/* --------- HELPERS --------- */
function getDaysLeft(deadline) {
  if (!deadline) return 30;
  const today = new Date();
  const end = new Date(deadline);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 0);
}

/* --------- UPDATE --------- */
function update() {
  const totalWork = +totalWorkInput.value;
  const capacity = +capacityInput.value;
  const delay = +delayInput.value;

  delayText.textContent = `${delay} days`;

  const totalDays = getDaysLeft(deadlineInput.value);
  const daysLeft = Math.max(totalDays - delay, 0);

  daysLeftText.textContent = `Days left: ${daysLeft}`;

  const requiredPerDay =
    daysLeft > 0 ? totalWork / daysLeft : totalWork;

  dailyWorkText.textContent = `${requiredPerDay.toFixed(1)} hrs/day`;
  freeTimeText.textContent = `${Math.max(capacity - requiredPerDay, 0).toFixed(1)} hrs/day`;

  const stressRatio = requiredPerDay / capacity;
  const stressPercent = Math.min(stressRatio * 50, 100);
  stressFill.style.width = `${stressPercent}%`;

  if (stressRatio <= 1) stressFill.style.background = "lime";
  else if (stressRatio <= 1.5) stressFill.style.background = "orange";
  else stressFill.style.background = "red";

  updateChart(requiredPerDay, daysLeft);
}

/* --------- CHART --------- */
function updateChart(value, days) {
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from({ length: days }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        data: Array(days).fill(value),
        borderColor: "#ff8c00",
        backgroundColor: "rgba(255,140,0,0.15)",
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } }
    }
  });
}

/* --------- EVENTS --------- */
[totalWorkInput, capacityInput, delayInput, deadlineInput].forEach(el =>
  el.addEventListener("input", update)
);

/* --------- CURSOR GLOW --------- */
window.addEventListener("mousemove", e => {
  document.documentElement.style.setProperty("--x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--y", `${e.clientY}px`);
});

/* --------- ANIMATIONS --------- */
gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.15
});

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* INIT */
update();
