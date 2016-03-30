/* eslint-env browser */
import { findSingleNode, getReactDomFindDOMNode, getReactFindDOMNode } from './helpers';

let findDOMNode = findDOMNode || (global && global.findDOMNode); // eslint-disable-line no-use-before-define, max-len

function haveDomNodeWithXpath(domNode, expression) {
  document.body.appendChild(domNode);
  const xpathNode = findSingleNode(expression, domNode.parentNode);
  document.body.removeChild(domNode);

  return xpathNode !== null;
}

export function getFindDOMNode() {
  return getReactDomFindDOMNode() || getReactFindDOMNode();
}

export function haveXpath(node, xpath) {
  findDOMNode = findDOMNode || getFindDOMNode();

  const domNode = findDOMNode(node);
  return haveDomNodeWithXpath(domNode, xpath);
}
