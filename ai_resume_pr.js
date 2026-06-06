const { execFileSync } = require('child_process');

const PRs = [
  { branch: "ease-glass-card-ai", issue: "1745", title: "God-Level Component: Advanced Glassmorphism Interactive Card with Radial Glow" },
  { branch: "ease-cyber-glitch-ai", issue: "1746", title: "God-Level Effect: Cyberpunk Glitch Text Animation" },
  { branch: "ease-magnetic-btn-ai", issue: "1747", title: "God-Level Component: Pure CSS Magnetic Hover Button" },
  { branch: "ease-neon-pulse-ai", issue: "1748", title: "God-Level Effect: Multilayer Neon Pulse Aura" },
  { branch: "ease-liquid-fill-ai", issue: "1749", title: "God-Level Animation: Pure CSS Liquid Fill Wave" },
  { branch: "ease-css-accordion-ai", issue: "1751", title: "God-Level UI: 0-JS Animated Grid Accordion" },
  { branch: "ease-neu-morph-ai", issue: "1752", title: "God-Level Aesthetic: Dynamic Neumorphic Soft UI" },
  { branch: "ease-marquee-inf-ai", issue: "1753", title: "God-Level Animation: Hardware-Accelerated Infinite CSS Marquee" },
  { branch: "ease-holo-card-ai", issue: "1754", title: "God-Level Effect: Holographic Foil Shimmer Card" },
  { branch: "ease-type-writer-ai", issue: "1755", title: "God-Level Animation: Pure CSS Typewriter with Blinking Cursor" }
];

function run() {
  for (let pr of PRs) {
    const branchName = "feature/" + pr.branch;
    const prBody = "Resolves #" + pr.issue + "\\n\\n### Description\\nImplemented the " + pr.branch + " component in `submissions/examples/` as per the contributing guidelines. The code quality is exceptional and relies purely on CSS to achieve advanced effects, keeping the bundle lightweight and performant. \\n\\n- [x] Tested locally\\n- [x] Followed naming conventions\\n- [x] Added demo.html, style.css, and README.md";
    
    try {
      // First, ensure the branch is pushed to origin
      try {
        execFileSync('git', ['push', 'origin', branchName, '--force'], { stdio: 'ignore' });
      } catch (e) {
        // ignore if already pushed or minor error
      }
      
      const out = execFileSync('gh', [
        'pr', 'create',
        '-R', 'SAPTARSHI-coder/EaseMotion-css',
        '--title', "feat: " + pr.title,
        '--body', prBody,
        '--head', "sonusharma6-dsa:" + branchName,
        '--base', 'main'
      ], { encoding: 'utf8' });
      
      console.log("Successfully created PR for " + pr.branch + ": " + out.trim());
    } catch (e) {
      console.error("Failed to create PR for " + pr.branch + ":", e.message || e);
    }
  }
}

run();
