export function empty(element) {  
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createElement(el, text, class) {
  const element = document.createElement(el);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  if(class) {
    const elementClass = this.makeAttribute("class", class);
    element.setAttributeNode(elementClass);
  }
  return element;
}

export function makeAttribute(attribute, val) {
  const att = document.createAttribute(attribute);
  att.value = val;
  return att;
}