const controlObjectsAttributes = {
  'book__control_font-size': ['book_fs-small', '', 'book_fs-big'],
  'book__control_color': ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'],
  'book__control_background': ['book_bg-black', 'book_bg-gray', 'book_bg-white'],
};
const bookContainer = document.getElementById('book');

function setActiveStyleElement (containerSelector, selectorActivator) {

let controlObjects = [...document.querySelector('.' + containerSelector).querySelectorAll('a')];
let textAttrs = controlObjectsAttributes[containerSelector];

listeners(controlObjects, selectorActivator, textAttrs);
}

function listeners(controlObjects, selectorActivator, textAttrs) {

  controlObjects.forEach((elm, index, arr) => {
    elm.addEventListener('click', (elm) => onClickHandler(elm, index, arr, textAttrs, selectorActivator));    
  });    
};

function onClickHandler(elementSelected, index, arr, textAttrs, selectorActivator) {
  
  elementSelected.preventDefault();
  arr.forEach((elm, idx) => {
    if (idx === index) {
      elm.classList.add(selectorActivator);
      textAttrs[idx] !== '' ? bookContainer.classList.add(textAttrs[idx]): null;      
    } else {
      elm.classList.remove(selectorActivator);
      textAttrs[idx] !== '' ? bookContainer.classList.remove(textAttrs[idx]): null;
    };
  });  
  };

  setActiveStyleElement('book__control_font-size', 'font-size_active');
  setActiveStyleElement('book__control_color', 'color_active');
  setActiveStyleElement('book__control_background', 'color_active');