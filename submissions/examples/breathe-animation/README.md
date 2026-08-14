# Breathe Meditation Animation

A slow scale-in/out pulse animation following the 4-4-4-4 breathing rhythm (inhale-hold-exhale-hold) for mindfulness apps, loading screens, or calm UI elements.

## Demo

Open `demo.html` in your browser to see:
- Default breathe circle (4-4-4-4 rhythm, 16s)
- Fast variant (3-3-3-3 rhythm, 12s)
- Slow variant (5-5-5-5 rhythm, 20s)
- Text-guided breathing with "Inhale/Exhale" labels
- Minimal ring style

## Usage

```html
&lt;!-- Basic breathe circle --&gt;
&lt;div class="breathe"&gt;&lt;/div&gt;

&lt;!-- Fast rhythm --&gt;
&lt;div class="breathe breathe-fast"&gt;&lt;/div&gt;

&lt;!-- Slow rhythm --&gt;
&lt;div class="breathe breathe-slow"&gt;&lt;/div&gt;

&lt;!-- With text labels --&gt;
&lt;div class="breathe breathe-with-text"&gt;
  &lt;span class="breathe-in"&gt;Inhale&lt;/span&gt;
  &lt;span class="breathe-out"&gt;Exhale&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Ring style --&gt;
&lt;div class="breathe breathe-ring"&gt;&lt;/div&gt;

&lt;!-- Color variants --&gt;
&lt;div class="breathe breathe-green"&gt;&lt;/div&gt;
&lt;div class="breathe breathe-blue"&gt;&lt;/div&gt;
&lt;div class="breathe breathe-purple"&gt;&lt;/div&gt;
&lt;div class="breathe breathe-orange"&gt;&lt;/div&gt;

&lt;!-- Size variants --&gt;
&lt;div class="breathe breathe-large"&gt;&lt;/div&gt;
&lt;div class="breathe breathe-small"&gt;&lt;/div&gt;

&lt;!-- Multiple concentric rings --&gt;
&lt;div class="breathe breathe-rings"&gt;&lt;/div&gt;