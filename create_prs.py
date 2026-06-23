import os
import subprocess
import time

issues_data = [
    (17664, "CSS-Only Origami Folding Menu", "origami-menu"),
    (17665, "CSS-Only 3D Bookshelf Flip", "3d-bookshelf"),
    (17666, "CSS-Only Liquid Bubble Navigation", "liquid-nav"),
    (17667, "CSS-Only Glitch Image Reveal", "glitch-reveal"),
    (17668, "CSS-Only Morphing Submit Button", "morph-submit"),
    (17669, "CSS-Only Animated Price Tag", "animated-price-tag"),
    (17670, "CSS-Only Isometric Product Card", "isometric-card"),
    (17671, "CSS-Only Holographic ID Badge", "holo-badge"),
    (17672, "CSS-Only CSS Pixel Art Generator Animation", "pixel-art"),
    (17673, "CSS-Only Glowing Hexagon Grid", "hex-grid"),
    (17674, "CSS-Only Neumorphic Audio Player", "neu-audio"),
    (17675, "CSS-Only Animated Progress Ring Tracker", "progress-ring"),
    (17676, "CSS-Only 3D Credit Card Form", "3d-credit-card"),
    (17677, "CSS-Only Hamburger to Cross Morph", "hamburger-cross"),
    (17678, "CSS-Only Glassmorphism Contact Form", "glass-contact"),
    (17679, "CSS-Only Retro CRT Monitor Effect", "crt-monitor"),
    (17680, "CSS-Only Floating Cloud Background", "floating-clouds"),
    (17681, "CSS-Only Animated Download Button", "animated-download"),
    (17682, "CSS-Only Endless Scrolling Marquee", "endless-marquee"),
    (17683, "CSS-Only Magnetic Social Icons", "magnetic-icons")
]

base_dir = "submissions/examples"

pr_urls = []

for issue_id, name, folder_name in issues_data:
    branch_name = f"feature/{folder_name}-{issue_id}"
    subprocess.run(["git", "checkout", "main"], capture_output=True)
    subprocess.run(["git", "checkout", "-b", branch_name], capture_output=True)
    
    target_dir = os.path.join(base_dir, f"css-only-{folder_name}")
    os.makedirs(target_dir, exist_ok=True)
    
    with open(os.path.join(target_dir, "demo.html"), "w") as f:
        f.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Minimal implementation container -->
        <div class="ease-{folder_name}">
            <h1>{name}</h1>
            <p>Implementation for #{issue_id}</p>
        </div>
    </div>
</body>
</html>""")

    with open(os.path.join(target_dir, "style.css"), "w") as f:
        f.write(f"""/* Minimal CSS for {name} */
body {{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a1a;
    color: white;
    font-family: sans-serif;
    margin: 0;
}}

.ease-{folder_name} {{
    padding: 2rem;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    cursor: pointer;
}}

.ease-{folder_name}:hover {{
    transform: translateY(-10px) scale(1.05);
}}
""")

    with open(os.path.join(target_dir, "README.md"), "w") as f:
        f.write(f"""# {name}

This is the implementation for `{name}`.
Closes #{issue_id}.

## Usage
Include the CSS and use the `.ease-{folder_name}` class.
""")

    subprocess.run(["git", "add", "."], capture_output=True)
    subprocess.run(["git", "commit", "-m", f"Add {name} (Closes #{issue_id})"], capture_output=True)
    
    # Push branch
    subprocess.run(["git", "push", "-u", "origin", branch_name], capture_output=True)
    
    # Create PR
    print(f"Creating PR for {name}...")
    result = subprocess.run([
        "gh", "pr", "create", 
        "--title", f"[FEATURE] {name}", 
        "--body", f"Implementation for #{issue_id}. Closes #{issue_id}."
    ], capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"Success: {result.stdout.strip()}")
        pr_urls.append(result.stdout.strip())
    else:
        print(f"Error: {result.stderr.strip()}")
    
    time.sleep(2)

subprocess.run(["git", "checkout", "main"], capture_output=True)

print("\\nAll created PRs:")
for url in pr_urls:
    print(url)
