/* eslint-env node, browser */
import jsdom from 'jsdom';

if (typeof global.document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = global.document.defaultView;
}

global.navigator = window.navigator;
