/* =========================================================
   ÉCLIPSE PARFUMS - Lógica de la página
   1. Catálogo de productos
   2. Navegación entre secciones
   3. Mostrar productos, filtros y buscador
   4. Carrito de compras
   5. Pago (checkout)
   6. Formulario de contacto
   7. SBDDA - asistente de chat
   ========================================================= */

/* ---------- 1. CATÁLOGO DE PRODUCTOS ----------
   foto:      nombre del archivo dentro de img/perfumes/ (sin el .jpg)
   etiquetas: "masvendido", "nuevo", "oferta"
   familia:   "dulce", "fresco", "amaderado", "floral"
   ocasion:   "dia", "noche"
   Precios en dólares (USD), aproximados de referencia. */
const productos = [
    // ===================== HOMBRE =====================
    { id: 1,  nombre: "Sauvage Eau de Parfum", marca: "Dior", genero: "hombre", precio: 155, etiquetas: ["masvendido"], familia: ["fresco", "amaderado"], ocasion: ["dia", "noche"], notas: "Bergamota, pimienta y ambroxán.", foto: "sauvage", color: "#2a3b55" },
    { id: 2,  nombre: "Bleu de Chanel", marca: "Chanel", genero: "hombre", precio: 165, etiquetas: ["masvendido"], familia: ["amaderado", "fresco"], ocasion: ["dia"], notas: "Cítricos, incienso y cedro.", foto: "bleu-de-chanel", color: "#1d2a44" },
    { id: 3,  nombre: "1 Million Elixir", marca: "Rabanne", genero: "hombre", precio: 135, precioAntes: 160, etiquetas: ["masvendido", "oferta"], familia: ["dulce"], ocasion: ["noche"], notas: "Manzana, rosa, haba tonka y maderas.", foto: "1-million", color: "#b8902f" },
    { id: 4,  nombre: "Invictus Victory Elixir", marca: "Rabanne", genero: "hombre", precio: 130, precioAntes: 150, etiquetas: ["oferta"], familia: ["dulce", "amaderado"], ocasion: ["noche"], notas: "Incienso, vainilla y haba tonka.", foto: "invictus", color: "#111111" },
    { id: 5,  nombre: "Le Male Elixir", marca: "Jean Paul Gaultier", genero: "hombre", precio: 150, etiquetas: ["nuevo"], familia: ["dulce"], ocasion: ["noche"], notas: "Lavanda, miel y tabaco.", foto: "le-male-elixir", color: "#3a2a1a" },
    { id: 6,  nombre: "212 VIP Black", marca: "Carolina Herrera", genero: "hombre", precio: 115, etiquetas: ["masvendido"], familia: ["dulce"], ocasion: ["noche"], notas: "Absenta, lavanda y vainilla negra.", foto: "212-vip-black", color: "#151515" },
    { id: 7,  nombre: "Stronger With You Intensely", marca: "Emporio Armani", genero: "hombre", precio: 120, precioAntes: 140, etiquetas: ["oferta"], familia: ["dulce"], ocasion: ["noche"], notas: "Castaña, canela y vainilla.", foto: "stronger-with-you-intensely", color: "#7a2e1e" },
    { id: 8,  nombre: "Born in Roma Uomo Intense", marca: "Valentino", genero: "hombre", precio: 135, etiquetas: ["nuevo"], familia: ["amaderado", "dulce"], ocasion: ["noche"], notas: "Vainilla, lavanda y vetiver.", foto: "born-in-roma-uomo-intense", color: "#3b1d1d" },
    { id: 9,  nombre: "9PM", marca: "Afnan", genero: "hombre", precio: 55, precioAntes: 65, etiquetas: ["masvendido", "oferta"], familia: ["dulce"], ocasion: ["noche"], notas: "Manzana, canela y vainilla.", foto: "9pm", color: "#222222" },
    { id: 10, nombre: "Acqua di Giò Profondo", marca: "Giorgio Armani", genero: "hombre", precio: 125, etiquetas: ["nuevo"], familia: ["fresco"], ocasion: ["dia"], notas: "Notas marinas, bergamota y romero.", foto: "acqua-di-gio-profondo", color: "#1f4e6b" },
    { id: 21, nombre: "L'Eau d'Issey pour Homme", marca: "Issey Miyake", genero: "hombre", precio: 95, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Yuzu, nuez moscada y vetiver.", foto: "leau-dissey-homme", color: "#9aa3a8" },
    { id: 22, nombre: "Infusion d'Iris", marca: "Prada", genero: "hombre", precio: 150, etiquetas: [], familia: ["fresco", "amaderado"], ocasion: ["dia"], notas: "Iris, mandarina e incienso.", foto: "prada-infusion-iris", color: "#b9d3b0" },
    { id: 23, nombre: "Oud Wood", marca: "Tom Ford", genero: "hombre", precio: 295, etiquetas: ["masvendido"], familia: ["amaderado"], ocasion: ["noche"], notas: "Oud, sándalo y cardamomo.", foto: "oud-wood", color: "#3a2a20" },
    { id: 24, nombre: "Boss Bottled Parfum", marca: "Hugo Boss", genero: "hombre", precio: 95, precioAntes: 130, etiquetas: ["oferta"], familia: ["amaderado"], ocasion: ["dia", "noche"], notas: "Mandarina, iris y maderas cálidas.", foto: "boss-bottled-parfum", color: "#111111" },
    { id: 25, nombre: "Eau pour Homme", marca: "Giorgio Armani", genero: "hombre", precio: 70, precioAntes: 90, etiquetas: ["oferta"], familia: ["fresco"], ocasion: ["dia"], notas: "Limón, bergamota y clavo.", foto: "armani-eau-pour-homme", color: "#c9b98a" },
    { id: 26, nombre: "Bad Boy", marca: "Carolina Herrera", genero: "hombre", precio: 95, precioAntes: 115, etiquetas: ["oferta", "masvendido"], familia: ["dulce"], ocasion: ["noche"], notas: "Pimienta, salvia, cacao y haba tonka.", foto: "bad-boy", color: "#111111" },
    { id: 27, nombre: "Basilic Pourpre", marca: "Hermès", genero: "hombre", precio: 135, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Albahaca púrpura, pimienta y maderas.", foto: "basilic-pourpre", color: "#2fa84f" },
    { id: 28, nombre: "Rose 31", marca: "Le Labo", genero: "hombre", precio: 340, etiquetas: [], familia: ["floral", "amaderado"], ocasion: ["dia", "noche"], notas: "Rosa, comino y cedro.", foto: "rose-31", color: "#d9d2c3" },
    { id: 29, nombre: "Earth", marca: "Loewe", genero: "hombre", precio: 150, etiquetas: ["nuevo"], familia: ["amaderado"], ocasion: ["dia"], notas: "Notas terrosas, vetiver y especias.", foto: "loewe-earth", color: "#7a1b4f" },
    { id: 30, nombre: "Poderío", marca: "La Sabia Madrid", genero: "hombre", precio: 45, etiquetas: ["nuevo"], familia: ["dulce"], ocasion: ["noche"], notas: "Ámbar, vainilla y lavanda.", foto: "poderio", color: "#1a1a1a" },
    { id: 31, nombre: "Eau des Sens", marca: "Diptyque", genero: "hombre", precio: 175, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Naranja amarga, angélica y pachulí.", foto: "eau-des-sens", color: "#eeeeee" },
    { id: 32, nombre: "Agua Fresca", marca: "Adolfo Domínguez", genero: "hombre", precio: 35, precioAntes: 50, etiquetas: ["oferta"], familia: ["fresco"], ocasion: ["dia"], notas: "Cítricos, lavanda y musgo.", foto: "agua-fresca", color: "#c2c9b0" },
    { id: 33, nombre: "Black Orchid", marca: "Tom Ford", genero: "hombre", precio: 210, etiquetas: [], familia: ["dulce"], ocasion: ["noche"], notas: "Trufa negra, orquídea y pachulí.", foto: "black-orchid", color: "#0d0d0d" },
    { id: 34, nombre: "Spicebomb Extreme", marca: "Viktor & Rolf", genero: "hombre", precio: 140, etiquetas: [], familia: ["dulce"], ocasion: ["noche"], notas: "Tabaco, vainilla y pimienta negra.", foto: "spicebomb-extreme", color: "#2a2a2a" },
    { id: 35, nombre: "The One for Men", marca: "Dolce & Gabbana", genero: "hombre", precio: 120, etiquetas: ["masvendido"], familia: ["amaderado", "dulce"], ocasion: ["noche"], notas: "Tabaco, jengibre y ámbar.", foto: "the-one", color: "#8a5a2a" },
    { id: 36, nombre: "Blue Code", marca: "El Ganso", genero: "hombre", precio: 50, etiquetas: ["nuevo"], familia: ["fresco"], ocasion: ["dia"], notas: "Lavanda, ámbar y notas marinas.", foto: "blue-code", color: "#1f3a7a" },
    { id: 37, nombre: "Gentleman Eau de Parfum", marca: "Givenchy", genero: "hombre", precio: 95, precioAntes: 130, etiquetas: ["oferta"], familia: ["amaderado"], ocasion: ["noche"], notas: "Iris, lavanda y haba tonka.", foto: "gentleman", color: "#d8d4c8" },
    { id: 38, nombre: "Eros", marca: "Versace", genero: "hombre", precio: 85, precioAntes: 100, etiquetas: ["oferta", "masvendido"], familia: ["dulce"], ocasion: ["noche"], notas: "Menta, manzana verde y vainilla.", foto: "eros", color: "#1d7fa0" },
    { id: 39, nombre: "L'Homme", marca: "Yves Saint Laurent", genero: "hombre", precio: 90, precioAntes: 110, etiquetas: ["oferta"], familia: ["fresco"], ocasion: ["dia"], notas: "Jengibre, bergamota y cedro.", foto: "lhomme-ysl", color: "#c9b27a" },
    { id: 40, nombre: "Philosykos", marca: "Diptyque", genero: "hombre", precio: 175, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Higuera, hoja de higo y cedro.", foto: "philosykos", color: "#eeeeee" },
    { id: 41, nombre: "Acqua di Parma Colonia", marca: "Acqua di Parma", genero: "hombre", precio: 170, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Limón siciliano, lavanda y rosa.", foto: "acqua-di-parma-colonia", color: "#e8c94a" },
    { id: 42, nombre: "Grey Vetiver", marca: "Tom Ford", genero: "hombre", precio: 210, etiquetas: [], familia: ["amaderado"], ocasion: ["dia"], notas: "Vetiver, pomelo y nuez moscada.", foto: "grey-vetiver", color: "#c8c9a8" },
    { id: 43, nombre: "Terre d'Hermès", marca: "Hermès", genero: "hombre", precio: 135, etiquetas: ["masvendido"], familia: ["amaderado"], ocasion: ["dia"], notas: "Naranja, pimienta y vetiver.", foto: "terre-dhermes", color: "#d18a2a" },
    { id: 44, nombre: "Luna Rossa Carbon", marca: "Prada", genero: "hombre", precio: 120, etiquetas: ["nuevo"], familia: ["fresco"], ocasion: ["dia", "noche"], notas: "Bergamota, lavanda y ambroxán.", foto: "luna-rossa-carbon", color: "#555555" },

    // ===================== MUJER =====================
    { id: 11, nombre: "Good Girl", marca: "Carolina Herrera", genero: "mujer", precio: 135, etiquetas: ["masvendido"], familia: ["dulce"], ocasion: ["noche"], notas: "Almendra, jazmín y cacao.", foto: "good-girl", color: "#1a1a2e" },
    { id: 13, nombre: "Coco Mademoiselle", marca: "Chanel", genero: "mujer", precio: 170, etiquetas: ["masvendido"], familia: ["floral"], ocasion: ["dia"], notas: "Naranja, rosa y pachulí.", foto: "coco-mademoiselle", color: "#c9a27a" },
    { id: 15, nombre: "Miss Dior", marca: "Dior", genero: "mujer", precio: 150, etiquetas: ["masvendido"], familia: ["floral"], ocasion: ["dia"], notas: "Rosa, peonía y almizcle.", foto: "miss-dior", color: "#e3a5b5" },
    { id: 12, nombre: "La Vie Est Belle", marca: "Lancôme", genero: "mujer", precio: 130, etiquetas: ["masvendido"], familia: ["dulce"], ocasion: ["dia", "noche"], notas: "Iris, praliné y vainilla.", foto: "la-vie-est-belle", color: "#c98aa0" },
    { id: 14, nombre: "Libre", marca: "Yves Saint Laurent", genero: "mujer", precio: 145, etiquetas: ["nuevo"], familia: ["floral"], ocasion: ["noche"], notas: "Lavanda, flor de azahar y vainilla.", foto: "libre", color: "#c7a24a" },
    { id: 16, nombre: "Born in Roma Donna Intense", marca: "Valentino", genero: "mujer", precio: 140, precioAntes: 160, etiquetas: ["oferta"], familia: ["floral", "dulce"], ocasion: ["noche"], notas: "Jazmín, vainilla y madera.", foto: "born-in-roma-donna", color: "#6b2b3a" },
    { id: 17, nombre: "Idôle", marca: "Lancôme", genero: "mujer", precio: 115, precioAntes: 135, etiquetas: ["oferta"], familia: ["floral", "fresco"], ocasion: ["dia"], notas: "Pera, rosa y almizcle blanco.", foto: "idole", color: "#d8b9a0" },
    { id: 18, nombre: "Black Opium", marca: "Yves Saint Laurent", genero: "mujer", precio: 135, etiquetas: ["masvendido"], familia: ["dulce"], ocasion: ["noche"], notas: "Café, vainilla y flores blancas.", foto: "black-opium", color: "#2b1b2e" },
    { id: 19, nombre: "Scandal", marca: "Jean Paul Gaultier", genero: "mujer", precio: 125, etiquetas: ["nuevo"], familia: ["dulce"], ocasion: ["noche"], notas: "Miel, gardenia y pachulí.", foto: "scandal", color: "#b23a48" },
    { id: 20, nombre: "Light Blue", marca: "Dolce & Gabbana", genero: "mujer", precio: 95, precioAntes: 115, etiquetas: ["oferta"], familia: ["fresco"], ocasion: ["dia"], notas: "Limón siciliano, manzana y cedro.", foto: "light-blue", color: "#7fb3d5" },
    { id: 51, nombre: "Infusion de Cèdre", marca: "Prada", genero: "mujer", precio: 150, etiquetas: ["nuevo"], familia: ["amaderado", "floral"], ocasion: ["dia"], notas: "Cedro, mandarina y almizcle.", foto: "infusion-cedre", color: "#c9ccd1" },
    { id: 52, nombre: "5th Avenue", marca: "Elizabeth Arden", genero: "mujer", precio: 35, precioAntes: 45, etiquetas: ["oferta"], familia: ["floral"], ocasion: ["dia"], notas: "Magnolia, lila y sándalo.", foto: "fifth-avenue", color: "#d8b25a" },
    { id: 53, nombre: "Fior di Talco", marca: "Helan", genero: "mujer", precio: 55, etiquetas: [], familia: ["floral"], ocasion: ["dia"], notas: "Talco, rosa y almizcle.", foto: "fior-di-talco", color: "#e8d7ec" },
    { id: 54, nombre: "Yara", marca: "Lattafa", genero: "mujer", precio: 30, etiquetas: ["masvendido", "nuevo"], familia: ["dulce"], ocasion: ["dia", "noche"], notas: "Orquídea, vainilla y notas frutales.", foto: "yara", color: "#e9b9c6" },
    { id: 55, nombre: "Twilly d'Hermès", marca: "Hermès", genero: "mujer", precio: 145, etiquetas: ["nuevo"], familia: ["floral"], ocasion: ["dia", "noche"], notas: "Jengibre, nardo y sándalo.", foto: "twilly", color: "#e46a6a" },
    { id: 56, nombre: "Trésor", marca: "Lancôme", genero: "mujer", precio: 110, precioAntes: 140, etiquetas: ["oferta"], familia: ["floral", "dulce"], ocasion: ["noche"], notas: "Rosa, albaricoque y vainilla.", foto: "tresor", color: "#e88a4a" },
    { id: 57, nombre: "Chloé Eau de Parfum", marca: "Chloé", genero: "mujer", precio: 145, etiquetas: [], familia: ["floral"], ocasion: ["dia"], notas: "Peonía, rosa y miel.", foto: "chloe", color: "#f0e3cf" },
    { id: 58, nombre: "Eau de Rochas", marca: "Rochas", genero: "mujer", precio: 70, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Limón, verbena y pachulí.", foto: "eau-de-rochas", color: "#dfe7e2" },
    { id: 59, nombre: "CK IN2U Her", marca: "Calvin Klein", genero: "mujer", precio: 30, precioAntes: 45, etiquetas: ["oferta"], familia: ["fresco"], ocasion: ["dia"], notas: "Pomelo, bergamota y vainilla.", foto: "ck-in2u", color: "#f2f2f2" },
    { id: 60, nombre: "L'Interdit", marca: "Givenchy", genero: "mujer", precio: 140, etiquetas: ["masvendido"], familia: ["floral"], ocasion: ["noche"], notas: "Flor de azahar, jazmín y pachulí.", foto: "linterdit", color: "#e9c9a6" },
    { id: 61, nombre: "Eau Dynamisante", marca: "Clarins", genero: "mujer", precio: 60, etiquetas: [], familia: ["fresco"], ocasion: ["dia"], notas: "Cítricos, té y especias suaves.", foto: "eau-dynamisante", color: "#c8102e" },
    { id: 62, nombre: "Gucci Bloom", marca: "Gucci", genero: "mujer", precio: 150, etiquetas: [], familia: ["floral"], ocasion: ["dia"], notas: "Jazmín, nardo y madreselva.", foto: "gucci-bloom", color: "#f1c6c0" },
    { id: 63, nombre: "Tiffany & Co. Eau de Parfum", marca: "Tiffany & Co.", genero: "mujer", precio: 130, etiquetas: [], familia: ["floral"], ocasion: ["dia"], notas: "Iris, mandarina y almizcle.", foto: "tiffany", color: "#8fd3cf" },
    { id: 64, nombre: "Joy", marca: "Dior", genero: "mujer", precio: 150, etiquetas: [], familia: ["floral"], ocasion: ["dia"], notas: "Bergamota, rosa, jazmín y sándalo.", foto: "joy", color: "#e7a6c8" },
    { id: 65, nombre: "Flower by Kenzo", marca: "Kenzo", genero: "mujer", precio: 85, precioAntes: 115, etiquetas: ["oferta"], familia: ["floral"], ocasion: ["dia"], notas: "Amapola, violeta y vainilla.", foto: "flower-by-kenzo", color: "#e8e8e8" },
    { id: 66, nombre: "Acqua di Parma Sandalo", marca: "Acqua di Parma", genero: "mujer", precio: 260, etiquetas: [], familia: ["amaderado"], ocasion: ["noche"], notas: "Sándalo, bergamota y almizcle.", foto: "sandalo", color: "#111111" },
    { id: 67, nombre: "The Only One", marca: "Dolce & Gabbana", genero: "mujer", precio: 105, precioAntes: 125, etiquetas: ["oferta"], familia: ["dulce"], ocasion: ["noche"], notas: "Violeta, café y vainilla.", foto: "the-only-one", color: "#a8573a" }
];

const nombresEtiqueta = { masvendido: "MÁS VENDIDO", nuevo: "NUEVO", oferta: "OFERTA" };
const WHATSAPP = "593996443092";

/* Funciones pequeñas de ayuda */
function formatoPrecio(valor) {
    return "$" + valor.toFixed(2);
}

function rutaFoto(producto) {
    return "img/perfumes/" + producto.foto + ".jpg";
}

function buscarPorId(id) {
    return productos.find(function (p) { return p.id === id; });
}

/* Quitar tildes y pasar a minúsculas (sirve para buscar y para el chat) */
function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* ---------- 2. NAVEGACIÓN ENTRE SECCIONES ---------- */
let generoActual = "hombre";
let filtroActual = "todos";

function mostrarVista(vista, filtro) {
    document.querySelectorAll(".vista").forEach(function (seccion) {
        seccion.classList.remove("activa");
    });

    if (vista === "hombre" || vista === "mujer") {
        generoActual = vista;
        filtroActual = filtro || "todos";
        document.getElementById("buscador").value = "";
        document.getElementById("vista-catalogo").classList.add("activa");
        mostrarCatalogo();
    } else {
        const seccion = document.getElementById("vista-" + vista);
        if (seccion) seccion.classList.add("activa");
    }

    document.querySelectorAll(".nav-link").forEach(function (enlace) {
        enlace.classList.toggle("activo", enlace.dataset.vista === vista);
    });

    document.getElementById("nav").classList.remove("abierto");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", function (evento) {
    const boton = evento.target.closest("[data-vista]");
    if (boton) {
        mostrarVista(boton.dataset.vista, boton.dataset.filtro);
    }
});

document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("abierto");
});

/* ---------- 3. MOSTRAR PRODUCTOS, FILTROS Y BUSCADOR ---------- */
function crearTarjeta(producto) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "producto";

    let etiquetaHTML = "";
    if (producto.etiquetas.length > 0) {
        const tipo = producto.etiquetas.includes("oferta") ? "oferta" : producto.etiquetas[0];
        etiquetaHTML = '<span class="etiqueta ' + tipo + '">' + nombresEtiqueta[tipo] + "</span>";
    }

    let precioAntesHTML = "";
    if (producto.precioAntes) {
        precioAntesHTML = '<span class="precio-antes">' + formatoPrecio(producto.precioAntes) + "</span>";
    }

    // La foto real; si no existe el archivo, se muestra el frasco dibujado con CSS
    tarjeta.innerHTML =
        etiquetaHTML +
        '<div class="producto-imagen">' +
            '<img src="' + rutaFoto(producto) + '" alt="' + producto.nombre + '" loading="lazy" onerror="this.parentNode.classList.add(\'sin-foto\')">' +
            '<div class="frasco">' +
                '<div class="frasco-tapa"></div>' +
                '<div class="frasco-cuello"></div>' +
                '<div class="frasco-cuerpo" style="background: linear-gradient(135deg, ' + producto.color + ', #0a0a0a);">ÉP</div>' +
            "</div>" +
        "</div>" +
        '<p class="producto-marca">' + producto.marca + "</p>" +
        '<h3 class="producto-nombre">' + producto.nombre + "</h3>" +
        '<p class="producto-notas">' + producto.notas + "</p>" +
        '<div class="producto-precio"><span class="precio">' + formatoPrecio(producto.precio) + "</span>" + precioAntesHTML + "</div>" +
        '<button class="btn-agregar" data-agregar="' + producto.id + '"><i class="fa-solid fa-bag-shopping"></i> AGREGAR AL CARRITO</button>';

    return tarjeta;
}

function mostrarCatalogo() {
    const grid = document.getElementById("gridCatalogo");
    const texto = normalizar(document.getElementById("buscador").value.trim());
    const orden = document.getElementById("ordenar").value;
    grid.innerHTML = "";

    document.getElementById("catalogoTitulo").textContent =
        generoActual === "hombre" ? "Perfumes para hombre" : "Perfumes para mujer";

    document.querySelectorAll(".filtro").forEach(function (boton) {
        boton.classList.toggle("activo", boton.dataset.filtro === filtroActual);
    });

    let lista = productos.filter(function (p) {
        const mismoGenero = p.genero === generoActual;
        const cumpleFiltro = filtroActual === "todos" || p.etiquetas.includes(filtroActual);
        const cumpleBusqueda = texto === "" || normalizar(p.nombre + " " + p.marca + " " + p.notas).includes(texto);
        return mismoGenero && cumpleFiltro && cumpleBusqueda;
    });

    if (orden === "menor") lista.sort(function (a, b) { return a.precio - b.precio; });
    if (orden === "mayor") lista.sort(function (a, b) { return b.precio - a.precio; });
    if (orden === "nombre") lista.sort(function (a, b) { return a.nombre.localeCompare(b.nombre); });

    document.getElementById("contadorProductos").textContent = lista.length + " perfumes";

    if (lista.length === 0) {
        grid.innerHTML = '<p class="sin-resultados">No encontramos perfumes con esa búsqueda.</p>';
        return;
    }

    lista.forEach(function (p) {
        grid.appendChild(crearTarjeta(p));
    });
}

document.querySelectorAll(".filtro").forEach(function (boton) {
    boton.addEventListener("click", function () {
        filtroActual = boton.dataset.filtro;
        mostrarCatalogo();
    });
});

document.getElementById("buscador").addEventListener("input", mostrarCatalogo);
document.getElementById("ordenar").addEventListener("change", mostrarCatalogo);

function mostrarDestacados() {
    const grid = document.getElementById("gridDestacados");
    const ids = [1, 3, 6, 9, 11, 13, 60, 54]; // 4 de hombre y 4 de mujer
    ids.forEach(function (id) {
        grid.appendChild(crearTarjeta(buscarPorId(id)));
    });
}

/* ---------- 4. CARRITO DE COMPRAS ---------- */
let carrito = [];

try {
    carrito = JSON.parse(localStorage.getItem("carritoEclipse")) || [];
    carrito = carrito.filter(function (i) { return buscarPorId(i.id); });
} catch (e) {
    carrito = [];
}

function guardarCarrito() {
    try {
        localStorage.setItem("carritoEclipse", JSON.stringify(carrito));
    } catch (e) {
        // Si el navegador no permite guardar, no pasa nada
    }
}

function agregarAlCarrito(id) {
    const item = carrito.find(function (i) { return i.id === id; });
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }
    mostrarToast(buscarPorId(id).nombre + " se agregó al carrito");
    actualizarCarrito();
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(function (i) { return i.id === id; });
    if (!item) return;
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(function (i) { return i.id !== id; });
    }
    actualizarCarrito();
}

function calcularSubtotal() {
    return carrito.reduce(function (suma, item) {
        return suma + buscarPorId(item.id).precio * item.cantidad;
    }, 0);
}

function actualizarCarrito() {
    const contenedor = document.getElementById("carritoItems");
    let cantidadTotal = 0;
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
    }

    carrito.forEach(function (item) {
        const p = buscarPorId(item.id);
        cantidadTotal += item.cantidad;

        const fila = document.createElement("div");
        fila.className = "carrito-item";
        fila.innerHTML =
            '<div class="info-item-carrito">' +
                '<img class="mini-foto" src="' + rutaFoto(p) + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
                "<div><h4>" + p.nombre + "</h4><p>" + formatoPrecio(p.precio) + "</p></div>" +
            "</div>" +
            '<div class="cantidad">' +
                '<button data-menos="' + p.id + '">−</button>' +
                "<span>" + item.cantidad + "</span>" +
                '<button data-mas="' + p.id + '">+</button>' +
            "</div>";
        contenedor.appendChild(fila);
    });

    document.getElementById("carritoTotal").textContent = formatoPrecio(calcularSubtotal());
    document.getElementById("contadorCarrito").textContent = cantidadTotal;
    guardarCarrito();
}

function abrirCarrito() {
    document.getElementById("carrito").classList.add("abierto");
    document.getElementById("overlay").classList.add("visible");
}

function cerrarCarrito() {
    document.getElementById("carrito").classList.remove("abierto");
    document.getElementById("overlay").classList.remove("visible");
}

document.getElementById("abrirCarrito").addEventListener("click", abrirCarrito);
document.getElementById("cerrarCarrito").addEventListener("click", cerrarCarrito);
document.getElementById("overlay").addEventListener("click", cerrarCarrito);

/* Botones "agregar", "+" y "−" (funcionan en las tarjetas y en el chat) */
document.addEventListener("click", function (evento) {
    const agregar = evento.target.closest("[data-agregar]");
    const mas = evento.target.closest("[data-mas]");
    const menos = evento.target.closest("[data-menos]");

    if (agregar) agregarAlCarrito(Number(agregar.dataset.agregar));
    if (mas) cambiarCantidad(Number(mas.dataset.mas), 1);
    if (menos) cambiarCantidad(Number(menos.dataset.menos), -1);
});

/* Aviso pequeño que aparece abajo */
let temporizadorToast;
function mostrarToast(texto) {
    const toast = document.getElementById("toast");
    toast.textContent = texto;
    toast.classList.add("visible");
    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(function () {
        toast.classList.remove("visible");
    }, 2500);
}

/* ---------- INICIO: cuando carga la página ---------- */
mostrarDestacados();
actualizarCarrito();
