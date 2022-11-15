import print from './print.js';
import Icon from './img/task.svg';
import './style/style.css'


const myImage = new Image();
myImage.src = Icon;
const header = document.querySelector('header');
const title = document.querySelector('.header-title');
header.insertBefore(myImage,title);

print()