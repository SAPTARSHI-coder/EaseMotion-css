# Motion Accessibility Studio

### 1. What does this do?
This accessibility-first development utility lets developers test standard vs. safe animation intensity side-by-side, score animations against sensory motion safety benchmarks, and generate media queries (`prefers-reduced-motion`) dynamically.

### 2. How is it used?
Open `demo.html` directly in any web browser to access the dashboard:
- **Simulated Profiles**: Switch between Normal, Reduced, and No-Motion profiles to simulate user comfort preferences.
- **Dynamic Controllers**: Tune sliders to adjust travel distance, scale zoom shifts, rotation angles, and blur intensity factor.
- **Compare Mode**: Inspect standard framework animations against accessibility-safe versions side-by-side.
- **Safety Analyzer**: Review real-time safety scores (A to C rating) and list safety recommendations (e.g. slowing down speeds or disabling loops).
- **CSS generator**: Copy generated media queries to safe-guard layouts for vestibular-sensitive users.

### 3. Why is it useful?
It fits EaseMotion CSS's philosophy by making motion accessibility simple and developer-friendly. Accessibility should not be an afterthought; this dashboard makes visual scaling and vestibular comfort planning visual and straight-forward, enabling GSSoC developers to easily ship safer, fully compliant designs using the framework.
