import bar from './bar';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';

import ReactDOM from 'react-dom';
import React from 'react';

bar();
console.log("React object:");
console.log(React);

function initializeComponents() {
  [].slice.call(document.getElementsByClassName("my-component")).map(element => {
    console.log("Initialize component");
    ReactDOM.render(React.createElement(MyComponent, {name: element.getAttribute('data-name')}), element);
  });

  [].slice.call(document.getElementsByClassName("counter")).map(element => {
    console.log("Initialize counter");
    ReactDOM.render(React.createElement(Counter), element);
  });

}

initializeComponents();

window.my = {
  initializeComponents
};

export default my;
