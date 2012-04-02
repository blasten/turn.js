turn.js 3rd release
=========

### Make a flip book with HTML5

Turn.js is a plugin for jQuery that adds a beautiful transition similar to real pages in a book or magazine. It works in all modern browsers including touch devices.

### What's new?

- New `addPage` for creating pages dynamically.

- New `display` for single and double pages.

- Gradients for non-webkit browsers.

#### Usage

**CSS code:**
<pre>
#magazine{
	width: 800px;
	height: 400px;
}
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
$('#magazine').turn({gradients: true, acceleration: true});
</pre>

#### Requeriments

jQuery 1.7 or later



[Full documentation](https://github.com/blasten/turn.js/wiki/Reference)

* * *

turn.js is licensed under MIT license.

[turnjs.com](http://www.turnjs.com/)
