import os
import re
import json

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    print("Starting deduplication of EaseMotion CSS framework...")

    # 1. Handle easemotion/all.css
    # Remove direct import of core/animations.css
    all_css_path = 'easemotion/all.css'
    if os.path.exists(all_css_path):
        content = read_file(all_css_path)
        content = re.sub(r'@import\s+["\']\.\./core/animations\.css["\'];\n?', '', content)
        write_file(all_css_path, content)
        print(f"Cleaned {all_css_path}")

    # 2. Extract unique blocks from easemotion/*.css and append to core/animations.css
    # (Since the issue says "easemotion/*.css" are ~100% duplicates, and they are
    # catastrophic duplicates, we actually just need to rewrite them as thin wrappers.
    # The issue specifically asks to normalize `.ease-bounce` in core.)
    
    core_path = 'core/animations.css'
    if os.path.exists(core_path):
        core_content = read_file(core_path)
        
        # Normalize .ease-bounce in core
        # Replace the divergent implementation with the standard one
        bounce_pattern = re.compile(r'\.ease-bounce\s*\{[^}]+\}', re.MULTILINE)
        standard_bounce = """.ease-bounce {
  animation: ease-kf-bounce var(--ease-animation-duration, 1s) var(--ease-animation-easing, ease) var(--ease-animation-iterations, infinite);
}"""
        core_content = bounce_pattern.sub(standard_bounce, core_content)
        write_file(core_path, core_content)
        print(f"Normalized .ease-bounce in {core_path}")

    # 3. Rewrite all easemotion/*.css (except all.css) as thin re-exports
    easemotion_dir = 'easemotion'
    if os.path.exists(easemotion_dir):
        for file in os.listdir(easemotion_dir):
            if file.endswith('.css') and file != 'all.css':
                filepath = os.path.join(easemotion_dir, file)
                content = '/* Thin re-export to prevent duplication */\n@import "../core/animations.css" layer(animations);\n'
                write_file(filepath, content)
                print(f"Deduplicated {filepath}")

    # 4. Update check-duplicates.mjs
    checker_path = 'scripts/check-duplicates.mjs'
    if os.path.exists(checker_path):
        content = read_file(checker_path)
        content = content.replace("['core', 'components']", "['core', 'components', 'easemotion']")
        write_file(checker_path, content)
        print(f"Updated {checker_path}")

    # 5. Clean up duplicate-baseline.json
    baseline_path = 'scripts/duplicate-baseline.json'
    if os.path.exists(baseline_path):
        write_file(baseline_path, '[]\n')
        print(f"Cleared {baseline_path}")

    print("Deduplication complete!")

if __name__ == '__main__':
    main()
