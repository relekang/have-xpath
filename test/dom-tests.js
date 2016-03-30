/* eslint-env mocha, browser */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import { haveXpath } from '../src/index';

describe('DOM nodes', () => {
  const element = document.createElement('blink');

  it('should return true if valid xpath is found in react component', () => {
    expect(haveXpath(element, '//blink')).to.be.true;
  });

  it('should return true if valid xpath is found in react component twice', () => {
    expect(haveXpath(element, '//blink')).to.be.true;
    expect(haveXpath(element, '//blink')).to.be.true;
  });

  it('should return false if valid xpath is not found in react component', () => {
    expect(haveXpath(element, '//h1')).to.be.false;
  });
});
