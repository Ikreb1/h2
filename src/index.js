import List from './lib/list';
import Lecture from './lib/lecture.js';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');


  
  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();
    
  } else {
    const list = new List();
    list.load();
    list.filterCSS.addEventListener('click', filterItem);
  }


});

function filterItem(e) {
  const element = e.target;
  const eleClass = element.getAttribute("class");
  console.log(document.querySelector(eleClass));
}