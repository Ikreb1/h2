export function empty(element) {  
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createElement(el, text, eleClass) {
  const element = document.createElement(el);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  if(eleClass) {
    //const elementClass = this.makeAttribute("class", eleClass);
    const elementClass = document.createAttribute("class");
    elementClass.value = eleClass;
    element.setAttributeNode(elementClass);
  }
  return element;
}

export function makeAttribute(attribute, val) {
  const att = document.createAttribute(attribute);
  att.value = val;
  return att;
}