/* Swing-Hover Popover Component Styles */

:root {
    /* Animation timing & angle */
    --swing-duration: 0.5s;
    --swing-angle: 15deg;
    --swing-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Popover appearance */
    --popover-bg: #f3f4f6;
    --popover-text: #1f2937;
    --popover-accent: #6366f1;
    --popover-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    --popover-radius: 8px;
    --popover-padding: 0.75rem 1rem;
    --popover-font-size: 0.95rem;
}

/* ============================================
   Swing Animation Keyframes
   ============================================ */

@keyframes swing-in-top {
    0% {
        opacity: 0;
        transform: translateY(-10px) rotateZ(var(--swing-angle));
        transform-origin: center bottom;
    }
    50% {
        opacity: 1;
        transform: translateY(0) rotateZ(calc(var(--swing-angle) * -0.5));
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateZ(0deg);
    }
}

@keyframes swing-in-bottom {
    0% {
        opacity: 0;
        transform: translateY(10px) rotateZ(calc(var(--swing-angle) * -1));
        transform-origin: center top;
    }
    50% {
        opacity: 1;
        transform: translateY(0) rotateZ(calc(var(--swing-angle) * 0.5));
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateZ(0deg);
    }
}

@keyframes swing-in-left {
    0% {
        opacity: 0;
        transform: translateX(-15px) rotateZ(calc(var(--swing-angle) * -1));
        transform-origin: right center;
    }
    50% {
        opacity: 1;
        transform: translateX(0) rotateZ(calc(var(--swing-angle) * 0.5));
    }
    100% {
        opacity: 1;
        transform: translateX(0) rotateZ(0deg);
    }
}

@keyframes swing-in-right {
    0% {
        opacity: 0;
        transform: translateX(15px) rotateZ(var(--swing-angle));
        transform-origin: left center;
    }
    50% {
        opacity: 1;
        transform: translateX(0) rotateZ(calc(var(--swing-angle) * -0.5));
    }
    100% {
        opacity: 1;
        transform: translateX(0) rotateZ(0deg);
    }
}

@keyframes popover-fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* ============================================
   Base Popover Trigger Styles
   ============================================ */

.swing-popover {
    position: relative;
    display: inline-block;
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    border: 2px solid var(--popover-accent);
    border-radius: 8px;
    color: var(--popover-text);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
    outline: none;
}

.swing-popover:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.swing-popover:focus {
    outline: 2px solid var(--popover-accent);
    outline-offset: 2px;
}

.swing-popover:focus:not(:focus-visible) {
    outline: none;
}

.swing-popover:focus-visible {
    outline: 2px solid var(--popover-accent);
    outline-offset: 2px;
}

/* ============================================
   Popover Content Styles
   ============================================ */

.swing-popover::before {
    content: attr(data-popover);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--popover-bg);
    color: var(--popover-text);
    padding: var(--popover-padding);
    border-radius: var(--popover-radius);
    font-size: var(--popover-font-size);
    font-weight: 500;
    white-space: nowrap;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    box-shadow: var(--popover-shadow);
    border: 1px solid rgba(99, 102, 241, 0.2);
}

/* Arrow/pointer for popover */
.swing-popover::after {
    content: '';
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--popover-accent);
    opacity: 0;
    pointer-events: none;
    z-index: 1001;
}

/* ============================================
   Active State (Show Popover)
   ============================================ */

.swing-popover.active::before {
    opacity: 1;
    pointer-events: auto;
}

.swing-popover.active::after {
    opacity: 1;
}

/* ============================================
   Top Swing (Default)
   ============================================ */

.swing-popover::before,
.swing-popover.swing-from-top::before {
    bottom: calc(100% + 12px);
    top: auto;
}

.swing-popover::after,
.swing-popover.swing-from-top::after {
    bottom: calc(100% + 4px);
    top: auto;
    border-top: 6px solid var(--popover-accent);
    border-bottom: none;
}

.swing-popover.active::before,
.swing-popover.swing-from-top.active::before {
    animation: swing-in-top var(--swing-duration) var(--swing-easing);
}

.swing-popover.active::after,
.swing-popover.swing-from-top.active::after {
    animation: swing-in-top var(--swing-duration) var(--swing-easing);
}

/* ============================================
   Bottom Swing
   ============================================ */

.swing-popover.swing-from-bottom::before {
    bottom: auto;
    top: calc(100% + 12px);
}

.swing-popover.swing-from-bottom::after {
    bottom: auto;
    top: calc(100% + 4px);
    border-top: none;
    border-bottom: 6px solid var(--popover-accent);
}

.swing-popover.swing-from-bottom.active::before {
    animation: swing-in-bottom var(--swing-duration) var(--swing-easing);
}

.swing-popover.swing-from-bottom.active::after {
    animation: swing-in-bottom var(--swing-duration) var(--swing-easing);
}

/* ============================================
   Left Swing
   ============================================ */

.swing-popover.swing-from-left::before {
    bottom: auto;
    top: 50%;
    left: auto;
    right: calc(100% + 12px);
    transform: translateY(-50%);
    white-space: nowrap;
}

.swing-popover.swing-from-left::after {
    bottom: auto;
    top: 50%;
    left: auto;
    right: calc(100% + 4px);
    transform: translateY(-50%);
    border-left: 6px solid var(--popover-accent);
    border-right: none;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}

.swing-popover.swing-from-left.active::before {
    animation: swing-in-left var(--swing-duration) var(--swing-easing);
}

.swing-popover.swing-from-left.active::after {
    animation: swing-in-left var(--swing-duration) var(--swing-easing);
}

/* ============================================
   Right Swing
   ============================================ */

.swing-popover.swing-from-right::before {
    bottom: auto;
    top: 50%;
    left: calc(100% + 12px);
    right: auto;
    transform: translateY(-50%);
    white-space: nowrap;
}

.swing-popover.swing-from-right::after {
    bottom: auto;
    top: 50%;
    left: calc(100% + 4px);
    right: auto;
    transform: translateY(-50%);
    border-left: none;
    border-right: 6px solid var(--popover-accent);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}

.swing-popover.swing-from-right.active::before {
    animation: swing-in-right var(--swing-duration) var(--swing-easing);
}

.swing-popover.swing-from-right.active::after {
    animation: swing-in-right var(--swing-duration) var(--swing-easing);
}

/* ============================================
   Label Styles
   ============================================ */

.popover-label {
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
}

/* ============================================
   Page Layout & Demo Sections
   ============================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    color: #1f2937;
    line-height: 1.6;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.header {
    text-align: center;
    margin-bottom: 60px;
    padding-bottom: 40px;
    border-bottom: 2px solid #e5e7eb;
}

h1 {
    font-size: 2.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.subtitle {
    font-size: 1.15rem;
    color: #6b7280;
}

.demo-section {
    margin-bottom: 60px;
    padding: 40px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.demo-section:last-child {
    margin-bottom: 0;
}

h2 {
    font-size: 1.8rem;
    color: #111827;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e5e7eb;
}

h3 {
    font-size: 1.2rem;
    color: #374151;
    margin-bottom: 16px;
    margin-top: 24px;
}

.description {
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 24px;
}

.demo-grid {
    display: grid;
    gap: 24px;
    margin-bottom: 24px;
}

.demo-grid.basic {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.demo-grid.variation {
    grid-template-columns: 1fr;
    max-width: 300px;
}

.demo-grid.variation.side-by-side {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    gap: 40px;
}

.subsection {
    margin-bottom: 40px;
}

.subsection:last-child {
    margin-bottom: 0;
}

/* ============================================
   Portfolio Grid Styles
   ============================================ */

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.portfolio-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem !important;
    text-align: center;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.portfolio-card:hover {
    border-color: var(--popover-accent);
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.1);
}

.card-image {
    font-size: 3rem;
    margin-bottom: 12px;
}

.card-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
}

.card-desc {
    font-size: 0.9rem;
    color: #6b7280;
    margin: 0;
}

/* ============================================
   Service Grid Styles
   ============================================ */

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem !important;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border: 2px solid var(--popover-accent);
    border-radius: 12px;
    text-align: center;
}

.service-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--popover-accent);
    margin-bottom: 12px;
    opacity: 0.3;
}

.service-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
}

/* ============================================
   Artwork Grid Styles
   ============================================ */

.artwork-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.artwork-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 0 !important;
}

.artwork-placeholder {
    font-size: 3rem;
    color: var(--popover-accent);
    font-weight: bold;
    letter-spacing: 4px;
}

/* ============================================
   Skills Grid Styles
   ============================================ */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
    margin-top: 24px;
}

.skill-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem !important;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    text-align: center;
    font-size: 0.9rem;
    gap: 8px;
}

.skill-badge:hover {
    border-color: var(--popover-accent);
    background: linear-gradient(135deg, #f5f5f5 0%, #f0f0f0 100%);
}

.skill-icon {
    font-size: 1.8rem;
    display: block;
}

/* ============================================
   Theme Grid Styles
   ============================================ */

.theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.theme-example {
    padding: 24px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

.theme-example h3 {
    margin-top: 0;
    font-size: 1rem;
    color: #374151;
}

/* ============================================
   Code Section Styles
   ============================================ */

.code-section {
    margin-bottom: 24px;
}

.code-section h3 {
    font-size: 1.1rem;
    color: #111827;
    margin-top: 0;
    margin-bottom: 12px;
}

.code-block {
    background: #1f2937;
    color: #f3f4f6;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.85rem;
    line-height: 1.5;
}

.code-block pre {
    margin: 0;
    font-family: 'Monaco', 'Courier New', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
}

/* ============================================
   Customization Showcase
   ============================================ */

.customization-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.custom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

.custom-item h3 {
    margin: 0;
    font-size: 1rem;
    color: #374151;
}

/* ============================================
   Features List
   ============================================ */

.features-list {
    display: grid;
    gap: 16px;
    margin-top: 24px;
}

.feature-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
    border-left: 4px solid var(--popover-accent);
    border-radius: 6px;
}

.feature-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--popover-accent);
    color: white;
    border-radius: 50%;
    font-weight: bold;
    flex-shrink: 0;
}

.feature-item strong {
    display: block;
    color: #1f2937;
    margin-bottom: 4px;
}

.feature-item p {
    margin: 0;
    color: #6b7280;
    font-size: 0.95rem;
}

/* ============================================
   Support Table
   ============================================ */

.support-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 24px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.support-table thead {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
}

.support-table th,
.support-table td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
}

.support-table thead th {
    font-weight: 600;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.support-table tbody tr:hover {
    background: #f9fafb;
}

.support-table tbody tr:last-child td {
    border-bottom: none;
}

/* ============================================
   Footer
   ============================================ */

.footer {
    text-align: center;
    padding: 40px 20px;
    color: #6b7280;
    border-top: 2px solid #e5e7eb;
    margin-top: 60px;
}

.footer p {
    margin: 0;
}

.footer strong {
    color: #111827;
}

/* ============================================
   Responsive Design
   ============================================ */

@media (max-width: 768px) {
    .container {
        padding: 24px 16px;
    }

    h1 {
        font-size: 2rem;
    }

    .header {
        margin-bottom: 40px;
        padding-bottom: 24px;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 16px;
    }

    .demo-section {
        padding: 24px;
        margin-bottom: 40px;
    }

    .demo-grid.basic {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 16px;
    }

    .demo-grid.variation.side-by-side {
        grid-template-columns: 1fr;
        max-width: 100%;
        gap: 24px;
    }

    .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .artwork-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .theme-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .container {
        padding: 16px 12px;
    }

    h1 {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1rem;
    }

    .demo-section {
        padding: 16px;
        margin-bottom: 24px;
    }

    .demo-grid.basic {
        grid-template-columns: 1fr;
    }

    .demo-grid.variation.side-by-side {
        grid-template-columns: 1fr;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .artwork-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .theme-grid {
        grid-template-columns: 1fr;
    }

    .code-block {
        font-size: 0.75rem;
        padding: 12px;
    }

    .support-table th,
    .support-table td {
        padding: 12px 8px;
        font-size: 0.9rem;
    }

    .feature-item {
        gap: 12px;
        padding: 12px;
    }
}

/* ============================================
   Dark Mode Support (Optional)
   ============================================ */

@media (prefers-color-scheme: dark) {
    :root {
        --popover-bg: #1f2937;
        --popover-text: #f3f4f6;
    }

    body {
        background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
        color: #f3f4f6;
    }

    .demo-section {
        background: #111827;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .header {
        border-bottom-color: #374151;
    }

    h2 {
        color: #f3f4f6;
        border-bottom-color: #374151;
    }

    .subtitle,
    .description {
        color: #9ca3af;
    }

    .swing-popover {
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        color: #f3f4f6;
    }

    .portfolio-card,
    .service-card,
    .artwork-item,
    .skill-badge,
    .theme-example,
    .custom-item {
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        border-color: #374151;
        color: #f3f4f6;
    }

    .card-desc,
    .feature-item p,
    .description {
        color: #9ca3af;
    }

    .support-table {
        background: #0f172a;
    }

    .support-table tbody tr:hover {
        background: #1f2937;
    }

    .code-block {
        background: #0f172a;
        border: 1px solid #374151;
    }

    .feature-item {
        background: rgba(99, 102, 241, 0.1);
    }

    .footer {
        border-top-color: #374151;
        color: #9ca3af;
    }
}

/* ============================================
   Print Styles
   ============================================ */

@media print {
    body {
        background: white;
    }

    .container {
        max-width: 100%;
    }

    .demo-section {
        page-break-inside: avoid;
        box-shadow: none;
        border: 1px solid #e5e7eb;
    }

    .footer {
        display: none;
    }
}

/* ============================================
   Motion Preferences
   ============================================ */

@media (prefers-reduced-motion: reduce) {
    .swing-popover {
        transition: none;
    }

    .swing-popover::before,
    .swing-popover::after {
        animation: none !important;
        opacity: 1;
    }
}