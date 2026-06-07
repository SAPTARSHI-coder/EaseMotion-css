#!/usr/bin/env python
"""Validate masonry utilities implementation."""

from pathlib import Path

def validate():
    errors = []
    
    # Test 1: Check CSS file syntax
    css_file = Path('components/masonry.css')
    css_content = ''

    if not css_file.exists():
        errors.append('❌ masonry.css not found')
    else:
        css_content = css_file.read_text()

        brace_count = css_content.count('{') - css_content.count('}')

        if brace_count == 0:
            print('✓ CSS Brace Balance: OK')
        else:
            errors.append(f'❌ CSS Brace Balance: {brace_count}')
    # Test 2: Check if masonry is imported in main bundle
    main_css_file = Path('easemotion.css')

    if not main_css_file.exists():
        errors.append('❌ easemotion.css not found')
    else:
        main_css = main_css_file.read_text()

        if '@import "./components/masonry.css"' in main_css:
            print('✓ Masonry imported in bundle: OK')
        else:
            errors.append('❌ Masonry not imported in easemotion.css')
    # Test 3: Check doc file
    doc_file = Path('docs/masonry-layout-guide.md')
    if doc_file.exists():
        doc_size = len(doc_file.read_text())
        print(f'✓ Documentation file exists: OK ({doc_size} bytes)')
    else:
        errors.append('❌ masonry-layout-guide.md not found')
    
    # Test 4: Check demo file
    demo_file = Path('examples/masonry-layouts.html')
    if demo_file.exists():
        print('✓ Demo file exists: OK')
    else:
        errors.append('❌ masonry-layouts.html not found')
    
    # Test 5: Check masonry classes
    masonry_classes = ['ease-masonry', 'ease-masonry-2', 'ease-masonry-3', 'ease-masonry-4']
    for cls in masonry_classes:
        if f'.{cls}' in css_content:
            print(f'✓ Class {cls}: OK')
        else:
            errors.append(f'❌ Class {cls} not found')
    
    if errors:
        print('\nValidation Errors:')
        for error in errors:
            print(error)
        return False
    
    print('\n✓✓✓ All validations passed! ✓✓✓')
    return True

if __name__ == '__main__':
    validate()
