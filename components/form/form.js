class Form extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const form = document.createElement('form');

    form.innerHTML = `
      <span>Login</span>
      <div class="input-container">
        <my-input placeholder="E-mail" type="email"></my-input>
        <my-input placeholder="Password" type="password"></my-input>
      </div>
      <my-button text="Submit" type="submit"></my-button>
    `;

    form.setAttribute('class', 'form');
    form.querySelector('my-button').addEventListener('click', (e) => {
      e.preventDefault();
      const [emailShadow, passwordShadow] = form.querySelectorAll('my-input');
      const email = emailShadow.shadowRoot.querySelector('input').value;
      const password = passwordShadow.shadowRoot.querySelector('input').value;
      console.log({email, password})
    })

    const style = document.createElement('style');
    style.textContent = `
      .form {
        border: 1px solid #D1D1D1;
        width: 250px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .input-container {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 70px;
      }

      span {
        font-weight: bold;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(form);
  }

  connectedCallback() {
    console.log('Element added to page')
  }

  disconnectedCallback() {
    console.log('Element removed from page.');
  }
}

customElements.define('my-form', Form);