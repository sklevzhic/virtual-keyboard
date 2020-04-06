export class Button {
    constructor ({code, en, ru, spec, print}) {
        this.code = code;
        this.en = en;
        this.ru = ru;
        this.print = print;
        this.spec = spec;
    }

    

    generateButton() {
        let template = '';
        let button = document.createElement('div');
        
        if (this.print === false) {
            button.className = 'keyboard__button keyboard__button--spec';
        } else {
            button.className = 'keyboard__button';
        }

        button.setAttribute('data-code',`${this.code}`)
        if (this.print === false) {
            template += `<span class="layout layout-stable">${this.en}</span>`;
        } else if (this.en === this.ru) {
            template += `<span class="layout layout--active">${this.en}</span>`;
            template += `<span class="layout layout-spec">${this.spec}</span>`;
        } else {
            template += `<span class="layout layout--active">${this.en}</span>`;
            template += `<span class="layout">${this.ru}</span>`;
        }
        

        button.innerHTML = template;
        return button
    }
}