
export function getReactDomFindDOMNode() {
  return require('react-dom').findDOMNode;
}

export function getFindDOMNode() {
  const findDOMNode = findDOMNode || (global && global.findDOMNode); // eslint-disable-line no-use-before-define, max-len
  return findDOMNode || getReactDomFindDOMNode();
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
