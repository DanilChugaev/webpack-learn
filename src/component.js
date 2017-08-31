import style from './assets/scss/index.scss';

export default function() {
    const element = document.createElement('div');
    element.innerHTML = 'hello sevd';
    element.className = style.green;

    return element;
}