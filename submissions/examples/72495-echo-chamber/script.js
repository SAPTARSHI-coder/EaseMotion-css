const chamber = document.getElementById("chamber");
const svg = document.getElementById("echoSvg");

const echoCount = document.getElementById("echoCount");
const clearButton = document.getElementById("clearButton");

const strengthInput = document.getElementById("echoStrength");
const strengthValue = document.getElementById("strengthValue");

const SVG_NS = "http://www.w3.org/2000/svg";

const WIDTH = 800;
const HEIGHT = 520;

const echoes = [];

let animationFrame = null;
let lastTimestamp = 0;
let echoId = 0;

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

/**
 * Update the displayed echo strength.
 */
function updateStrength() {
  const strength = Number(strengthInput.value);

  strengthValue.textContent = `${strength.toFixed(1)}×`;
}

strengthInput.addEventListener("input", updateStrength);

updateStrength();

/**
 * Convert pointer coordinates from the chamber into
 * the SVG coordinate system.
 */
function getPoint(event) {
  const rect = chamber.getBoundingClientRect();

  const x =
    ((event.clientX - rect.left) / rect.width) * WIDTH;

  const y =
    ((event.clientY - rect.top) / rect.height) * HEIGHT;

  return {
    x: Math.max(0, Math.min(WIDTH, x)),
    y: Math.max(0, Math.min(HEIGHT, y))
  };
}

/**
 * Calculate the maximum radius from an origin point
 * before it reaches any chamber boundary.
 */
function getBoundaryRadius(x, y) {
  return Math.max(
    Math.hypot(x, y),
    Math.hypot(WIDTH - x, y),
    Math.hypot(x, HEIGHT - y),
    Math.hypot(WIDTH - x, HEIGHT - y)
  );
}

/**
 * Create an SVG circle.
 */
function createCircle(className) {
  const circle = document.createElementNS(
    SVG_NS,
    "circle"
  );

  circle.classList.add("echo-ring", className);

  return circle;
}

/**
 * Create a new visual echo.
 */
function createEcho(x, y) {
  const strength = Number(strengthInput.value);

  const primary = createCircle("echo-primary");
  const secondary = createCircle("echo-secondary");

  const origin = document.createElementNS(
    SVG_NS,
    "circle"
  );

  origin.classList.add("echo-origin");

  primary.setAttribute("cx", x);
  primary.setAttribute("cy", y);
  primary.setAttribute("r", "0");

  secondary.setAttribute("cx", x);
  secondary.setAttribute("cy", y);
  secondary.setAttribute("r", "0");

  origin.setAttribute("cx", x);
  origin.setAttribute("cy", y);
  origin.setAttribute("r", "2.5");

  svg.appendChild(primary);
  svg.appendChild(secondary);
  svg.appendChild(origin);

  const echo = {
    id: ++echoId,

    x,
    y,

    primary,
    secondary,
    origin,

    radius: 0,

    maxRadius: getBoundaryRadius(x, y),

    speed: (130 + Math.random() * 70) * strength,

    opacity: 1,

    reflected: false,

    reflectionRadius: 0,

    reflectionOpacity: 0,

    secondaryDelay: 0.65
  };

  echoes.push(echo);

  updateCounter();

  if (!animationFrame) {
    animationFrame = requestAnimationFrame(animate);
  }
}

/**
 * Create the reflected echo once the primary ripple
 * reaches the chamber boundary.
 */
function reflectEcho(echo) {
  if (echo.reflected) {
    return;
  }

  echo.reflected = true;
  echo.reflectionRadius = echo.radius * 0.1;
  echo.reflectionOpacity = 0.75;

  /*
   * Reflection is represented visually by a second
   * ripple that expands from the boundary.
   */
}

/**
 * Remove an echo and its SVG nodes.
 */
function removeEcho(echo) {
  echo.primary.remove();
  echo.secondary.remove();
  echo.origin.remove();
}

/**
 * Update the counter.
 */
function updateCounter() {
  echoCount.textContent = echoes.length;
}

/**
 * Main requestAnimationFrame animation loop.
 */
function animate(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const delta =
    Math.min(timestamp - lastTimestamp, 50) / 1000;

  lastTimestamp = timestamp;

  for (let i = echoes.length - 1; i >= 0; i--) {
    const echo = echoes[i];

    echo.radius += echo.speed * delta;

    const progress =
      echo.radius / echo.maxRadius;

    echo.opacity = Math.max(
      0,
      1 - progress
    );

    /*
     * Primary expanding ripple.
     */
    echo.primary.setAttribute(
      "r",
      echo.radius
    );

    echo.primary.style.opacity =
      echo.opacity.toFixed(3);

    /*
     * Secondary ripple follows the primary.
     */
    const secondaryRadius =
      Math.max(
        0,
        echo.radius -
          echo.maxRadius *
            echo.secondaryDelay
      );

    echo.secondary.setAttribute(
      "r",
      secondaryRadius
    );

    echo.secondary.style.opacity =
      Math.max(
        0,
        echo.opacity * 0.45
      ).toFixed(3);

    /*
     * Fade the interaction origin.
     */
    echo.origin.style.opacity =
      Math.max(
        0,
        1 - progress * 2.5
      ).toFixed(3);

    /*
     * Boundary reflection.
     */
    if (
      progress >= 1 &&
      !echo.reflected
    ) {
      reflectEcho(echo);
    }

    if (echo.reflected) {
      echo.reflectionRadius +=
        echo.speed * delta * 0.72;

      echo.reflectionOpacity -=
        delta * 0.5;

      const reflectionProgress =
        echo.reflectionRadius /
        (echo.maxRadius * 0.8);

      echo.secondary.setAttribute(
        "r",
        echo.reflectionRadius
      );

      echo.secondary.style.opacity =
        Math.max(
          0,
          echo.reflectionOpacity *
            (1 - reflectionProgress)
        ).toFixed(3);
    }

    /*
     * Remove after the reflected echo has faded.
     */
    if (
      echo.reflected &&
      echo.reflectionOpacity <= 0
    ) {
      removeEcho(echo);
      echoes.splice(i, 1);
    }
  }

  updateCounter();

  if (echoes.length > 0) {
    animationFrame =
      requestAnimationFrame(animate);
  } else {
    animationFrame = null;
    lastTimestamp = 0;
  }
}

/**
 * Pointer interaction.
 */
chamber.addEventListener(
  "pointerdown",
  (event) => {
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    const point = getPoint(event);

    createEcho(
      point.x,
      point.y
    );
  }
);

/**
 * Keyboard interaction.
 *
 * Space creates an echo at the center of the chamber.
 */
chamber.addEventListener(
  "keydown",
  (event) => {
    if (event.code !== "Space") {
      return;
    }

    event.preventDefault();

    createEcho(
      WIDTH / 2,
      HEIGHT / 2
    );
  }
);

/**
 * Clear all echoes.
 */
clearButton.addEventListener(
  "click",
  () => {
    for (const echo of echoes) {
      removeEcho(echo);
    }

    echoes.length = 0;

    updateCounter();

    if (animationFrame) {
      cancelAnimationFrame(animationFrame);

      animationFrame = null;
    }

    lastTimestamp = 0;
  }
);

/**
 * Reduced motion:
 * keep interaction functional while shortening
 * the animation lifecycle.
 */
if (reducedMotion.matches) {
  strengthInput.value = "0.7";
  updateStrength();
}