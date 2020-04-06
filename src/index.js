import { Button  } from './js/Button';

const buttons = [
    {code: 'Backquote', en: '`', ru: 'ё', print: true},
    {code: 'Digit1', en: '1', ru: '1', spec: '!', print: true},
    {code: 'Digit2', en: '2', ru: '2', spec: '@', print: true},
    {code: 'Digit3', en: '3', ru: '3', spec: '#',  print: true},
    {code: 'Digit4', en: '4', ru: '4', spec: '$',  print: true},
    {code: 'Digit5', en: '5', ru: '5', spec: '%',  print: true},
    {code: 'Digit6', en: '6', ru: '6', spec: '^',  print: true},
    {code: 'Digit7', en: '7', ru: '7', spec: '&',  print: true},
    {code: 'Digit8', en: '8', ru: '8', spec: '*',  print: true},
    {code: 'Digit9', en: '9', ru: '9', spec: '(',  print: true},
    {code: 'Digit0', en: '0', ru: '0',spec: ')', print: true},
    {code: 'Minus', en: '-', ru: '-', spec: '_',  print: true},
    {code: 'Equal', en: '=', ru: '=', spec: '+',  print: true},
    {code: 'Backspace', en: 'Backspace', ru: 'Backspace', print: false},
    { code: 'Tab', en: 'Tab', ru: 'Tab', print: false},
    { code: 'KeyQ', en: 'q', ru: 'й', print: true},
    { code: 'KeyW', en: 'w', ru: 'ц', print: true},
    { code: 'KeyE', en: 'e', ru: 'у', print: true},
    { code: 'KeyR', en: 'r', ru: 'к', print: true},
    { code: 'KeyT', en: 't', ru: 'е', print: true},
    { code: 'KeyY', en: 'y', ru: 'н', print: true},
    { code: 'KeyU', en: 'u', ru: 'г', print: true},
    { code: 'KeyI', en: 'i', ru: 'ш', print: true},
    { code: 'KeyO', en: 'o', ru: 'щ', print: true},
    { code: 'KeyP', en: 'p', ru: 'з', print: true},
    { code: 'BracketLeft', en: '[', ru: 'х', print: true},
    { code: 'BracketRight', en: ']', ru: 'ъ', print: true},
    { code: 'Backslash', en: '\\', ru: '\\', spec: '|', print: true},
    { code: 'Delete', en: 'DEL', ru: 'DEL', print: false},
    { code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', print: false},
    { code: 'KeyA', en: 'a', ru: 'ф', print: true},
    { code: 'KeyS', en: 's', ru: 'ы', print: true},
    { code: 'KeyD', en: 'd', ru: 'в', print: true},
    { code: 'KeyF', en: 'f', ru: 'а', print: true},
    { code: 'KeyG', en: 'g', ru: 'п', print: true},
    { code: 'KeyH', en: 'h', ru: 'р', print: true},
    { code: 'KeyJ', en: 'j', ru: 'о', print: true},
    { code: 'KeyK', en: 'k', ru: 'л', print: true},
    { code: 'KeyL', en: 'l', ru: 'д', print: true},
    { code: 'Semicolon', en: ';', ru: 'ж', print: true},
    { code: 'Quote', en: '\'', ru: 'э', print: true},
    { code: 'Enter', en: 'Enter', ru: 'Enter', print: false},
    { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', print: false},
    { code: 'KeyZ', en: 'z', ru: 'я', print: true},
    { code: 'KeyX', en: 'x', ru: 'ч', print: true},
    { code: 'KeyC', en: 'c', ru: 'с', print: true},
    { code: 'KeyV', en: 'v', ru: 'м', print: true},
    { code: 'KeyB', en: 'b', ru: 'и', print: true},
    { code: 'KeyN', en: 'n', ru: 'т', print: true},
    { code: 'KeyM', en: 'm', ru: 'ь', print: true},
    { code: 'Comma', en: ',', ru: 'б', print: true},
    { code: 'Period', en: '.', ru: 'ю', print: true},
    { code: 'Slash', en: '\/', ru: '.', print: true},
    { code: 'ArrowUp', en: '▲', ru: '▲', print: false},
    { code: 'ShiftRight', en: 'Shift', ru: 'Shift', print: false},
    { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', print: false},
    { code: 'MetaLeft', en: 'Win', ru: 'Win', print: false},
    { code: 'AltLeft', en: 'Alt', ru: 'Alt', print: false},
    { code: 'Space', en: ' ', ru: ' ', spec: ' ', print: true},
    { code: 'AltRight', en: 'Alt', ru: 'Alt', print: false},
    { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', print: false},
    { code: 'ArrowLeft', en: '◄', ru: '◄', print: false},
    { code: 'ArrowDown', en: '▼', ru: '▼', print: false},
    { code: 'ArrowRight', en: '►', ru: '►', print: false},
];
    let buttonsArray = [];
    let caretAt;
    let lang = 0;

let body = document.querySelector('body');

// header
let header = document.createElement('header')
    header.classList = 'keyboard__header';
    body.appendChild(header);

let container = document.createElement('div');
    container.classList = 'container';
    header.appendChild(container);
    

let logo = document.createElement('h1');
    logo.classList = 'logo';
    container.appendChild(logo)

let logoText = document.createTextNode('Virtual Keyboard')
    logo.appendChild(logoText)

// main
let main = document.createElement('main');
    main.classList = 'keyboard__main';
    body.appendChild(main);
    
    container = document.createElement('div');
    container.classList = 'container';
    main.appendChild(container);

let textareaWrapper = document.createElement('div')
    textareaWrapper.classList = 'keyboard__wrapper';
    container.appendChild(textareaWrapper);

let inputText = document.createElement('textarea');
    inputText.classList = 'keyboard__input';
    inputText.autofocus = true;
    inputText.setAttribute('id', 'keyboard');
    textareaWrapper.appendChild(inputText);

let keyboardWrapper = document.createElement('label')
    keyboardWrapper.classList = 'keyboard';
    keyboardWrapper.setAttribute('for', 'keyboard');
    container.appendChild(keyboardWrapper);

let textmore = document.createElement('p');
    textmore.classList = 'text__more';
    textmore = document.createTextNode('Virtual Keyboard');
    keyboardWrapper.append(textmore)


// consts

window.onload = function () {

    renderButtons();


    

    inputText.addEventListener('click', e => {  // перемещение курсора
        caretAt = inputText.selectionStart;
    })

    this.document.addEventListener('keydown', keyboardKeyProcessing)
    keyboardWrapper.addEventListener('mousedown', onScreenKeyboardSet); //набор текста с экранной клавиатуры
        inputText.addEventListener('keydown', backliteButtons);    // подсветка клавиатуры
    keyboardWrapper.addEventListener('mouseup', deleteBackliteButtons); 
    inputText.addEventListener('keyup', deleteBackliteButtons); // удаление подсветки клавиатуры
    
}

//  render buttons
function renderButtons() {
    keyboardWrapper.innerHTML = '';
    generateButtons(buttons).forEach(el => {
        keyboardWrapper.append(el.generateButton())
    });
}

function generateButtons() {
    
    buttons.forEach(el => {
            buttonsArray.push(new Button(el))
    })
    return buttonsArray;
}


const onScreenKeyboardSet = (e) => {
    let arr = document.querySelector('textarea').value.split("");
    let temp = e.target;

    if (e.target.classList.contains('layout')) {
        temp = e.target.offsetParent;
    }

    
    caretAt = inputText.selectionStart;


    if (e.target.className !== 'keyboard__button--spec') {
        let clild = temp.childNodes; 
        let letter;
    
        clild.forEach(el => {   
            if (el.classList.contains('layout--active')) { 
                letter = el.outerText
            }
        })
    
        arr.splice(caretAt, 0, letter);
        document.querySelector('textarea').value = arr.join("");
        inputText.selectionStart = inputText.selectionEnd = caretAt + 1;
    }

    if (temp.getAttribute("data-code") === 'Delete') {
        caretAt = inputText.selectionStart;
        arr.splice(caretAt, 1);
        document.querySelector('textarea').value = arr.join("");
        inputText.selectionStart = inputText.selectionEnd = caretAt - 1;
    }

    if (temp.getAttribute("data-code") === 'Backspace') {
        arr.splice(caretAt-1, 1);
        document.querySelector('textarea').value = arr.join("");
        inputText.selectionStart = inputText.selectionEnd = caretAt - 1;
    }

    if (temp.getAttribute("data-code") === 'Tab') {
        caretAt = inputText.selectionStart;
        arr.splice(caretAt, 0, '    ');
        document.querySelector('textarea').value = arr.join("");
        inputText.selectionStart = inputText.selectionEnd = caretAt + 3;
    }

    if (temp.getAttribute("data-code") === 'Space') {
            caretAt = inputText.selectionStart;
            arr.splice(caretAt, 0, ' ');
            document.querySelector('textarea').value = arr.join("");
            inputText.selectionStart = inputText.selectionEnd = caretAt;
    }

    if (temp.getAttribute("data-code") === 'Enter') {
            inputText.focus();
            arr.splice(caretAt, 0, '\n');
            document.querySelector('textarea').value = arr.join("");
            inputText.selectionStart = inputText.selectionEnd = caretAt + 1;
    }

    if (temp.getAttribute("data-code") === 'ArrowLeft') {
        inputText.focus();
        // caretAt = inputText.selectionStart;
        inputText.selectionStart = inputText.selectionEnd = caretAt - 1 ;
    }

    if (temp.getAttribute("data-code") === 'ArrowRight') {
        inputText.focus();
        caretAt = inputText.selectionStart;
        inputText.selectionStart = inputText.selectionEnd = caretAt ;
    }

    // if (temp.getAttribute("data-code") === 'AltLeft') {
    //     if (temp.classList.contains('active')) {
    //         // console.log(e);
    //     }
    // }

    let alt = document.querySelector('div[data-code="AltLeft"]')
    // let shift = document.querySelector('div[data-code="ShiftLeft"]')
    if (alt.classList.contains('active') && (e.target.getAttribute("data-code") === 'ShiftLeft')) {
        selectLanguage()
        alt.classList.remove('active');
    } 

    if (temp.className === 'keyboard__button keyboard__button--spec active')  {
        capsLockOff(e);
    } else if ((temp.className === 'keyboard__button keyboard__button--spec') && (temp.getAttribute("data-code") === 'CapsLock')) {
        capsLockOn(e);     
    }
    
    if (temp.classList.contains('keyboard__button'))  {
        backliteButtons(e);
    }

}

// обработка кликов на клавиатуре
const keyboardKeyProcessing = (e) => {
    if (e.shiftKey && e.altKey) {
        selectLanguage()
    } 
   
    if (e.getModifierState('CapsLock') === true) {
        capsLockOn(e);
    } else {
        capsLockOff(e);
    }    
}

// capsLock
const capsLockOn = (e) => {
    if (e.type === 'keydown') {
        document.querySelector(`div[data-code="CapsLock"]`).classList.add('active');
        document.querySelectorAll('.keyboard__button').forEach(el => {
            if (el.className === 'keyboard__button') {
                el.classList.add('keyboard__button--upper')
            }
        })
    } else {
        let temp = e.target;
        if (e.target.classList.contains('layout')) {
            temp = e.target.offsetParent;
        }
    
        temp.classList.add('active');
        inputText.selectionStart = inputText.selectionEnd = caretAt + 3;
        document.querySelectorAll('.keyboard__button').forEach(el => {
            if (el.className === 'keyboard__button') {
                el.classList.add('keyboard__button--upper')
            }
        })
    }


}

const capsLockOff = (e) => {
    if (e.type === 'keydown') {
        document.querySelector(`div[data-code="CapsLock"]`).classList.remove('active');
        document.querySelectorAll('.keyboard__button').forEach(el => {
            el.classList.remove('keyboard__button--upper')
            })
    } else {
        let temp = e.target;
        if (e.target.classList.contains('layout')) {
            temp = e.target.offsetParent;
        }
        temp.classList.remove('active');
        inputText.selectionStart = inputText.selectionEnd = caretAt + 3;
        document.querySelectorAll('.keyboard__button').forEach(el => {
        el.classList.remove('keyboard__button--upper')
        })
    }

}





// выбор языка
const selectLanguage = () => {
    buttons.forEach(el => {
        if (el.print === true) {
            document.querySelectorAll(`div[data-code=${el.code}] span`)[0].classList.toggle('layout--active')
            document.querySelectorAll(`div[data-code=${el.code}] span`)[1].classList.toggle('layout--active')
        }
    })
} 

// //  подсветка при наборе с клавиатуры
const backliteButtons = (e) => {
    let temp = e.target;
    if (e.target.classList.contains('layout')) {
        temp = e.target.offsetParent;
    }
    if ((temp.getAttribute("data-code") !== 'CapsLock') && (e.code !== 'CapsLock') || (temp.getAttribute("data-code") !== 'AltLeft'))  {

        if (temp.classList.contains('keyboard__button')) {
            temp.classList.add('active');
        }
        if (e.type === 'keydown')  {
            document.querySelector(`div[data-code="${e.code}"`).classList.add('active');
        } 
        if (temp.getAttribute("data-code") === 'CapsLock') {
            temp.classList.add('active');
        } 
        if (temp.getAttribute("data-code") === 'AltLeft') {
            temp.classList.add('active');
        } 
    }



    
}

// // удаление подсветки
const deleteBackliteButtons = (e) => {
    let temp = e.target;
    if (e.target.classList.contains('layout')) {
        temp = e.target.offsetParent;
    }
    if (((temp.getAttribute("data-code") !== 'CapsLock') && (e.code !== 'CapsLock'))  && (temp.getAttribute("data-code") !== 'AltLeft')) {
        let tempCode;
        if (e.type === 'keyup')  {
            tempCode = e.code;
        } else if (e.type === 'mouseup') {
            tempCode = temp.dataset.code;
        } 
        document.querySelector(`div[data-code="${tempCode}"`).classList.remove('active')
    }


    
    


}