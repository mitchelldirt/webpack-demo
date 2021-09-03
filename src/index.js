// import your function
import _ from 'lodash';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  const text = document.createElement('p');
  text.textContent = _.join(['Hello', 'webpack'], ' ');
  const button = document.createElement('button')
  button.innerHTML = 'click me and check the console!'
  button.onclick = printMe;
  element.appendChild(text);
  element.appendChild(button);
  return element;
}

document.body.appendChild(component());
