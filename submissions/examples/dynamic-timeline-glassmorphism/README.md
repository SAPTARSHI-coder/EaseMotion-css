/* =========================================
   Part 2: Markers, Animations & Responsive
   ========================================= */

.timeline-marker {
    position: absolute;
    z-index: 3;

    top: 1.15rem;
    left: 50%;

    display: grid;

    width: 68px;
    height: 68px;

    place-items: center;

    border: 1px solid rgba(115, 215, 255, 0.45);
    border-radius: 50%;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0.05)
        );

    box-shadow:
        0 0 0 8px rgba(7, 17, 31, 0.8),
        0 0 28px rgba(115, 215, 255, 0.18);

    color: var(--timeline-accent);

    font-size: 0.72rem;
    font-weight: 900;

    transform: translateX(-50%);

    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    transition:
        transform 280ms ease,
        box-shadow 280ms ease,
        background-color 280ms ease;
}

.timeline-marker::after {
    position: absolute;

    inset: 6px;

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: inherit;

    content: "";
}

.timeline-item:hover .timeline-marker {
    box-shadow:
        0 0 0 8px rgba(7, 17, 31, 0.8),
        0 0 35px rgba(115, 215, 255, 0.4);

    transform: translateX(-50%) scale(1.08);
}

.timeline-item--complete .timeline-marker {
    border-color: rgba(124, 240, 187, 0.5);
    color: var(--timeline-success);
}

.timeline-item--active .timeline-marker {
    border-color: rgba(255, 211, 106, 0.6);
    color: var(--timeline-warning);

    animation: timeline-pulse 2.2s ease-in-out infinite;
}

@keyframes timeline-pulse {
    0%,
    100% {
        box-shadow:
            0 0 0 8px rgba(7, 17, 31, 0.8),
            0 0 22px rgba(255, 211, 106, 0.16);
    }

    50% {
        box-shadow:
            0 0 0 8px rgba(7, 17, 31, 0.8),
            0 0 36px rgba(255, 211, 106, 0.38);
    }
}

.timeline-item {
    animation: timeline-enter 600ms ease both;
}

.timeline-item:nth-child(1) {
    animation-delay: 80ms;
}

.timeline-item:nth-child(2) {
    animation-delay: 160ms;
}

.timeline-item:nth-child(3) {
    animation-delay: 240ms;
}

.timeline-item:nth-child(4) {
    animation-delay: 320ms;
}

@keyframes timeline-enter {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.timeline-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;

    margin-top: 3rem;
}

.timeline-footer span {
    padding: 0.45rem 0.7rem;

    color: var(--timeline-muted);

    border: 1px solid var(--timeline-border);
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.04);

    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.08em;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Tablet */

@media (max-width: 760px) {
    .timeline-page {
        padding: 3rem 1rem;
    }

    .timeline-header {
        margin-bottom: 3rem;
    }

    .timeline {
        gap: 1.5rem;
        padding-left: 1rem;
    }

    .timeline::before {
        left: 30px;
        transform: none;
    }

    .timeline-item {
        display: block;
        min-height: 0;
        padding-left: 65px;
    }

    .timeline-item:nth-child(even) .timeline-card,
    .timeline-item:nth-child(even) .timeline-marker {
        grid-column: auto;
        grid-row: auto;
    }

    .timeline-marker {
        top: 1rem;
        left: 30px;

        width: 60px;
        height: 60px;

        transform: translateX(-50%);
    }

    .timeline-item:hover .timeline-marker {
        transform: translateX(-50%) scale(1.06);
    }

    .timeline-card {
        width: 100%;
    }

    .timeline-card::before,
    .timeline-item:nth-child(even) .timeline-card::before {
        left: -9px;
        right: auto;

        border-right: 9px solid var(--timeline-border);
        border-left: 0;
    }
}

/* Mobile */

@media (max-width: 480px) {
    .timeline-page {
        padding: 2rem 0.75rem;
    }

    .timeline-header {
        margin-bottom: 2.5rem;
    }

    .timeline-header h1 {
        font-size: clamp(2rem, 12vw, 3rem);
    }

    .timeline-header p {
        font-size: 0.82rem;
    }

    .timeline {
        padding-left: 0.35rem;
    }

    .timeline::before {
        left: 23px;
    }

    .timeline-item {
        padding-left: 48px;
    }

    .timeline-marker {
        left: 23px;

        width: 46px;
        height: 46px;

        font-size: 0.62rem;
    }

    .timeline-marker::after {
        inset: 4px;
    }

    .timeline-card {
        padding: 1.1rem;

        border-radius: 1rem;
    }

    .timeline-card__top {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
    }

    .timeline-card h2 {
        margin-top: 0.8rem;
    }

    .timeline-card p {
        font-size: 0.8rem;
        line-height: 1.6;
    }

    .timeline-footer {
        margin-top: 2.25rem;
    }
}

/* Reduced motion accessibility */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}