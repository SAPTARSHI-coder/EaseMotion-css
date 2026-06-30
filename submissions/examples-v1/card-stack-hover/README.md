# Card Stack Hover Effect

A stack of cards that fans out, slides apart, or spreads on hover. Great for showcasing portfolios, product collections, or layered content reveals.

## Demo

Open `demo.html` in your browser to see:

- Fan out: cards rotate and spread horizontally
- Slide apart: cards stack vertically and slide
- Spread: center card scales up, side cards fan out

## Usage

```html
&lt;!-- Fan out stack --&gt; &lt;div class="card-stack card-stack-fan"&gt;
&lt;div class="card-stack-item" style="--i: 0;"&gt; &lt;img src="photo1.jpg"
alt="Card 1"&gt; &lt;/div&gt; &lt;div class="card-stack-item" style="--i:
1;"&gt; &lt;img src="photo2.jpg" alt="Card 2"&gt; &lt;/div&gt; &lt;div
class="card-stack-item" style="--i: 2;"&gt; &lt;img src="photo3.jpg" alt="Card
3"&gt; &lt;/div&gt; &lt;div class="card-stack-item" style="--i: 3;"&gt; &lt;img
src="photo4.jpg" alt="Card 4"&gt; &lt;/div&gt; &lt;/div&gt; &lt;!-- Slide apart
stack --&gt; &lt;div class="card-stack card-stack-slide"&gt; &lt;div
class="card-stack-item" style="--i: 0;"&gt; &lt;div class="card-content"&gt;
&lt;h3&gt;Project A&lt;/h3&gt; &lt;p&gt;Web Design&lt;/p&gt; &lt;/div&gt;
&lt;/div&gt; &lt;div class="card-stack-item" style="--i: 1;"&gt; &lt;div
class="card-content"&gt; &lt;h3&gt;Project B&lt;/h3&gt; &lt;p&gt;Mobile
App&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="card-stack-item"
style="--i: 2;"&gt; &lt;div class="card-content"&gt; &lt;h3&gt;Project
C&lt;/h3&gt; &lt;p&gt;Branding&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
&lt;!-- Spread stack --&gt; &lt;div class="card-stack card-stack-spread"&gt;
&lt;div class="card-stack-item" style="--i: 0;"&gt; &lt;img src="photo1.jpg"
alt="Card 1"&gt; &lt;/div&gt; &lt;div class="card-stack-item" style="--i:
1;"&gt; &lt;img src="photo2.jpg" alt="Card 2"&gt; &lt;/div&gt; &lt;div
class="card-stack-item" style="--i: 2;"&gt; &lt;img src="photo3.jpg" alt="Card
3"&gt; &lt;/div&gt; &lt;/div&gt;
```
