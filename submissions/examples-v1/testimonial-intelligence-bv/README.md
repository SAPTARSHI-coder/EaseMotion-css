# Enterprise Testimonial Intelligence Platform

## What does this do?

An ultra-premium, interactive 3D testimonial carousel engineered to showcase high-fidelity design aesthetics and flawless user experiences on enterprise platforms. It features smooth hardware-accelerated 3D transforms, dual-theme (Light/Dark) ambient orchestration via CSS variables, a 5-second automatic progression cycle, and smart cursor tracking that pauses playback upon interaction or hover to prevent visual disruption.

## How is it used?

Integrate the separate `style.css` stylesheet into your main document and implement the structured semantic layout inside your application wrapper:

```html
<div class="carousel-wrapper">
    <button class="nav-arrow left-arrow" id="prev-btn">...</button>
    <button class="nav-arrow right-arrow" id="next-btn">...</button>

    <div class="carousel-container" id="carousel-container">
        <div class="testimonial-card active" data-index="0">
            <div class="card-glow"></div>
            <div class="quote-mark">"</div>
            <p class="quote-text">Enterprise telemetry or outcome metric goes here...</p>
            <div class="client-info">
                <div class="avatar" style="background-image: url('...');"></div>
                <div class="meta">
                    <h4>Executive Name</h4>
                    <span>Title, Company</span>
                </div>
            </div>
        </div>
    </div>
</div>