// Componente de Contenido
class MyContent extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente de contenido
    this.shadowRoot.innerHTML = `
      <style>
        section {
          text-align: center;
        }

        button {
          background-color: #E6633C;
          color: #fff;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #B04F32;
        }
      </style>
      
      <section>
        <h2>SUMA ENTRE LOS NUMEROS 100 Y 15.</h2>
        <h3>Por favor abrir el terminal.</h2>

        <button id="customButton"><slot name="button"></slot></button>
      </section>
    `;

    // Agregar un listener al botón para ejecutar la función
    this.shadowRoot.getElementById('customButton').addEventListener('click', () => {
      // Llamar a la función executeSum
      executeSum();
    });
  }
}

// Registrar el componente de contenido
customElements.define('my-content', MyContent);
