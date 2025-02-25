class MainContent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <main>
                <section id="destinos">
                    <h2>Destinos Populares</h2>
                    <p>Descubre los lugares más increíbles de El Salvador.</p>
                    <img src="image.png" alt="Playa en El Salvador" width="300">
                </section>

                <section id="gastronomia">
                    <h2>Gastronomía</h2>
                    <p>Prueba los diferentes platillos típicos con los que cuenta nuestro país, 
                    los cuales puedes degustar en restaurantes típicos.</p>
                    <img src="image3.jpg" alt="Pupusas" width="300">
                </section>

                <section id="contacto">
                    <h2>Contacto</h2>
                    <button id="contactBtn">Haz clic para contactarnos</button>
                    <p id="contactMsg" style="display:none; color: green; font-weight: bold;">
                        Gracias por tu interés. ¡Nos pondremos en contacto pronto!
                    </p>
                </section>
            </main>
        `;
    }
}

customElements.define('main-content', MainContent);

document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const contactMsg = document.getElementById('contactMsg');
    const header = document.querySelector('h1');

    if (contactBtn && contactMsg) {
        contactBtn.addEventListener('click', () => {
            contactMsg.style.display = 'block';
            contactBtn.disabled = true; // Evita múltiples clics
            contactBtn.style.background = "#ccc";
        });
    }

    if (header) {
        header.addEventListener('mouseover', () => {
            header.style.color = '#FFD700';
        });

        header.addEventListener('mouseout', () => {
            header.style.color = 'white';
        });
    }
});
