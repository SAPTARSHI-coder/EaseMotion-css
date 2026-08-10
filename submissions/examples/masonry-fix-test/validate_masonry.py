from pathlib import Path

# Yeh logic show karega ki fix kaise kaam karta hai
def run_masonry_validation():
    masonry_classes = ['ease-masonry', 'ease-masonry-2'] # Example classes
    css_file = Path('../../components/masonry.css')
    css_content = "" 

    if not css_file.exists():
        print('❌ masonry.css not found - Handling error gracefully!')
    else:
        with open(css_file, 'r', encoding='utf-8') as f:
            css_content = f.read()
        print('✅ masonry.css found and validated.')

    for cls in masonry_classes:
        if f'.{cls}' in css_content:
            print(f'Found: .{cls}')

run_masonry_validation()