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
    padding: 2rem;
    background: #0f172a;
    font-family: Arial, Helvetica, sans-serif;
}

.counter-group {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
}

.counter-badge {
    min-width: 42px;
    height: 42px;
    padding: 0 13px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    color: #fff;
    font-size: .9rem;
    font-weight: 700;
    cursor: default;
    transition: transform .25s ease, box-shadow .25s ease;
}

.counter-badge:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 18px rgba(0, 0, 0, .3);
}

.blue {
    background: #2563eb;
}

.green {
    background: #16a34a;
}

.red {
    background: #dc2626;
}

@media (max-width: 600px) {
    .counter-badge {
        min-width: 38px;
        height: 38px;
        padding: 0 11px;
        font-size: .82rem;
    }
}