class Button extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.setAttribute('type', this.getAttribute('type') || 'button');
    button.textContent = this.getAttribute('text') || 'Button';
    button.setAttribute('class', 'button');
    const style = document.createElement('style');
    style.textContent = `
      .button {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        color: ${this.getAttribute('textColor') || '#FFF'};
        background-color: ${this.getAttribute('bgColor') || '#03a9fc'};
      }

      .button:hover {
        opacity: 0.8;
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

customElements.define('my-button', Button);