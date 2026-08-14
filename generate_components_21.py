import os

base_dir = "/Users/desireddymohithreddy/GSSOC2026EaseMotion/EaseMotion-cssMRD/submissions/examples"

components = {
    "css-modal-neumorphic-dark": {
        "issue": "78749",
        "demo.html": """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neumorphic Dark Modal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <input type="checkbox" id="neu-modal-toggle" class="nmd-toggle">
    <div class="nmd-wrapper">
        <label for="neu-modal-toggle" class="nmd-btn">Open Settings</label>
    </div>

    <div class="nmd-overlay">
        <div class="nmd-modal">
            <h2 class="nmd-title">Preferences</h2>
            <p class="nmd-desc">Adjust your system settings. Soft UI principles applied to a dark mode palette.</p>
            <div class="nmd-actions">
                <label for="neu-modal-toggle" class="nmd-btn-close">Cancel</label>
                <label for="neu-modal-toggle" class="nmd-btn-save">Save</label>
            </div>
        </div>
        <label for="neu-modal-toggle" class="nmd-backdrop"></label>
    </div>
</body>
</html>""",
        "style.css": """:root { --bg: #292d32; --shadow-dark: #1f2226; --shadow-light: #33383e; --text: #a0a5ab; --accent: #4ade80; }
body { background: var(--bg); display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: system-ui, sans-serif; color: var(--text); }
.nmd-toggle { display: none; }
.nmd-btn { padding: 1rem 2rem; border-radius: 50px; background: var(--bg); color: var(--text); font-weight: 600; cursor: pointer; box-shadow: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light); transition: all 0.3s; user-select: none; }
.nmd-btn:active { box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light); }
.nmd-overlay { position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 100; opacity: 0; pointer-events: none; transition: opacity 0.4s; }
.nmd-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 1; cursor: pointer; }
.nmd-modal { position: relative; z-index: 2; background: var(--bg); padding: 2.5rem; border-radius: 20px; width: 90%; max-width: 400px; box-shadow: 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light); transform: translateY(-50px) scale(0.9); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity: 0; }
.nmd-title { margin-top: 0; color: #fff; font-size: 1.5rem; }
.nmd-desc { line-height: 1.6; margin-bottom: 2rem; }
.nmd-actions { display: flex; justify-content: flex-end; gap: 1rem; }
.nmd-btn-close, .nmd-btn-save { padding: 0.75rem 1.5rem; border-radius: 30px; font-weight: 600; cursor: pointer; box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light); transition: all 0.3s; }
.nmd-btn-save { color: var(--accent); }
.nmd-btn-close:active, .nmd-btn-save:active { box-shadow: inset 2px 2px 5px var(--shadow-dark), inset -2px -2px 5px var(--shadow-light); }
.nmd-toggle:checked ~ .nmd-overlay { opacity: 1; pointer-events: auto; }
.nmd-toggle:checked ~ .nmd-overlay .nmd-modal { transform: translateY(0) scale(1); opacity: 1; }""",
        "README.md": """# Neumorphic Modal (Dark Mode)\nA deep dark mode modal built with soft UI extrusion. Powered entirely by the CSS checkbox hack, featuring smooth 3D scaling and fading transitions."""
    },
    "css-carousel-animated-saas-modern": {
        "issue": "79677",
        "demo.html": """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaaS Modern Animated Carousel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="saas-carousel-wrapper">
        <div class="saas-carousel-track">
            <div class="saas-card"><div class="saas-icon"></div><h3>Analytics</h3><p>Real-time data at your fingertips.</p></div>
            <div class="saas-card"><div class="saas-icon"></div><h3>Security</h3><p>Enterprise-grade encryption standard.</p></div>
            <div class="saas-card"><div class="saas-icon"></div><h3>Scale</h3><p>Grow without infrastructure limits.</p></div>
            <!-- Duplicate for infinite scroll -->
            <div class="saas-card"><div class="saas-icon"></div><h3>Analytics</h3><p>Real-time data at your fingertips.</p></div>
            <div class="saas-card"><div class="saas-icon"></div><h3>Security</h3><p>Enterprise-grade encryption standard.</p></div>
            <div class="saas-card"><div class="saas-icon"></div><h3>Scale</h3><p>Grow without infrastructure limits.</p></div>
        </div>
    </div>
</body>
</html>""",
        "style.css": """:root { --bg: #f8fafc; --text: #334155; --primary: #3b82f6; }
body { background: var(--bg); display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: -apple-system, sans-serif; overflow: hidden; }
.saas-carousel-wrapper { width: 100%; max-width: 1000px; overflow: hidden; position: relative; padding: 2rem 0; }
.saas-carousel-wrapper::before, .saas-carousel-wrapper::after { content: ''; position: absolute; top: 0; width: 150px; height: 100%; z-index: 2; pointer-events: none; }
.saas-carousel-wrapper::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
.saas-carousel-wrapper::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
.saas-carousel-track { display: flex; gap: 2rem; width: max-content; animation: saas-scroll 20s linear infinite; }
.saas-carousel-wrapper:hover .saas-carousel-track { animation-play-state: paused; }
.saas-card { width: 300px; background: #fff; padding: 2rem; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; border: 1px solid #e2e8f0; }
.saas-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(59,130,246,0.15); border-color: #bfdbfe; }
.saas-icon { width: 48px; height: 48px; background: #eff6ff; border-radius: 12px; margin-bottom: 1.5rem; position: relative; }
.saas-icon::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 24px; height: 24px; border-radius: 6px; background: var(--primary); }
.saas-card h3 { margin: 0 0 0.5rem 0; color: #0f172a; font-size: 1.25rem; }
.saas-card p { margin: 0; color: #64748b; line-height: 1.5; font-size: 0.95rem; }
@keyframes saas-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-50% - 1rem)); } }""",
        "README.md": """# Animated Carousel (SaaS Modern)\nA continuous, infinitely scrolling marquee carousel common in modern B2B SaaS landing pages. Pauses smoothly on hover and features crisp gradient fade masks on the edges."""
    },
    "css-button-morphing-neon": {
        "issue": "79676",
        "demo.html": """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Morphing Button</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
<body>
    <button class="neon-morph-btn">
        <span class="nm-text">INITIALIZE</span>
        <i class="ph ph-rocket-launch"></i>
    </button>
</body>
</html>""",
        "style.css": """:root { --bg: #0a0a0a; --neon: #00ffcc; }
body { background: var(--bg); display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: 'Courier New', monospace; }
.neon-morph-btn { position: relative; width: 220px; height: 60px; background: transparent; border: 2px solid var(--neon); color: var(--neon); font-size: 1.2rem; font-weight: bold; font-family: inherit; letter-spacing: 2px; cursor: pointer; border-radius: 4px; outline: none; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); overflow: hidden; display: flex; justify-content: center; align-items: center; box-shadow: 0 0 10px rgba(0, 255, 204, 0.2), inset 0 0 10px rgba(0, 255, 204, 0.1); }
.nm-text { position: absolute; transition: all 0.4s; z-index: 2; }
.neon-morph-btn i { position: absolute; font-size: 2rem; opacity: 0; transform: translateY(40px); transition: all 0.4s; z-index: 2; }
.neon-morph-btn:hover { width: 60px; border-radius: 50%; box-shadow: 0 0 20px var(--neon), inset 0 0 20px var(--neon); background: rgba(0, 255, 204, 0.1); border-width: 3px; }
.neon-morph-btn:hover .nm-text { opacity: 0; transform: translateY(-40px); }
.neon-morph-btn:hover i { opacity: 1; transform: translateY(0); }
.neon-morph-btn:active { transform: scale(0.9); box-shadow: 0 0 40px var(--neon), inset 0 0 30px var(--neon); background: var(--neon); color: #000; }""",
        "README.md": """# Morphing Button (Neon)\nA dynamic CTA button that morphs from a standard rectangular button into a glowing neon circular icon button when hovered, complete with bouncy spring transitions."""
    },
    "css-avatar-interactive-glassmorphism": {
        "issue": "79675",
        "demo.html": """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Glass Avatar</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
<body>
    <div class="glass-av-scene">
        <div class="glass-av-orb"></div>
        <div class="glass-av-container">
            <div class="glass-av-image">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Avatar">
            </div>
            <div class="glass-av-menu">
                <a href="#"><i class="ph ph-user"></i> Profile</a>
                <a href="#"><i class="ph ph-gear"></i> Settings</a>
                <a href="#"><i class="ph ph-sign-out"></i> Logout</a>
            </div>
        </div>
    </div>
</body>
</html>""",
        "style.css": """:root { --bg: #1e1e2f; --glass: rgba(255, 255, 255, 0.1); --border: rgba(255, 255, 255, 0.2); --accent: #ff477e; }
body { background: var(--bg); display: flex; justify-content: center; padding-top: 20vh; height: 100vh; margin: 0; font-family: system-ui, sans-serif; }
.glass-av-scene { position: relative; }
.glass-av-orb { position: absolute; top: -20px; left: -20px; width: 100px; height: 100px; background: var(--accent); border-radius: 50%; filter: blur(30px); z-index: 0; animation: av-pulse 4s infinite alternate; }
.glass-av-container { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
.glass-av-image { width: 80px; height: 80px; border-radius: 50%; background: var(--glass); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 2px solid var(--border); box-shadow: 0 8px 32px rgba(0,0,0,0.3); overflow: hidden; cursor: pointer; transition: all 0.3s; display: flex; justify-content: center; align-items: center; z-index: 2; position: relative; }
.glass-av-image img { width: 90%; height: 90%; object-fit: cover; }
.glass-av-image:hover { transform: scale(1.05); border-color: var(--accent); box-shadow: 0 10px 40px rgba(255, 71, 126, 0.4); }
.glass-av-menu { position: absolute; top: 50px; background: var(--glass); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid var(--border); border-radius: 16px; padding: 3rem 1rem 1rem 1rem; width: 160px; opacity: 0; visibility: hidden; transform: translateY(-20px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 15px 35px rgba(0,0,0,0.4); z-index: 1; }
.glass-av-menu a { display: flex; align-items: center; gap: 0.75rem; color: #fff; text-decoration: none; padding: 0.75rem; border-radius: 8px; transition: 0.2s; font-size: 0.95rem; }
.glass-av-menu a:hover { background: rgba(255,255,255,0.1); color: var(--accent); }
.glass-av-container:hover .glass-av-menu { opacity: 1; visibility: visible; transform: translateY(0); }
@keyframes av-pulse { 100% { transform: scale(1.3) translate(20px, 20px); opacity: 0.6; } }""",
        "README.md": """# Interactive Avatar (Glassmorphism)\nA premium avatar component featuring a frosted glass ring bounding the profile image. On hover, a beautifully blurred dropdown menu slides down from underneath the avatar."""
    },
    "css-dropdown-animated-glassmorphism": {
        "issue": "79662",
        "demo.html": """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Glass Dropdown</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="ag-scene">
        <!-- Background shapes for glass effect -->
        <div class="ag-shape shape1"></div>
        <div class="ag-shape shape2"></div>
        
        <div class="ag-dropdown">
            <button class="ag-btn">Options ▾</button>
            <div class="ag-menu">
                <a href="#">Export PDF</a>
                <a href="#">Share Link</a>
                <div class="ag-divider"></div>
                <a href="#" class="ag-danger">Delete</a>
            </div>
        </div>
    </div>
</body>
</html>""",
        "style.css": """:root { --bg: #f3f4f6; --glass: rgba(255, 255, 255, 0.4); --border: rgba(255, 255, 255, 0.6); --text: #374151; }
body { background: var(--bg); display: flex; justify-content: center; padding-top: 15vh; height: 100vh; margin: 0; font-family: system-ui, sans-serif; overflow: hidden; }
.ag-scene { position: relative; width: 100%; display: flex; justify-content: center; }
.ag-shape { position: absolute; border-radius: 50%; filter: blur(30px); z-index: 0; opacity: 0.8; }
.shape1 { width: 150px; height: 150px; background: #60a5fa; top: -50px; left: calc(50% - 100px); }
.shape2 { width: 120px; height: 120px; background: #f472b6; top: 20px; left: calc(50% + 40px); }
.ag-dropdown { position: relative; z-index: 1; }
.ag-btn { background: var(--glass); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--border); color: var(--text); padding: 0.75rem 2rem; font-size: 1rem; font-weight: 600; border-radius: 12px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: 0.3s; }
.ag-btn:hover { background: rgba(255,255,255,0.6); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
.ag-menu { position: absolute; top: calc(100% + 10px); left: 0; width: 200px; background: var(--glass); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid var(--border); border-radius: 16px; padding: 0.5rem; opacity: 0; visibility: hidden; transform: translateY(-15px) scale(0.95); transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 10px 30px rgba(0,0,0,0.1); transform-origin: top; }
.ag-menu a { display: block; padding: 0.75rem 1rem; color: var(--text); text-decoration: none; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.ag-menu a:hover { background: rgba(255,255,255,0.5); transform: translateX(5px); }
.ag-divider { height: 1px; background: rgba(0,0,0,0.05); margin: 0.5rem 0; }
.ag-danger { color: #ef4444 !important; }
.ag-danger:hover { background: rgba(239, 68, 68, 0.1) !important; }
.ag-dropdown:hover .ag-menu { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }""",
        "README.md": """# Animated Dropdown (Glassmorphism)\nA stunning light-mode frosted glass dropdown menu. Ambient background blobs bring vibrant color through the deeply blurred, translucent dropdown panel utilizing `backdrop-filter`."""
    }
}

for folder, files in components.items():
    folder_path = os.path.join(base_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    for filename in ["demo.html", "style.css", "README.md"]:
        with open(os.path.join(folder_path, filename), "w") as f:
            f.write(files[filename])
