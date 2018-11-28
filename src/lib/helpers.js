export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function insert(element) {
  const wowser = document.createElement('div');
  wowser.appendChild(document.createTextNode("this"));
  element.appendChild(wowser);
}
