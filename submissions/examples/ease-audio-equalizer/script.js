const container = document.getElementById("equalizer");
const button = document.getElementById("toggleBtn");
const theme = document.getElementById("theme");

const BAR_COUNT = 20;
let playing = true;

const bars = [];

for (let i = 0; i < BAR_COUNT; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";

    const peak = document.createElement("div");
    peak.className = "peak";

    const bar = document.createElement("div");
    bar.className = "bar";

    wrapper.appendChild(peak);
    wrapper.appendChild(bar);

    container.appendChild(wrapper);

    bars.push({
        bar,
        peak,
        peakHeight: 0
    });
}

function animate() {

    if (playing) {

        bars.forEach(item => {

            const value = 30 + Math.random() * 170;

            item.bar.style.height = value + "px";

            if (value > item.peakHeight)
                item.peakHeight = value;
            else
                item.peakHeight -= 1.5;

            if (item.peakHeight < 8)
                item.peakHeight = 8;

            item.peak.style.transform =
                `translateY(${190 - item.peakHeight}px)`;

        });

    }

    requestAnimationFrame(animate);
}

animate();

button.addEventListener("click", () => {

    playing = !playing;

    button.textContent = playing ? "Pause" : "Play";

});

theme.addEventListener("change", e => {

    document.body.classList.remove("neon", "cyber", "sunset");

    document.body.classList.add(e.target.value);

});

document.body.classList.add("neon");