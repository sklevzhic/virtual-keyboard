export class Button {
    constructor ({code, en, ru}) {
        this.code = code;
        this.en = en;
        this.ru = ru;
    }

    

    generateButton() {
        let template = '';
        let button = document.createElement('div');
        button.className = 'keyboard__button';
        button.setAttribute('data-code',`${this.code}`)
        
        template += `<span>${this.en}</span>`;
        button.innerHTML = template;
        return button
    }
}