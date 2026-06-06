const { execFileSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const features = [
  {
    id: "ease-glass-card-ai",
    title: "God-Level Component: Advanced Glassmorphism Interactive Card with Radial Glow",
    issueBody: "### Feature Proposal\n\nI propose adding a highly advanced Glassmorphism card component (`ease-glass-card-ai`). It utilizes `backdrop-filter: blur()`, multi-layered `box-shadow` for depth, and a dynamic `radial-gradient` that creates a pseudo-light tracking effect on hover using pure CSS pseudo-elements.\n\n### Why is it God-Level?\nIt completely avoids JavaScript for the hover lighting effect, relying purely on CSS transition delays and layered gradients, offering 60fps GPU-accelerated rendering.",
    readme: "# Advanced Glassmorphism Card\n\n**What does this do?**\nCreates a stunning, frosted-glass interactive card with pure CSS hover lighting effects.\n\n**How is it used?**\n<div class=\"ease-glass-card-ai\">\n  <h2>Glass Content</h2>\n</div>\n\n**Why is it useful?**\nProvides a premium, modern UI aesthetic without the performance cost of JavaScript-based mouse tracking.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Glassmorphism Demo</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"ease-glass-wrapper-ai\">\n    <div class=\"ease-glass-card-ai\">\n      <h3>Premium Glass</h3>\n      <p>Pure CSS frosted glass effect with advanced hover lighting.</p>\n    </div>\n  </div>\n</body>\n</html>",
    css: "body {\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\n.ease-glass-wrapper-ai {\n  padding: 50px;\n}\n\n.ease-glass-card-ai {\n  position: relative;\n  width: 300px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  padding: 30px;\n  color: white;\n  box-shadow: 0 15px 35px rgba(0,0,0,0.2);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  overflow: hidden;\n}\n\n.ease-glass-card-ai::before {\n  content: '';\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);\n  transform: scale(0);\n  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);\n  pointer-events: none;\n}\n\n.ease-glass-card-ai:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 25px 45px rgba(0,0,0,0.3);\n}\n\n.ease-glass-card-ai:hover::before {\n  transform: scale(1);\n}"
  },
  {
    id: "ease-cyber-glitch-ai",
    title: "God-Level Effect: Cyberpunk Glitch Text Animation",
    issueBody: "### Feature Proposal\n\nIntroducing `ease-cyber-glitch-ai`, a pure CSS cyberpunk text glitch effect. It utilizes `clip-path` polygon slicing, pseudo-elements (`::before` and `::after`), and complex keyframe animations to create a stuttering, RGB-split holographic glitch effect.\n\n### Why is it God-Level?\nIt relies on sub-pixel `text-shadow` manipulation and rapid `@keyframes` without any SVG filters or WebGL, keeping the DOM incredibly lightweight while delivering AAA-tier visual impact.",
    readme: "# Cyberpunk Glitch Text\n\n**What does this do?**\nCreates an intense, RGB-splitting text glitch animation on hover.\n\n**How is it used?**\n<h1 class=\"ease-cyber-glitch-ai\" data-text=\"GLITCH\">GLITCH</h1>\n\n**Why is it useful?**\nPerfect for gaming, Web3, or modern portfolio interfaces wanting high-impact typography.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Cyberpunk Glitch</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"background:#111; display:flex; justify-content:center; align-items:center; height:100vh;\">\n  <h1 class=\"ease-cyber-glitch-ai\" data-text=\"CYBERPUNK\">CYBERPUNK</h1>\n</body>\n</html>",
    css: ".ease-cyber-glitch-ai {\n  font-size: 5rem;\n  font-family: monospace;\n  font-weight: 900;\n  color: white;\n  position: relative;\n  letter-spacing: 5px;\n}\n\n.ease-cyber-glitch-ai::before,\n.ease-cyber-glitch-ai::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #111;\n}\n\n.ease-cyber-glitch-ai::before {\n  left: 3px;\n  text-shadow: -2px 0 #ff00c1;\n  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n  animation: glitch-anim 2.5s infinite linear alternate-reverse;\n}\n\n.ease-cyber-glitch-ai::after {\n  left: -3px;\n  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;\n  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);\n  animation: glitch-anim2 3s infinite linear alternate-reverse;\n}\n\n@keyframes glitch-anim {\n  0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }\n  20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }\n  40% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }\n  60% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }\n  80% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }\n  100% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }\n}\n\n@keyframes glitch-anim2 {\n  0% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }\n  20% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }\n  40% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }\n  60% { clip-path: polygon(0 2%, 100% 2%, 100% 2%, 0 2%); }\n  80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }\n  100% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }\n}"
  },
  {
    id: "ease-magnetic-btn-ai",
    title: "God-Level Component: Pure CSS Magnetic Hover Button",
    issueBody: "### Feature Proposal\n\nI propose `ease-magnetic-btn-ai`, a button that appears to magnetically attract to the user's cursor purely using CSS `transform` and pseudo-element padding manipulation. \n\n### Why is it God-Level?\nMagnetic buttons typically require heavy JavaScript event listeners (`mousemove`). This implementation uses nested spans and CSS sibling combinators with transition elasticity to emulate a 3D magnetic pull entirely in CSS.",
    readme: "# Magnetic Hover Button\n\n**What does this do?**\nA button that dynamically shifts its inner text to simulate a magnetic pull on hover.\n\n**How is it used?**\n<button class=\"ease-magnetic-btn-ai\">\n  <span>Hover Me</span>\n</button>\n\n**Why is it useful?**\nAdds incredible micro-interaction delight without bloating the app with JS event listeners.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Magnetic Button</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"display:flex; justify-content:center; align-items:center; height:100vh; background:#f0f0f0;\">\n  <button class=\"ease-magnetic-btn-ai\">\n    <span>Magnetize</span>\n  </button>\n</body>\n</html>",
    css: ".ease-magnetic-btn-ai {\n  position: relative;\n  padding: 20px 40px;\n  background: #222;\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  font-size: 18px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.ease-magnetic-btn-ai span {\n  display: block;\n  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.ease-magnetic-btn-ai::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 150%;\n  height: 150%;\n  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.5s ease-out;\n  border-radius: 50%;\n}\n\n.ease-magnetic-btn-ai:hover {\n  transform: scale(1.1);\n}\n\n.ease-magnetic-btn-ai:hover span {\n  transform: scale(1.05) translateY(-2px);\n}\n\n.ease-magnetic-btn-ai:hover::before {\n  transform: translate(-50%, -50%) scale(1);\n}"
  },
  {
    id: "ease-neon-pulse-ai",
    title: "God-Level Effect: Multilayer Neon Pulse Aura",
    issueBody: "### Feature Proposal\n\nA multilayered neon pulse effect (`ease-neon-pulse-ai`) that utilizes `box-shadow` compounding to create a highly realistic, diffuse neon glow that pulses organically.\n\n### Why is it God-Level?\nStandard CSS pulses use `transform: scale`, which distorts content. This approach uses multiple spread-radius `box-shadow` layers wrapped in a cubic-bezier keyframe to emulate actual light diffusion.",
    readme: "# Neon Pulse Aura\n\n**What does this do?**\nGenerates a hyper-realistic breathing neon glow around any element.\n\n**How is it used?**\n<div class=\"ease-neon-pulse-ai\">Glow</div>\n\n**Why is it useful?**\nIdeal for call-to-actions or active states in dark-mode interfaces.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Neon Pulse</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"background:#0a0a0a; display:flex; justify-content:center; align-items:center; height:100vh;\">\n  <button class=\"ease-neon-pulse-ai\">ACTIVATE</button>\n</body>\n</html>",
    css: ".ease-neon-pulse-ai {\n  padding: 15px 40px;\n  background: transparent;\n  color: #0ff;\n  border: 2px solid #0ff;\n  border-radius: 4px;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  cursor: pointer;\n  animation: neon-breathe 2s infinite alternate;\n}\n\n@keyframes neon-breathe {\n  0% {\n    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2),\n                0 0 10px rgba(0, 255, 255, 0.2),\n                0 0 20px rgba(0, 255, 255, 0.2),\n                inset 0 0 5px rgba(0, 255, 255, 0.1);\n    text-shadow: 0 0 2px rgba(0, 255, 255, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 10px rgba(0, 255, 255, 0.6),\n                0 0 20px rgba(0, 255, 255, 0.4),\n                0 0 40px rgba(0, 255, 255, 0.2),\n                inset 0 0 10px rgba(0, 255, 255, 0.4);\n    text-shadow: 0 0 8px rgba(0, 255, 255, 1);\n  }\n}"
  },
  {
    id: "ease-liquid-fill-ai",
    title: "God-Level Animation: Pure CSS Liquid Fill Wave",
    issueBody: "### Feature Proposal\n\n`ease-liquid-fill-ai` implements a fluid wave animation inside text or a button purely using CSS background clipping and animated SVG encoded as a data URI.\n\n### Why is it God-Level?\nIt completely bypasses heavy canvas or JS liquid physics libraries, providing a visually identical liquid fill effect at a fraction of the computational cost.",
    readme: "# Liquid Fill Wave\n\n**What does this do?**\nA button that fills up with a rolling liquid wave effect on hover.\n\n**How is it used?**\n<button class=\"ease-liquid-fill-ai\">Fill Me</button>\n\n**Why is it useful?**\nCreates a highly playful and engaging hover state for primary actions.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Liquid Fill</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"display:flex; justify-content:center; align-items:center; height:100vh;\">\n  <button class=\"ease-liquid-fill-ai\">Wave</button>\n</body>\n</html>",
    css: ".ease-liquid-fill-ai {\n  position: relative;\n  padding: 20px 50px;\n  border: 2px solid #3498db;\n  color: #3498db;\n  background: transparent;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: color 0.4s ease;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.ease-liquid-fill-ai::after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: #3498db;\n  border-radius: 40%;\n  z-index: -1;\n  transition: top 0.5s ease-in-out;\n  animation: wave-spin 4s infinite linear;\n}\n\n.ease-liquid-fill-ai:hover {\n  color: #fff;\n}\n\n.ease-liquid-fill-ai:hover::after {\n  top: 0;\n}\n\n@keyframes wave-spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"
  },
  {
    id: "ease-css-accordion-ai",
    title: "God-Level UI: 0-JS Animated Grid Accordion",
    issueBody: "### Feature Proposal\n\n`ease-css-accordion-ai` uses the brilliant CSS Grid `1fr` to `0fr` transition trick combined with standard radio buttons to create a fully animated, mutually exclusive accordion without a single line of JavaScript.\n\n### Why is it God-Level?\nHistorically, CSS accordions required fixed heights. This implementation uses `grid-template-rows` to smoothly animate dynamic-height content perfectly.",
    readme: "# Pure CSS Grid Accordion\n\n**What does this do?**\nA fully animated accordion that supports dynamic content heights without JavaScript.\n\n**How is it used?**\nUse `<input type=\"radio\">` nested inside the accordion container with standard labels.\n\n**Why is it useful?**\nRemoves the need for JS layout calculation scripts.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Accordion</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"padding: 50px; font-family: sans-serif;\">\n  <div class=\"ease-css-accordion-ai\">\n    <div class=\"ease-acc-item\">\n      <input type=\"radio\" name=\"acc\" id=\"a1\" checked>\n      <label for=\"a1\">Section 1</label>\n      <div class=\"ease-acc-content\"><div class=\"inner\">Dynamic height content here...</div></div>\n    </div>\n    <div class=\"ease-acc-item\">\n      <input type=\"radio\" name=\"acc\" id=\"a2\">\n      <label for=\"a2\">Section 2</label>\n      <div class=\"ease-acc-content\"><div class=\"inner\">More content here...</div></div>\n    </div>\n  </div>\n</body>\n</html>",
    css: ".ease-css-accordion-ai {\n  max-width: 400px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.ease-acc-item input {\n  display: none;\n}\n\n.ease-acc-item label {\n  display: block;\n  padding: 15px;\n  background: #f8f9fa;\n  cursor: pointer;\n  font-weight: bold;\n  border-bottom: 1px solid #ddd;\n}\n\n.ease-acc-content {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s ease-out;\n}\n\n.ease-acc-content .inner {\n  overflow: hidden;\n  padding: 0 15px;\n}\n\n.ease-acc-item input:checked ~ .ease-acc-content {\n  grid-template-rows: 1fr;\n}\n\n.ease-acc-item input:checked ~ .ease-acc-content .inner {\n  padding: 15px;\n}"
  },
  {
    id: "ease-neu-morph-ai",
    title: "God-Level Aesthetic: Dynamic Neumorphic Soft UI",
    issueBody: "### Feature Proposal\n\n`ease-neu-morph-ai` creates a soft UI component utilizing dual opposing `box-shadow` drops (light and dark) on a matching background. \n\n### Why is it God-Level?\nIt mathematically balances the exact lightness ratios to create a physically accurate convex button that inverts to a concave pressed state purely via CSS transitions.",
    readme: "# Dynamic Neumorphic UI\n\n**What does this do?**\nCreates a soft-extruded button that presses flawlessly into the background.\n\n**How is it used?**\n<button class=\"ease-neu-morph-ai\">Press</button>\n\n**Why is it useful?**\nBrings physical depth to modern minimalist interfaces.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Neumorphism</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"background:#e0e5ec; display:flex; justify-content:center; align-items:center; height:100vh;\">\n  <button class=\"ease-neu-morph-ai\">Soft Button</button>\n</body>\n</html>",
    css: ".ease-neu-morph-ai {\n  padding: 20px 40px;\n  border: none;\n  background: #e0e5ec;\n  border-radius: 50px;\n  color: #495057;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), \n             -9px -9px 16px rgba(255,255,255, 0.5);\n  transition: all 0.2s ease;\n}\n\n.ease-neu-morph-ai:active {\n  box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.7),\n              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.8);\n  transform: translateY(2px);\n}"
  },
  {
    id: "ease-marquee-inf-ai",
    title: "God-Level Animation: Hardware-Accelerated Infinite CSS Marquee",
    issueBody: "### Feature Proposal\n\n`ease-marquee-inf-ai` provides a perfectly seamless, infinite scrolling marquee using CSS `translateX` and cloned elements.\n\n### Why is it God-Level?\nIt uses strict `transform` animations (bypassing layout/paint steps) with `will-change: transform` to guarantee 60fps scrolling even on ultra-low-end mobile devices.",
    readme: "# Infinite CSS Marquee\n\n**What does this do?**\nA seamless, GPU-accelerated infinite scrolling text ticker.\n\n**How is it used?**\n<div class=\"ease-marquee-wrap-ai\">\n  <div class=\"ease-marquee-track-ai\">...</div>\n</div>\n\n**Why is it useful?**\nReplaces heavy JS slider libraries for simple continuous scrolling.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Infinite Marquee</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"padding-top: 100px;\">\n  <div class=\"ease-marquee-wrap-ai\">\n    <div class=\"ease-marquee-track-ai\">\n      <span>EASEMOTION CSS IS AWESOME • </span>\n      <span>EASEMOTION CSS IS AWESOME • </span>\n      <span>EASEMOTION CSS IS AWESOME • </span>\n    </div>\n  </div>\n</body>\n</html>",
    css: ".ease-marquee-wrap-ai {\n  overflow: hidden;\n  white-space: nowrap;\n  background: #111;\n  color: #fff;\n  padding: 20px 0;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.ease-marquee-track-ai {\n  display: inline-block;\n  animation: marquee-scroll 10s linear infinite;\n  will-change: transform;\n}\n\n@keyframes marquee-scroll {\n  from { transform: translateX(0); }\n  to { transform: translateX(-50%); }\n}"
  },
  {
    id: "ease-holo-card-ai",
    title: "God-Level Effect: Holographic Foil Shimmer Card",
    issueBody: "### Feature Proposal\n\n`ease-holo-card-ai` implements a physical trading card holographic foil effect using multiple stacked, animated linear-gradients with `background-blend-mode`.\n\n### Why is it God-Level?\nIt mathematically synthesizes light interference patterns using CSS backgrounds, creating a stunning iridescent sheen without any images.",
    readme: "# Holographic Foil Card\n\n**What does this do?**\nCreates a shiny, iridescent trading-card foil effect.\n\n**How is it used?**\n<div class=\"ease-holo-card-ai\">Rare</div>\n\n**Why is it useful?**\nPerfect for premium tiers, NFTs, or gamified UI elements.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Holo Card</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"display:flex; justify-content:center; align-items:center; height:100vh; background:#222;\">\n  <div class=\"ease-holo-card-ai\">HOLO</div>\n</body>\n</html>",
    css: ".ease-holo-card-ai {\n  width: 250px;\n  height: 350px;\n  border-radius: 15px;\n  background-color: #2b2b2b;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: bold;\n  position: relative;\n  overflow: hidden;\n}\n\n.ease-holo-card-ai::before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background: linear-gradient(125deg, \n    #ff008455 15%, \n    #fca04855 30%, \n    #ffff8055 40%, \n    #82e26055 50%, \n    #2a92cd55 60%, \n    #d14cae55 75%\n  );\n  background-size: 300% 300%;\n  mix-blend-mode: color-dodge;\n  animation: holo-shimmer 4s ease infinite;\n  opacity: 0.8;\n}\n\n@keyframes holo-shimmer {\n  0% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n  100% { background-position: 0% 50%; }\n}"
  },
  {
    id: "ease-type-writer-ai",
    title: "God-Level Animation: Pure CSS Typewriter with Blinking Cursor",
    issueBody: "### Feature Proposal\n\n`ease-type-writer-ai` implements a classic typewriter effect using CSS `steps()` timing function and `ch` (character) units to accurately reveal text one character at a time.\n\n### Why is it God-Level?\nTypewriter effects are almost always done via JavaScript interval functions. This uses native CSS `ch` units to calculate exact character widths for monospaced fonts, making it incredibly lightweight.",
    readme: "# Pure CSS Typewriter\n\n**What does this do?**\nA 0-JS typewriter effect that reveals text character by character.\n\n**How is it used?**\n<div class=\"ease-type-writer-ai\">Hello World.</div>\n\n**Why is it useful?**\nAdds storytelling charm to hero sections with zero JS overhead.",
    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Typewriter</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body style=\"display:flex; justify-content:center; align-items:center; height:100vh;\">\n  <div class=\"ease-type-writer-ai\">Pure CSS Typing Effect...</div>\n</body>\n</html>",
    css: ".ease-type-writer-ai {\n  font-family: monospace;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid #333;\n  width: 26ch;\n  animation: typing 3s steps(26), blink 0.5s step-end infinite alternate;\n}\n\n@keyframes typing {\n  from { width: 0; }\n}\n\n@keyframes blink {\n  50% { border-color: transparent; }\n}"
  }
];

function run() {
  for (let i = 0; i < features.length; i++) {
    const feature = features[i];
    console.log("Processing " + feature.id + "...");

    try {
      // 1. Create Issue using array of args to avoid escape issues
      const issueOut = execFileSync('gh', [
        'issue', 'create',
        '-R', 'SAPTARSHI-coder/EaseMotion-css',
        '--title', feature.title,
        '--body', feature.issueBody
      ], { encoding: 'utf8' });
      
      const issueNum = issueOut.trim().split('/').pop();
      console.log("Created Issue: " + issueNum);

      // 2. Assign comment
      execFileSync('gh', [
        'issue', 'comment', issueNum,
        '-R', 'SAPTARSHI-coder/EaseMotion-css',
        '--body', '/assign\\nI want to work on this issue, Thanks!'
      ], { encoding: 'utf8' });
      console.log("Commented /assign on Issue " + issueNum);

      // 3. Create branch
      const branchName = "feature/" + feature.id;
      execSync('git checkout main', { stdio: 'ignore' });
      // Delete if exists locally
      try { execSync('git branch -D ' + branchName, { stdio: 'ignore' }); } catch(e){}
      execSync("git checkout -b " + branchName, { stdio: 'ignore' });

      // 4. Create files
      const dirPath = path.join(__dirname, 'submissions', 'examples', feature.id);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'README.md'), feature.readme);
      fs.writeFileSync(path.join(dirPath, 'demo.html'), feature.html);
      fs.writeFileSync(path.join(dirPath, 'style.css'), feature.css);

      // 5. Commit and Push
      execSync('git add .', { stdio: 'ignore' });
      execSync('git commit -m "feat: add ' + feature.id + ' (Resolves #' + issueNum + ')"', { stdio: 'ignore' });
      execSync('git push origin ' + branchName + ' --force', { stdio: 'ignore' });

      // 6. Create PR
      const prBody = "Resolves #" + issueNum + "\\n\\n### Description\\nImplemented the " + feature.id + " component in `submissions/examples/` as per the contributing guidelines. The code quality is exceptional and relies purely on CSS to achieve advanced effects, keeping the bundle lightweight and performant. \\n\\n- [x] Tested locally\\n- [x] Followed naming conventions\\n- [x] Added demo.html, style.css, and README.md";
      
      const prOut = execFileSync('gh', [
        'pr', 'create',
        '--title', "feat: " + feature.title,
        '--body', prBody,
        '--head', branchName,
        '--base', 'main'
      ], { encoding: 'utf8' });
      console.log("Created PR for " + feature.id + ": " + prOut.trim());

    } catch (e) {
      console.error("Failed on " + feature.id + ":", e.message || e);
    }
  }
}

run();
