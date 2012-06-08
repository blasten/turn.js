turn.js 4th release
=========

Get the new turn.js on [turnjs.com](http://www.turnjs.com/)

### What's new?

- Added option `autoCenter`

- Added option `zoom`

- Added property `animating`

- Added property `zoom`

- Added method `center`

- Added method `destroy`

- Added method `is`

- Added method `zoom`

- Added event `missing`

- Added event `zooming`

- Added class `.even`

- Added class `.fixed`

- Added class `.hard`

- Added class `.odd`

- Added class `.own-size`

- Added class `.sheet`

- Added the ignore attribute

- New turn.html4.js

- New scissors.js

- Changed the class `.turn-page` to `.page`

- Improved the animation frame generator with requestAnimationFrame

- Improved the animation speed for hard pages with CSS3 transitions

- Redesigned the event sequence to listen to only three events

- Fixed issue #79

- Fixed issue #91

- Fixed issue about the event order turning + turned

- Fixed issue about appending pages in wrong locations

Available only on [turnjs.com](http://www.turnjs.com/)

* * *

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

#### Requirements

jQuery 1.7 or later

#### Browser support
* Chrome 12, Safari 5, Firefox 10, IE 9

#### License
Released under a non-commercial BSD license

[Full documentation](https://github.com/blasten/turn.js/wiki/Reference)

* * *

[turnjs.com](http://www.turnjs.com/)
