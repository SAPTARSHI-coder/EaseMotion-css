const propertySelect = document.getElementById("propertySelect");
const durationSlider = document.getElementById("duration");
const durationValue = document.getElementById("durationValue");
const easingSelect = document.getElementById("easing");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const gpuBox = document.querySelector(".gpu-box");
const layoutBox = document.querySelector(".layout-box");

const cost = document.getElementById("cost");
const recommendation = document.getElementById("recommendation");
const infoText = document.getElementById("infoText");

const stages = {
    style: document.getElementById("styleStage"),
    layout: document.getElementById("layoutStage"),
    paint: document.getElementById("paintStage"),
    composite: document.getElementById("compositeStage")
};

function clearStages() {
    Object.values(stages).forEach(stage =>
        stage.classList.remove("active")
    );
}

function updatePipeline(property) {

    clearStages();

    if (property === "transform" || property === "opacity") {

        stages.composite.classList.add("active");

        cost.textContent = "Low";
        recommendation.textContent =
            "Excellent choice. GPU compositing avoids layout and paint.";

        infoText.textContent =
            "Transform and opacity animations only trigger the composite stage, making them smoother.";

    } else {

        stages.style.classList.add("active");
        stages.layout.classList.add("active");
        stages.paint.classList.add("active");
        stages.composite.classList.add("active");

        cost.textContent = "High";
        recommendation.textContent =
            "Avoid animating layout properties whenever possible.";

        infoText.textContent =
            "Width, height, top and left require style recalculation, layout, paint and compositing.";

    }
}

function updateAnimation() {

    const property = propertySelect.value;
    const duration = durationSlider.value + "s";
    const easing = easingSelect.value;

    durationValue.textContent = duration;

    document.documentElement.style.setProperty("--duration", duration);
    document.documentElement.style.setProperty("--easing", easing);

    gpuBox.style.animation = "none";
    layoutBox.style.animation = "none";

    void gpuBox.offsetWidth;
    void layoutBox.offsetWidth;

    if (property === "transform") {

        gpuBox.style.animation =
            `moveTransform ${duration} ${easing} infinite alternate`;

        layoutBox.style.animation =
            `moveLayout ${duration} ${easing} infinite alternate`;

    }

    else if (property === "opacity") {

        gpuBox.animate(
            [
                { opacity: 1 },
                { opacity: 0.2 }
            ],
            {
                duration: durationSlider.value * 1000,
                iterations: Infinity,
                direction: "alternate",
                easing: easing
            }
        );

        layoutBox.style.animation =
            `moveLayout ${duration} ${easing} infinite alternate`;

    }

    else {

        gpuBox.style.animation =
            `moveTransform ${duration} ${easing} infinite alternate`;

        layoutBox.style.animation =
            `moveLayout ${duration} ${easing} infinite alternate`;

    }

    updatePipeline(property);
}

propertySelect.addEventListener("change", updateAnimation);

durationSlider.addEventListener("input", updateAnimation);

easingSelect.addEventListener("change", updateAnimation);

playBtn.addEventListener("click", () => {

    gpuBox.style.animationPlayState = "running";
    layoutBox.style.animationPlayState = "running";

});

pauseBtn.addEventListener("click", () => {

    gpuBox.style.animationPlayState = "paused";
    layoutBox.style.animationPlayState = "paused";

});

updateAnimation();
