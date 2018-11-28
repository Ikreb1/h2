export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createElement(el, text) {
  const element = document.createElement(el);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
}

export function makeAttribute(attribute, val) {
  const att = document.createAttribute(attribute);
  att.value = val;
  return att;
}