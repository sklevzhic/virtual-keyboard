import { Button  } from './js/Button';

const buttons = [
[
    {code: 'Backquote', en: '`', ru: 'ё'},
    {code: 'Digit1', en: '1', ru: '1'},
    {code: 'Digit2', en: '2', ru: '2'},
    {code: 'Digit3', en: '3', ru: '3'},
    {code: 'Digit4', en: '4', ru: '4'},
    {code: 'Digit5', en: '5', ru: '5'},
    {code: 'Digit6', en: '6', ru: '6'},
    {code: 'Digit7', en: '7', ru: '7'},
    {code: 'Digit8', en: '8', ru: '8'},
    {code: 'Digit9', en: '9', ru: '9'},
    {code: 'Digit0', en: '0', ru: '0'},
    {code: 'Minus', en: '-', ru: '-'},
    {code: 'Equal', en: '=', ru: '='},
    {code: 'Backspace', en: 'Backspace', ru: 'Backspace'}
],
[
    {code: 'Backquote', en: '`', ru: 'ё'},
    {code: 'Digit1', en: '1', ru: '1'},
    {code: 'Digit2', en: '2', ru: '2'},
    {code: 'Digit3', en: '3', ru: '3'},
    {code: 'Digit4', en: '4', ru: '4'},
    {code: 'Digit5', en: '5', ru: '5'},
    {code: 'Digit6', en: '6', ru: '6'},
    {code: 'Digit7', en: '7', ru: '7'},
    {code: 'Digit8', en: '8', ru: '8'},
    {code: 'Digit9', en: '9', ru: '9'},
    {code: 'Digit0', en: '0', ru: '0'},
    {code: 'Minus', en: '-', ru: '-'},
    {code: 'Equal', en: '=', ru: '='},
    {code: 'Backspace', en: 'Backspace', ru: 'Backspace'}
]];

let string = '';

let body = document.querySelector('body');
let header = document.createElement('header')
    header.classList = 'keyboard__header';
    body.appendChild(header);

let container = document.createElement('div');
    container.classList = 'container';
    header.appendChild(container);
    

let logo = document.createElement('h1');
    logo.classList = 'logo';
    container.appendChild(logo)

let logoText = document.createTextNode('Virtuak Keboard')
    logo.appendChild(logoText)

// main

let main = document.createElement('main');
    main.classList = 'keyboard__main';
    body.appendChild(main);
    
    container = document.createElement('div');
    container.classList = 'container';
    main.appendChild(container);

let keyboardWrapper = document.createElement('div')
    keyboardWrapper.classList = 'keyboard__wrapper';
    container.appendChild(keyboardWrapper);


let inputText = document.createElement('textarea');
    inputText.classList = 'keyboard__input';
    keyboardWrapper.appendChild(inputText);


let keyboardButtons = document.createElement('div')
    keyboardButtons.classList = 'keyboard__buttons';
    container.appendChild(keyboardButtons);

    renderButtons();
function renderButtons() {
    keyboardButtons.innerHTML = '';
    generateButtons(buttons).forEach(el => {
        keyboardButtons.append(el.generateButton())
    });
}

function generateButtons() {
    let buttonsArray = [];

    
    buttons.forEach(el => {
        el.forEach(elem => {
            buttonsArray.push(new Button(elem))
        })
    })

    return buttonsArray;
}


document.querySelector('textarea').addEventListener('input',function(e) {
   string = document.querySelector('textarea').value;

   document.querySelector('.keyboard__buttons').addEventListener('click', addLetterFromVirtualKeyboard)
   
})

const addLetterFromVirtualKeyboard = (e) => {
    console.log(string)
    string +=e.target.outerText;
    document.querySelector('textarea').value = string

    if (e.target.outerText === 'Backspace') {
        e.preventDefault();
        deleteLetterFromVirtualKeyboard(e);
    }
}

const deleteLetterFromVirtualKeyboard = (e) => {
    string = string.substring(0, string.length - 10);
    document.querySelector('textarea').value = string;  
}

inputText.addEventListener('keyup', deleteBackliteButtons);
inputText.addEventListener('keydown', backliteButtons);


function backliteButtons(e) {

    buttons.forEach(el => {
        el.forEach(el1 => {655
            if (e.code === el1.code) {
                getButton(e);
            }
        })
    })
}

const getButton = (e) => {
    let el11 = document.querySelector(`div[data-code="${(e.code)}"`);
    el11.classList.add('active')
}

function deleteBackliteButtons(e) {
    let el11 = document.querySelector(`div[data-code="${(e.code)}"`);
    el11.classList.remove('active')

}