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

.timeline {
    position: relative;
    width: min(650px, 100%);
    padding: 10px 0;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 14px;
    width: 2px;
    background: #334155;
}

.timeline-item {
    position: relative;
    display: flex;
    gap: 20px;
    padding-bottom: 28px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-marker {
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border: 4px solid #0f172a;
    border-radius: 50%;
    background: #60a5fa;
    box-shadow: 0 0 0 2px #334155;
    transition: transform .25s ease;
}

.timeline-item:hover .timeline-marker {
    transform: scale(1.15);
}

.timeline-content {
    flex: 1;
    padding: 16px 18px;
    border: 1px solid #334155;
    border-radius: 12px;
    background: #111827;
    color: #f8fafc;
    transition:
        transform .25s ease,
        border-color .25s ease;
}

.timeline-item:hover .timeline-content {
    transform: translateX(4px);
    border-color: #475569;
}

.timeline-date {
    display: inline-block;
    margin-bottom: 6px;
    color: #60a5fa;
    font-size: .75rem;
    font-weight: 700;
}

.timeline-content h3 {
    margin-bottom: 7px;
    font-size: .95rem;
}

.timeline-content p {
    color: #94a3b8;
    font-size: .82rem;
    line-height: 1.6;
}

@media (max-width: 600px) {
    body {
        padding: 1.25rem;
    }

    .timeline-item {
        gap: 14px;
        padding-bottom: 20px;
    }

    .timeline::before {
        left: 11px;
    }

    .timeline-marker {
        width: 24px;
        height: 24px;
    }

    .timeline-content {
        padding: 13px 14px;
    }

    .timeline-content h3 {
        font-size: .88rem;
    }

    .timeline-content p {
        font-size: .76rem;
    }
}