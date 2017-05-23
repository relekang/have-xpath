/* eslint-env node, browser */
import jsdom from 'jsdom';

const polyfill = (() => {
  let clock = Date.now();

  return (callback) => {
    const currentTime = Date.now();
    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(() => {
        polyfill(callback);
      }, 0);
    }
  };
})();

if (typeof global.document === 'undefined') {
  const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
  global.document = dom.window.document;
  global.window = dom.window;
  global.window.requestAnimationFrame = polyfill;
  global.requestAnimationFrame = polyfill;
}

global.navigator = window.navigator;
