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
    background: linear-gradient(135deg, #081b34, #134a78);
    color: #ffffff;
}

.container {
    width: min(900px, 100%);
    text-align: center;
}

h1 {
    font-size: 2.8rem;
    margin-bottom: 12px;
}

.subtitle {
    color: #d6e8ff;
    margin-bottom: 40px;
}

.demo-grid {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
}

.notification-pill {
    min-width: 48px;
    height: 48px;
    padding: 0 18px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;

    background: linear-gradient(135deg, #ff4b5c, #ff7b54);
    color: #ffffff;

    font-size: 1rem;
    font-weight: 700;

    box-shadow: 0 10px 22px rgba(255, 75, 92, 0.35);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        filter 0.3s ease;
}

.notification-pill:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 16px 30px rgba(255, 75, 92, 0.45);
    filter: brightness(1.08);
}

.notification-pill:active {
    transform: scale(0.96);
}

@media (max-width: 600px) {

    h1 {
        font-size: 2.2rem;
    }

    .demo-grid {
        gap: 16px;
    }

    .notification-pill {
        min-width: 42px;
        height: 42px;
        padding: 0 16px;
        font-size: 0.9rem;
    }

}

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }

    .notification-pill:hover,
    .notification-pill:active {
        transform: none;
        filter: none;
    }

}