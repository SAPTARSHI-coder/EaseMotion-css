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

.divider-demo {
    width: min(650px, 100%);
    padding: 24px;
    border: 1px solid #334155;
    border-radius: 14px;
    background: #111827;
}

.divider {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 24px 0;
    color: #94a3b8;
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .08em;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #334155;
    transition: background .3s ease, transform .3s ease;
}

.divider:hover::before,
.divider:hover::after {
    background: #60a5fa;
    transform: scaleY(2);
}

.divider.solid::before,
.divider.solid::after {
    background: #475569;
}

.divider.dashed::before,
.divider.dashed::after {
    height: 0;
    border-top: 1px dashed #475569;
    background: transparent;
}

.divider span {
    white-space: nowrap;
    transition: color .3s ease;
}

.divider:hover span {
    color: #f8fafc;
}

@media (max-width: 600px) {
    .divider-demo {
        padding: 18px;
    }

    .divider {
        gap: 10px;
        font-size: .65rem;
    }
}