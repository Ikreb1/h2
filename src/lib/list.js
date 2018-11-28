import { empty, createElement } from './helpers';
import { generateImage, generateTitle } from './converter';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
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
    const titleElement = generateTitle(item.title, item.slug);
    this.container.appendChild(titleElement);

    let imageElement = generateImage(item.thumbnail);
    this.container.appendChild(imageElement);
  }

  load() {
    empty(this.container);
    this.loadLectures()
      .then((data) => this.renderData(data));
  }
}