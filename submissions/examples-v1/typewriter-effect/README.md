# Typewriter Effect

A CSS-only typewriter animation that simulates typing text character by character with a blinking cursor. Great for hero headings, loading messages, or chat interfaces.

## Demo

Open `demo.html` in your browser to see:
- Default speed typewriter
- Fast and slow speed variants
- No cursor variant
- Looping typewriter that types and deletes

## Usage

```html
&lt;!-- Basic typewriter --&gt;
&lt;p class="typewriter" data-text="Hello World"&gt;Hello World&lt;/p&gt;

&lt;!-- Fast speed --&gt;
&lt;p class="typewriter typewriter-fast" data-text="Quick text"&gt;Quick text&lt;/p&gt;

&lt;!-- Slow speed --&gt;
&lt;p class="typewriter typewriter-slow" data-text="Slow reveal"&gt;Slow reveal&lt;/p&gt;

&lt;!-- No cursor --&gt;
&lt;p class="typewriter typewriter-no-cursor" data-text="Clean"&gt;Clean&lt;/p&gt;

&lt;!-- Looping --&gt;
&lt;p class="typewriter typewriter-loop" data-text="Looping text"&gt;Looping text&lt;/p&gt;

&lt;!-- Color variants --&gt;
&lt;p class="typewriter typewriter-green" data-text="Green cursor"&gt;Green cursor&lt;/p&gt;
&lt;p class="typewriter typewriter-red" data-text="Red cursor"&gt;Red cursor&lt;/p&gt;
&lt;p class="typewriter typewriter-orange" data-text="Orange cursor"&gt;Orange cursor&lt;/p&gt;

&lt;!-- Size variants --&gt;
&lt;p class="typewriter typewriter-large" data-text="Large"&gt;Large&lt;/p&gt;
&lt;p class="typewriter typewriter-small" data-text="Small"&gt;Small&lt;/p&gt;