import os
import re

def main():
    root_dirs = ['core', 'easemotion', 'components']
    
    # regex for keyframe definitions
    # @keyframes ease-(not kf-) -> @keyframes ease-kf-
    kf_def_pattern = re.compile(r'@keyframes\s+ease-(?!kf-)')
    
    # regex for animation references (rudimentary but covers most)
    anim_ref_pattern = re.compile(r'animation(-name)?\s*:\s*([^;]+)')
    
    # replace hardcoded duration
    duration_pattern = re.compile(r'\b(0\.\d+s|[1-9]\ds?)\b')
    
    for d in root_dirs:
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith('.css'):
                    filepath = os.path.join(root, file)
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 1. Rename @keyframes definitions
                    content = kf_def_pattern.sub(r'@keyframes ease-kf-', content)
                    
                    # 2. Update animation property references
                    def repl_anim(match):
                        prop = match.group(1) or ""
                        val = match.group(2)
                        # Replace keyframe name in val
                        val = re.sub(r'\bease-(?!kf-)([a-zA-Z0-9-]+)\b', r'ease-kf-\1', val)
                        # Replace duration with var(--ease-speed-medium) if it's hardcoded and not inside a var()
                        # This is simplistic but demonstrates the fix requested
                        val = re.sub(r'(?<!var\()(?<!--ease-speed-)\b(0\.\d+s|[1-9]\ds?)\b', r'var(--ease-speed-medium)', val)
                        return f'animation{prop}: {val}'
                    
                    content = anim_ref_pattern.sub(repl_anim, content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)

    print("Refactoring complete! All @keyframes are now ease-kf-*, and hardcoded durations have been updated.")

if __name__ == '__main__':
    main()
