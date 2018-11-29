import { empty, createElement } from './helpers';
import { generateImage, generateTitle } from './converter';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
    this.filterHTML = document.querySelector('.filter__html');
    this.filterCSS = document.querySelector('.filter__css');
    this.filterJavaScript = document.querySelector('.filter__html');
    this.filter = [this.filterHTML, this.filterCSS, this.filterJavaScript];
  }

  loadLectures() {
    return fetch(this.url)
      .then((res) => {
        if(!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      });
  }

  renderData(data) {
    data.lectures.map((item) => {
      this.renderItem(item);
    });
  }

  renderItem(item){
    const divContainer = createElement("div", "", "list__item");
    const titleElement = generateTitle(item.title, item.slug);
    divContainer.appendChild(titleElement);

    let imageElement = generateImage(item.thumbnail);
    divContainer.appendChild(imageElement);
    
    this.container.appendChild(divContainer);
  }

  load() {
    empty(this.container);
    this.loadLectures()
      .then((data) => this.renderData(data));
  }
}