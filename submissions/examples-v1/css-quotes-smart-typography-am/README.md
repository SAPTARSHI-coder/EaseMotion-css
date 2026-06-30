# CSS Quotes — Smart Typography

## What does this do?

Demonstrates the CSS `quotes` property automatically inserting the correct, language-specific quotation marks (including nested levels) without typing any quote characters into the HTML.

## How is it used?

Set a language with the `lang` attribute and wrap text in a `<q>` element. The `quotes` rule for that language supplies the marks:

    <p lang="fr"><q>Le web est pour <q>tout le monde</q>, partout.</q></p>

The matching CSS defines the open/close pairs per language and renders them through `::before` / `::after`:

    :lang(fr) {
        quotes: "\00AB\00A0" "\00A0\00BB" "\2039\00A0" "\00A0\203A";
    }

    q::before { content: open-quote; }
    q::after  { content: close-quote; }

Included languages: English, French, German, Russian, and Japanese.

## Why is it useful?

Internationalized, motion-first interfaces still need correct typography. Letting CSS generate quotation marks keeps the content language-agnostic, produces proper nested quotes automatically, and ensures quoted text stays visually polished across locales — all with pure HTML and CSS, no JavaScript.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.
