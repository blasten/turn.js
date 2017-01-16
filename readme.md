A fork of [https://github.com/blasten/turn.js](https://github.com/blasten/turn.js)
with support for npm/yarn.

Usage:

```
import $ from 'jquery';
import 'turn.js';

$('#flipbook').turn({
  width: 800,
  height: 600,
  autoCenter: true
  // ... plus any extra option you need
});
```

Basically I just added a package.json file and specified a main entry point + a
dependency (jquery) to make turn.js installable via npm/yarn.

I have submitted a PR to the authors of [https://github.com/blasten/turn.js](https://github.com/blasten/turn.js) but in the meantime you can use this one, as they don't seem to update their repo regularly.

Latest version uses jQuery 1.12.0 because jQuery 3.x was breaking the page
flipper.
