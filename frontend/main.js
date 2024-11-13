import { fetchFullPokenea, fetchRawPokenea } from "./src/services/fetchPokeneas";
import { getFullPokenea, getRawPokenea, getPhilosophicalPokenea } from "./src/js/renderRoutes";


const loadPageContent = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const html = await response.text();
            document.getElementById('page-content').innerHTML = html;
        } else {
            document.getElementById('page-content').innerHTML = '<p>Error al cargar la página.</p>';
        }
    } catch (error) {
        console.error('Error al cargar la página:', error);
        document.getElementById('page-content').innerHTML = '<p>Error de conexión.</p>';
    }
};

const getFullPokeneaView = async () => {
    await loadPageContent('/src/pages/full.html');
    
    const button = document.getElementById('get-full-pokenea-btn');
    if (button) {
        getFullPokenea();
        button.addEventListener('click', getFullPokenea);
    } else {
        console.error("No se encontró el botón con ID 'get-full-pokenea-btn'");
    }
};

const getRawPokeneaView = async () => {
  await loadPageContent('/src/pages/raw.html');

  const button = document.getElementById('get-raw-pokenea-btn');
    if (button) {
        getRawPokenea();
        button.addEventListener('click', getRawPokenea);
    } else {
        console.error("No se encontró el botón con ID 'get-full-pokenea-btn'");
    }
};

const getPhilosophicalPokeneaView = async () => {
    await loadPageContent('/src/pages/philosophical.html');

    const button = document.getElementById('get-philosophical-pokenea-btn');
    if (button) {
        getPhilosophicalPokenea();
        button.addEventListener('click', getPhilosophicalPokenea);
    } else {
        console.error("No se encontró el botón con ID 'get-philosophical-pokenea-btn'");
    }
};

page('/', getFullPokeneaView);
page('/raw', getRawPokeneaView);
page('/philosophical', getPhilosophicalPokeneaView);

page();
