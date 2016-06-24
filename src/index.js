/* eslint-env browser */
import { findSingleNode, getFindDOMNode } from './helpers';
export { getFindDOMNode } from './helpers';

function haveDomNodeWithXpath(domNode, expression) {
  document.body.appendChild(domNode);
  const xpathNode = findSingleNode(expression, domNode.parentNode);
  document.body.removeChild(domNode);

  return xpathNode !== null;
}

export function haveXpath(node, xpath) {
  if (node === null) {
    throw new Error('Cannot evaluate xpath on null');
  }

  const findDOMNode = getFindDOMNode();
  const domNode = findDOMNode(node);
  return haveDomNodeWithXpath(domNode, xpath);
}
