import { empty, insert } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
    insert(this.container);
  }
}