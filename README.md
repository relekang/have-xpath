# have-xpath
> haveXpath(element, '//blink')

## Installation
```bash
> npm install --save-dev have-xpath
```

## Development
```bash
> npm install
> npm run watch
```

## Usage

```javascript
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var haveXpath = require('have-xpath');

var component = TestUtils.renderIntoDocument(<h1>hi there o/</h1>);

haveXpath(component, '//h1') // => true
```

----------------------

MIT © Rolf Erik Lekang
