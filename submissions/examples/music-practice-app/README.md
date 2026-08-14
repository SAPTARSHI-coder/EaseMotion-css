# Virtuoso — Music Practice App Landing Page

This is a premium, fully responsive marketing landing page for **Virtuoso**, a smart music practice application. It is built strictly using the **EaseMotion CSS** framework guidelines.

## Directory Structure
This examples contains the following files:
- `demo.html`: The HTML5 document containing all semantic landing page sections and mockup interaction scripts.
- `style.css`: Layout configurations, Google Fonts imports, responsive overrides, and custom SVG metronome pivot point styles.
- `README.md`: Documentation listing the classes and setup details.

## Features Included
1. **Interactive Hero Section**: Contains a mock sheet music notation visualizer and a metronome mockup. Clicking "Start Practice" starts the metronome swing and steps through the sheet music notes.
2. **Features Showcase**:
   - **Incremental Tempo Trainer**: Interactive tempo progress bar.
   - **Precision Audio Recording**: Click "Record" to watch active waveform animation bars simulate voice input.
   - **Progress Tracker**: Weekly practice streaks calendar dashboard.
3. **Supported Instruments**: Modern line-art grid representing supported instrument families (Piano, Violin, Guitar, Flute, Drums, Vocal).
4. **Teacher Mode**: Visual mockup representingMr. Jameson's studio feedback dashboard pushing customized piece homework assignments directly to students.
5. **Subscription Pricing Tiers**: 3 feature-packed cards utilizing Apprentice (Outlined), Virtuoso Pro (Glassmorphism), and Studio Link (Neumorphism / Soft UI) layout variants.
6. **Musician Reviews**: Testimonial card grid highlighting success stories.
7. **App Store CTA**: Large banner featuring high-performance gradient animations with Apple and Android badges.
8. **Footer Layout**: Social connections (GitHub, Twitter, YouTube), resources, product columns, and legal text.

## EaseMotion CSS Classes Used

### 1. Entrance & Scroll Animations
- `.ease-fade-in`: Applied to the page shell for a smooth entry transition.
- `.ease-slide-up`: Entrance transition for hero elements.
- `.ease-reveal`: Base class for triggering scroll reveal.
- `.ease-reveal-up`: Upward direction reveal modifier.
- `.ease-reveal-delay-1`, `.ease-reveal-delay-2`, `.ease-reveal-delay-3`: Staggered timing for entrance cards.

### 2. Loop & Interactive Animations
- `.ease-ping`: Recording green dot active pulse indicator.
- `.ease-pulse`: Pulsating animation for waveforms and indicators.
- `.ease-wave`: Swinging metronome needle animation (looping keyframe).
- `.ease-gradient-rotation`: Background color-shifting gradient loop for the CTA banner.
- `.ease-delay-100` to `.ease-delay-700`: Out-of-sync staggered delay classes applied to the audio waveform bars.

### 3. Hover Effects
- `.ease-btn-hover`: Lift and primary-glow effect on buttons.
- `.ease-card-hover`: TranslateY lift and border color transition on hover cards.
- `.ease-card-glow`: Subtle box shadow primary glow on cards.
- `.ease-hover-grow`: Interactive scale effect on pricing selection and instrument tags.
- `.ease-hover-shimmer`: Sweeping gradient shine on primary feature actions.
- `.ease-hover-underline`: Color-shift text underline on navbar links.
- `.ease-hover-bounce-text`: Playful bounce-text emphasis on the brand logo.

### 4. Layout, Grid, & Utility Classes
- `.ease-container`: Standardized maximum page width block.
- `.ease-grid`, `.ease-grid-auto`: High-performance mobile-first responsive grids.
- `.ease-flex`, `.ease-flex-col`, `.ease-flex-1`, `.ease-flex-wrap`: Dynamic flex alignments.
- `.ease-center`, `.ease-items-center`, `.ease-justify-between`, `.ease-justify-center`: Alignments.
- `.ease-gap-2`, `.ease-gap-3`, `.ease-gap-4`, `.ease-gap-6`: Standardized gap properties.
- Spacers & Padding: `.ease-padding-3`, `.ease-padding-12`, `.ease-px-2`, `.ease-px-4`, `.ease-py-1`, `.ease-py-2`, `.ease-mb-2`, `.ease-mb-4`, `.ease-mb-8`, `.ease-my-4`, `.ease-mt-2`, `.ease-mt-4`, `.ease-mt-6`, `.ease-mx-auto`.

### 5. Components
- Navbar: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item`.
- Buttons: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-danger`, `.ease-btn-sm`, `.ease-btn-lg`, `.ease-btn-icon`, `.ease-btn-pill`, `.ease-btn-block`.
- Cards: `.ease-card`, `.ease-card-header`, `.ease-card-body`, `.ease-card-footer`, `.ease-card-title`, `.ease-card-subtitle`, `.ease-card-outlined`, `.ease-card-glass`, `.ease-card-neumorphic`.
- Badges: `.ease-badge`.
- Footer: `.ease-footer`, `.ease-footer-grid`, `.ease-footer-col-title`, `.ease-footer-links`, `.ease-footer-social`, `.ease-footer-bottom`.

### 6. Typography & Styling
- `.ease-text-xs` to `.ease-text-4xl`: Standardized font sizing tokens.
- `.ease-font-regular`, `.ease-font-medium`, `.ease-font-semibold`, `.ease-font-bold`: Font weight tokens.
- `.ease-text-primary`, `.ease-text-secondary`, `.ease-text-success`, `.ease-text-danger`, `.ease-text-muted`, `.ease-text-white`, `.ease-text-center`.
- `.ease-bg-neutral`, `.ease-bg-primary`, `.ease-bg-secondary`, `.ease-bg-success`, `.ease-bg-danger`, `.ease-bg-surface`, `.ease-bg-primary-alpha`.
- `.ease-rounded-sm`, `.ease-rounded-md`, `.ease-rounded-lg`, `.ease-rounded-xl`, `.ease-rounded-full`: Corner radius controls.
- `.ease-shadow-xl`, `.ease-shadow-none`: Shadow tokens.
