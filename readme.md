A fork of [https://github.com/blasten/turn.js](https://github.com/blasten/turn.js)
with support for npm/yarn.

## Usage

### JS

```
import $ from 'jquery';
import 'turn.js';

$('#magazine').turn({
  width: 800,
  height: 600,
  autoCenter: true
  // ... plus any extra option you need
});
```

### HTML

```
<div id="magazine">
  <div><span class="text">Page 1</span></div>
  <div><span class="text">Page 2</span></div>
  <div><span class="text">Page 3</span></div>
</div>
```

### CSS

```
#magazine{
  width: 800px;
  height: 400px;
}

#magazine .turn-page{
  background-color:#ccc;
}
```

For the full documentation on the library and all available options, please
refer to [https://github.com/blasten/turn.js](https://github.com/blasten/turn.js).

Basically I just added a package.json file, specified a main entry point + a
dependency (jquery) and fixed a couple of things to make turn.js installable via npm/yarn
and loadable via Webpack in my React project.

I have submitted a PR to the authors of the original libray, but in the meantime
you can use this one, as they don't seem to update their repo regularly.

Latest version uses jQuery 1.12.0 because jQuery 3.x was breaking the page
flipper.
