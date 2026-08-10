import os
import re

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    print("Starting Naming Convention Standardization...")

    # 1. Component Rename (em- to ease-)
    component_files = ['components/badges.css', 'components/tabs.css', 'components/loaders.css']
    for file_path in component_files:
        if os.path.exists(file_path):
            content = read_file(file_path)
            content = re.sub(r'\.em-', '.ease-', content)
            write_file(file_path, content)
            print(f"Renamed .em- to .ease- in {file_path}")

    # 2. Marquee Namespacing
    marquee_path = 'easemotion/ease-marquee.css'
    if os.path.exists(marquee_path):
        content = read_file(marquee_path)
        # Add prefix to bare classes
        marquee_classes = ['slow', 'fast', 'normal', 'x-fast', 'x-slow', 'reverse', 
                           'gap-sm', 'gap-md', 'gap-lg', 'gap-xl', 'pause-on-hover', 
                           'no-pause', 'fade-edges']
        for cls in marquee_classes:
            content = re.sub(rf'\.{cls}\b', f'.ease-marquee-{cls}', content)
        write_file(marquee_path, content)
        print(f"Namespaced classes in {marquee_path}")

    # 3. Keyframe Normalization in core/animations.css
    animations_path = 'core/animations.css'
    if os.path.exists(animations_path):
        content = read_file(animations_path)
        # Rename keyframes definitions and references
        content = re.sub(r'@keyframes ease-float\b', '@keyframes ease-kf-float', content)
        content = re.sub(r'@keyframes ease-zoom-out\b', '@keyframes ease-kf-zoom-out', content)
        content = re.sub(r'\bease-float\b', 'ease-kf-float', content)
        content = re.sub(r'\bease-zoom-out\b', 'ease-kf-zoom-out', content)
        write_file(animations_path, content)
        print(f"Normalized keyframes in {animations_path}")

    # 4. Fix import order in easemotion.css
    main_css_path = 'easemotion.css'
    if os.path.exists(main_css_path):
        content = read_file(main_css_path)
        # We need to ensure base.css is imported before ease-marquee.css
        # A simple replacement logic:
        # Match both imports and output them in the correct order
        pattern = re.compile(r'(@import\s+["\']./easemotion/ease-marquee\.css["\'];\n?)\s*(@import\s+["\']./core/base\.css["\'];\n?)')
        if pattern.search(content):
            content = pattern.sub(r'\2\1', content)
            write_file(main_css_path, content)
            print(f"Fixed import order in {main_css_path}")

    print("Naming standardization complete!")

if __name__ == '__main__':
    main()
