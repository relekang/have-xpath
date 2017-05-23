/* eslint-env mocha */
/* eslint-disable no-unused-expressions, react/no-multi-comp, react/prop-types */
import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { haveXpath } from '../src/index';

const { Component } = React;

const CreateClass = React.createClass({ // eslint-disable-line react/prefer-es6-class, react/prefer-stateless-function, max-len
  render() { return <div className="create-class">{this.props.children}</div>; },
});

class ClassBased extends Component { // eslint-disable-line react/prefer-stateless-function
  render() { return <div className="class-based">{this.props.children}</div>; }
}

describe('React components', () => {
  it('should return true if valid xpath is found in React html element', () => {
    const component = TestUtils.renderIntoDocument(<h1>hi</h1>);
    expect(haveXpath(component, '//h1')).to.be.true;
  });

  it('should throw error if component is null', () => {
    expect(() => haveXpath(null, '')).to.throw(Error, 'Cannot evaluate xpath on null');
  });

  it('should return true if valid xpath is found in createClass react component', () => {
    const component = TestUtils.renderIntoDocument(<CreateClass>hi</CreateClass>);
    expect(haveXpath(component, '//div[@class="create-class"][contains(., "hi")]')).to.be.true;
  });

  it('should return true if valid xpath is found in classbased react component', () => {
    const component = TestUtils.renderIntoDocument(<ClassBased>hi</ClassBased>);
    expect(haveXpath(component, '//div[@class="class-based"][contains(., "hi")]')).to.be.true;
  });

  it('should return true if valid xpath is found in react component twice', () => {
    if (/0\.13/.test(React.version)) {
      return;
    }
    const component = TestUtils.renderIntoDocument(<h1>hi</h1>);
    expect(haveXpath(component, '//h1')).to.be.true;
    expect(haveXpath(component, '//h1')).to.be.true;
  });

  it('should return false if valid xpath is not found in react component', () => {
    const component = TestUtils.renderIntoDocument(<h1>hi</h1>);
    expect(haveXpath(component, '//h1')).to.be.true;
  });
});
