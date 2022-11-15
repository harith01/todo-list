import Icon from './img/task.svg';
import './style/style.css';
import displayForm from './form';


const myImage = new Image();
myImage.src = Icon;
const header = document.querySelector('header');
const title = document.querySelector('.header-title');
header.insertBefore(myImage,title);

document.body.addEventListener('click', (e)=>{
    const { target } = e;
    if (target.id == 'addProject'){
        displayForm();
    }
})