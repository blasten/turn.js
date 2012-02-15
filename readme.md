turn.js
=========

### The awesome paper-like effect made for HTML5

Turn.js is a plugin for jQuery that adds a beautiful transition similar 
to real pages in a book or magazine. It works in all modern browsers including
touch devices. 


#### Example

**CSS code:**
<pre>
#magazine .turn-page{
	background-color:#ccc;
}
</pre>

**HTML code:**
<pre>
&lt;div id=<span class="string">'magazine'</span>&gt;
	&lt;div&gt; <span class="text">Page 1</span> &lt;/div&gt;
	&lt;div&gt; <span class="text">Page 2</span> &lt;/div&gt;
	&lt;div&gt; <span class="text">Page 3</span> &lt;/div&gt;
&lt;/div&gt;
</pre>

**JavaScript code:**
<pre>
$('#magazine').turn({width:800, height: 400, page: 1, shadows: true, acceleration: true});
</pre>

#### Requeriments

jQuery 1.7 or later


[Full documentation on turnjs.com/#reference](http://www.turnjs.com/#reference)

* * *

turn.js is licensed under MIT license.

[turnjs.com](http://www.turnjs.com/)
