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
    list.filterHTML.addEventListener('click', filterItem);
    list.filterJavaScript.addEventListener('click', filterItem);
  }


});

function filterItem(e) {
  const element = e.target;
  let eleClass = element.getAttribute("class");
  console.log(element);
  eleClass = ".list__" + eleClass.substring(8);
  console.log(document.querySelector(eleClass));
  
  let delElement = document.querySelectorAll(eleClass);
  for(let i=0;i<delElement.length;i++) {
    while (delElement[i].firstChild) {
      delElement[i].removeChild(delElement[i].firstChild);
    }
  }
}