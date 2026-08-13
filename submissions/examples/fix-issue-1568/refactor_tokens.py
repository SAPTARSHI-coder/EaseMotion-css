import os
import re

def main():
    root_dirs = ['core', 'easemotion', 'components']
    
    # regex for durations: 0.6s, 1s, etc -> var(--ease-speed-medium)
    # We ignore anything already in a var() or calc()
    duration_pattern = re.compile(r'(?<!var\()(?<!calc\()(?<!--ease-speed-)\b(0\.\d+s|[1-9]\ds?)\b')
    
    # regex for shimmer/gradients with rgba(255,255,255,0.15)
    shimmer_pattern = re.compile(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.15\s*\)')
    
    # regex for typical shadow: 0 12px 32px rgba(0,0,0,0.15)
    shadow_pattern = re.compile(r'0\s+12px\s+32px\s+rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.15\s*\)')
    
    # regex for border-radius: 12px -> var(--ease-radius-lg), 6px -> var(--ease-radius-md)
    radius_lg_pattern = re.compile(r'border-radius\s*:\s*12px')
    radius_md_pattern = re.compile(r'border-radius\s*:\s*6px')
    
    # regex for easing curves
    ease_ping_pattern = re.compile(r'cubic-bezier\(0,\s*0,\s*0\.2,\s*1\)')

    for d in root_dirs:
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith('.css'):
                    filepath = os.path.join(root, file)
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 1. Replace durations
                    content = duration_pattern.sub(r'var(--ease-speed-medium)', content)
                    
                    # 2. Replace hardcoded colors
                    content = shimmer_pattern.sub(r'var(--ease-shimmer-color, rgba(255, 255, 255, 0.15))', content)
                    
                    # 3. Replace shadows
                    content = shadow_pattern.sub(r'var(--ease-shadow-xl)', content)
                    
                    # 4. Replace radii
                    content = radius_lg_pattern.sub(r'border-radius: var(--ease-radius-lg)', content)
                    content = radius_md_pattern.sub(r'border-radius: var(--ease-radius-md)', content)
                    
                    # 5. Replace easing curves
                    content = ease_ping_pattern.sub(r'var(--ease-ping, cubic-bezier(0, 0, 0.2, 1))', content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)

    print("Tokens refactored! Hardcoded visual properties have been successfully migrated to CSS variables.")

if __name__ == '__main__':
    main()
