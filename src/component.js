import style from './assets/index.scss';

export default (text = 'hello sevd') => {
    const element = document.createElement('div');
    element.innerHTML = text;
    element.className = style.green;

    return element;
}