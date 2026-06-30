# CSS Hanging Punctuation Quotes

A demo of the CSS hanging-punctuation property that visually hangs opening quotes, bullets, and other punctuation outside the text margin for cleaner typographic alignment.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-lg, ease-italic, ease-text-gray-700, ease-text-sm, ease-text-gray-400, ease-text-xl, ease-font-semibold, ease-text-gray-800
- **Spacing:** ease-mb-4, ease-mb-10, ease-mb-12, ease-mt-4, ease-mt-12, ease-p-6
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The hanging-punctuation property is applied to blockquotes, pull quotes, and unordered lists.
- Opening quotation marks and bullets hang outside the text margin, creating a clean edge alignment.
- For lists, a fallback padding is provided when the property is not supported.
- The effect is most visible in Safari (full support), but gracefully degrades in other browsers.

## How to use
1. Open demo.html in Safari for the best experience; other browsers will show a slightly less polished version.
2. Add the classes .hanging-quote, .hanging-pull-quote, or .hanging-list to your elements.
3. Ensure the path to easemotion.css is correct.
