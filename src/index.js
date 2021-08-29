// import your function
import myName from './myName';
import './style.css'

function component() {
  const element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  element.classList.add('hello')
  return element;
}

document.body.appendChild(component());