document.addEventListener('DOMContentLoaded', () => {
    const btnPedir = document.getElementById('btn-pedir');

    if (btnPedir) {
        btnPedir.addEventListener('click', () => {
            // Desplazamiento suave hacia la sección de productos
            document.getElementById('productos').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    console.log('Página de Panadería Santana cargada correctamente.');
});
