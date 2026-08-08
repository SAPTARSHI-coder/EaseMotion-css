# Floating Labels Form Input

Animated form inputs where the placeholder label floats above the field on focus or when content is entered. No JavaScript required — pure CSS using `:placeholder-shown`.

## Demo

Open `demo.html` in your browser to see:
- Default bordered floating labels
- Underline style (no background)
- Filled style (gray background)
- Input fields with icons
- Textarea support

## Usage

```html
&lt;!-- Default style --&gt;
&lt;div class="float-group"&gt;
  &lt;input type="text" id="name" placeholder=" " required&gt;
  &lt;label for="name"&gt;Full Name&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Underline style --&gt;
&lt;div class="float-group float-underline"&gt;
  &lt;input type="email" id="email" placeholder=" " required&gt;
  &lt;label for="email"&gt;Email Address&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Filled style --&gt;
&lt;div class="float-group float-filled"&gt;
  &lt;input type="password" id="password" placeholder=" " required&gt;
  &lt;label for="password"&gt;Password&lt;/label&gt;
&lt;/div&gt;

&lt;!-- With icon --&gt;
&lt;div class="float-group float-icon"&gt;
  &lt;span class="float-icon-left"&gt;👤&lt;/span&gt;
  &lt;input type="text" id="user" placeholder=" " required&gt;
  &lt;label for="user"&gt;Username&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Textarea --&gt;
&lt;div class="float-group"&gt;
  &lt;textarea id="message" placeholder=" " rows="4" required&gt;&lt;/textarea&gt;
  &lt;label for="message"&gt;Your Message&lt;/label&gt;
&lt;/div&gt;