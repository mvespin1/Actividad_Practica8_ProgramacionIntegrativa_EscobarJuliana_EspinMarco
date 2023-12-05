class MyFooter extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de encabezado
      this.shadowRoot.innerHTML = `
        <footer>
          <p>Web Assembly (Wasm)</p>
        </footer>
      `;
    }
  }
  // Registrar el componente de encabezado
  customElements.define('my-footer', MyFooter);
  