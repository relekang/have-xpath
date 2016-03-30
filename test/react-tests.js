/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import { haveXpath } from '../src/index';

import React from './React';
import TestUtils from './TestUtils';

describe('React components', () => {
  it('should return true if valid xpath is found in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(haveXpath(component, '//blink')).to.be.true;
  });

  it('should return true if valid xpath is found in react component twice', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(haveXpath(component, '//blink')).to.be.true;
    expect(haveXpath(component, '//blink')).to.be.true;
  });

  it('should return false if valid xpath is not found in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(haveXpath(component, '//blink')).to.be.true;
  });
});
