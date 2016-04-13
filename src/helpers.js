
export function getReactDomFindDOMNode() {
  try {
    return require('react-dom').findDOMNode;
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
    return null;
  }
}

export function getReactFindDOMNode() {
  try {
    const React = require('react');
    if (/^0\.13/.test(React.version)) {
      return React.findDOMNode; // eslint-disable-line react/no-deprecated
    }
    return null;
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
    return null;
  }
}

export function getFindDOMNode() {
  const findDOMNode = findDOMNode || (global && global.findDOMNode); // eslint-disable-line no-use-before-define, max-len
  return findDOMNode || getReactFindDOMNode() || getReactDomFindDOMNode();
}

export function getFirstOrderedNodeType() {
  const xpathResult = global && global.XPathResult || window && window.XPathResult;
  if (xpathResult) {
    return xpathResult.FIRST_ORDERED_NODE_TYPE;
  }
  throw new Error('XPathResult is not available');
}

export function findSingleNode(expression, parentNode) {
  return document.evaluate(
    expression,
    parentNode,
    null,
    getFirstOrderedNodeType(),
    null
  ).singleNodeValue;
}
