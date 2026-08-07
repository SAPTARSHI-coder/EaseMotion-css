* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #081b34, #124c79);
    color: #fff;
}

.container {
    width: min(900px, 100%);
    text-align: center;
}

h1 {
    margin-bottom: 30px;
}

.gauge {
    --angle: calc((var(--speed) / 100) * 180deg - 90deg);

    width: 320px;
    margin: auto;
}

.gauge-face {
    position: relative;
    width: 320px;
    height: 160px;
    overflow: hidden;
    border-radius: 320px 320px 0 0;
    background: #1d2c42;
    border: 10px solid #ffffff15;
}

/* Colored speed zones */

.zone {
    position: absolute;
    inset: 0;
    border-radius: inherit;
}

.zone-green {
    background:
        conic-gradient(
            from 180deg,
            #2ecc71 0deg 60deg,
            transparent 60deg
        );
}

.zone-yellow {
    background:
        conic-gradient(
            from 180deg,
            transparent 60deg,
            #f1c40f 60deg 120deg,
            transparent 120deg
        );
}

.zone-red {
    background:
        conic-gradient(
            from 180deg,
            transparent 120deg,
            #e74c3c 120deg 180deg,
            transparent 180deg
        );
}

/* Tick marks */

.ticks {
    position: absolute;
    inset: 15px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            #ffffffaa 0deg 2deg,
            transparent 2deg 12deg
        );
    mask: radial-gradient(circle, transparent 62%, black 63%);
}

/* Needle */

.gauge-needle {
    position: absolute;
    left: 50%;
    bottom: 0;

    width: 4px;
    height: 46%;

    background: #ffffff;

    transform-origin: bottom center;
    transform: translateX(-50%) rotate(var(--angle));

    transition: transform .4s ease;

    border-radius: 4px;
}

/* Center hub */

.gauge-center {
    position: absolute;
    left: 50%;
    bottom: -10px;

    width: 22px;
    height: 22px;

    background: #ffffff;
    border-radius: 50%;

    transform: translateX(-50%);
}

.speed-text {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bold;
}

input[type="range"] {
    width: 320px;
    margin-top: 30px;
}

@media (max-width: 500px) {

    .gauge,
    .gauge-face,
    input[type="range"] {
        width: 260px;
    }

    .gauge-face {
        height: 130px;
    }

}

@media (prefers-reduced-motion: reduce) {

    .gauge-needle {
        transition: none;
    }

}