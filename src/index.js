// import your function
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const text = document.createElement('p');
  text.textContent = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(text);
  return element;
}

document.body.appendChild(component());
