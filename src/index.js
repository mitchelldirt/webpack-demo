// import your function
import _ from 'lodash';
import './style.css'
import picture from './download.jpeg'

function component() {
  const element = document.createElement('div');
  element.classList.add('doggy')
  const text = document.createElement('p');
  // Lodash, now imported by this script
  text.textContent = _.join(['Hello', 'webpack'], ' ');
  text.classList.add('hello');
  // Add the image to our existing div.
  const myPic = new Image();
  myPic.src = picture;

  element.appendChild(text);
  element.appendChild(myPic);

  return element;
}

document.body.appendChild(component());
