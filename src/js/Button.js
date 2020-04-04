export class Button {
    constructor ({code, en, ru, print}) {
        this.code = code;
        this.en = en;
        this.ru = ru;
        this.print = print;
    }

    

    generateButton() {
        let template = '';
        let button = document.createElement('div');
        button.className = 'keyboard__button';
        button.setAttribute('data-code',`${this.code}`)
        if (this.print === false) {
            template += `<span class="layout layout-stable">${this.en}</span>`;
        } else {
            template += `<span class="layout layout--active">${this.en}</span>`;
            template += `<span class="layout">${this.ru}</span>`;
        }
        

        button.innerHTML = template;
        return button
    }
}