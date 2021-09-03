class Input extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const input = document.createElement('input');
    input.setAttribute('type', this.getAttribute('type') || 'text');
    input.setAttribute('placeholder', this.getAttribute('placeholder') || '');
    input.setAttribute('class', 'input');

    const style = document.createElement('style');
    style.textContent = `
      .input {
        height: 20px;
        border-radius: 4px;
        border: 1px solid #D1D1D1;
        width: 100%;
      }
    `
    shadow.appendChild(style);
    shadow.appendChild(input);
  }
}

customElements.define('my-input', Input);