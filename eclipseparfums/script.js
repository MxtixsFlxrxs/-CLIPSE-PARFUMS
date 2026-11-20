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

/* ---------- 5. PAGO (CHECKOUT) ----------
   IMPORTANTE: esto es una DEMOSTRACIÓN. No se cobra dinero y los datos
   de la tarjeta no se guardan ni se envían a ningún lado. */
const modalPago = document.getElementById("modalPago");
let metodoPago = "credito";

function costoEnvio(subtotal) {
    return subtotal >= 100 ? 0 : 5;
}

function totalPedido() {
    const subtotal = calcularSubtotal();
    return subtotal + costoEnvio(subtotal);
}

function mostrarPaso(id, numeroPaso) {
    document.querySelectorAll(".paso-contenido").forEach(function (p) {
        p.classList.remove("activo");
    });
    document.getElementById(id).classList.add("activo");

    document.querySelectorAll(".paso").forEach(function (p) {
        const n = Number(p.dataset.paso);
        p.classList.toggle("activo", n === numeroPaso);
        p.classList.toggle("hecho", n < numeroPaso);
    });
}

function llenarResumen() {
    const contenedor = document.getElementById("resumenItems");
    contenedor.innerHTML = "";
    carrito.forEach(function (item) {
        const p = buscarPorId(item.id);
        const fila = document.createElement("div");
        fila.className = "resumen-item";
        fila.innerHTML =
            '<img class="mini-foto" src="' + rutaFoto(p) + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
            "<div>" + p.nombre + "<small>" + p.marca + " · x" + item.cantidad + "</small></div>" +
            "<span>" + formatoPrecio(p.precio * item.cantidad) + "</span>";
        contenedor.appendChild(fila);
    });

    const subtotal = calcularSubtotal();
    const envio = costoEnvio(subtotal);
    document.getElementById("resSubtotal").textContent = formatoPrecio(subtotal);
    document.getElementById("resEnvio").textContent = envio === 0 ? "Gratis" : formatoPrecio(envio);
    document.getElementById("resTotal").textContent = formatoPrecio(subtotal + envio);
    document.querySelectorAll(".monto-pagar").forEach(function (s) {
        s.textContent = formatoPrecio(subtotal + envio);
    });
}

function abrirPago() {
    if (carrito.length === 0) {
        mostrarToast("Agrega un perfume antes de finalizar");
        return;
    }
    cerrarCarrito();
    llenarResumen();
    mostrarPaso("paso1", 1);
    modalPago.classList.add("abierto");
}

function cerrarPago() {
    modalPago.classList.remove("abierto");
}

document.getElementById("finalizarCompra").addEventListener("click", abrirPago);
document.getElementById("cerrarPago").addEventListener("click", cerrarPago);

/* Mostrar u ocultar un error debajo de un campo */
function marcarError(input, mensaje) {
    const small = input.parentNode.querySelector(".error");
    input.classList.toggle("invalido", mensaje !== "");
    if (small) small.textContent = mensaje;
    return mensaje === "";
}

/* PASO 1: datos de envío */
document.getElementById("paso1").addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nombre = document.getElementById("envNombre");
    const telefono = document.getElementById("envTelefono");
    const correo = document.getElementById("envCorreo");
    const ciudad = document.getElementById("envCiudad");
    const direccion = document.getElementById("envDireccion");

    let ok = true;
    ok = marcarError(nombre, nombre.value.trim().length < 3 ? "Escribe tu nombre completo." : "") && ok;
    ok = marcarError(telefono, /^0\d{9}$/.test(telefono.value.replace(/\s/g, "")) ? "" : "Escribe un celular válido (10 dígitos, empieza con 0).") && ok;
    ok = marcarError(correo, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim()) ? "" : "Escribe un correo válido.") && ok;
    ok = marcarError(ciudad, ciudad.value.trim().length < 3 ? "Escribe tu ciudad." : "") && ok;
    ok = marcarError(direccion, direccion.value.trim().length < 5 ? "Escribe tu dirección." : "") && ok;

    if (ok) mostrarPaso("paso2", 2);
});

document.getElementById("volverPaso1").addEventListener("click", function () {
    mostrarPaso("paso1", 1);
});

/* Elegir método de pago */
document.querySelectorAll(".metodo").forEach(function (boton) {
    boton.addEventListener("click", function () {
        metodoPago = boton.dataset.metodo;
        document.querySelectorAll(".metodo").forEach(function (b) {
            b.classList.toggle("activo", b === boton);
        });

        const esPaypal = metodoPago === "paypal";
        document.getElementById("formTarjeta").classList.toggle("oculto", esPaypal);
        document.getElementById("formPaypal").classList.toggle("oculto", !esPaypal);
        document.getElementById("tarjetaTipoTexto").textContent = metodoPago === "debito" ? "DÉBITO" : "CRÉDITO";
        // Las cuotas solo existen con tarjeta de crédito
        document.getElementById("campoCuotas").classList.toggle("oculto", metodoPago !== "credito");
    });
});

/* Detectar la marca de la tarjeta por sus primeros números */
function marcaTarjeta(numero) {
    if (/^4/.test(numero)) return "visa";
    if (/^(5[1-5]|2[2-7])/.test(numero)) return "mastercard";
    if (/^3[47]/.test(numero)) return "amex";
    if (/^3(0|6|8)/.test(numero)) return "diners";
    return "";
}

/* Algoritmo de Luhn: comprueba si un número de tarjeta es válido */
function luhnValido(numero) {
    let suma = 0;
    let doble = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let d = Number(numero[i]);
        if (doble) {
            d = d * 2;
            if (d > 9) d = d - 9;
        }
        suma += d;
        doble = !doble;
    }
    return numero.length >= 13 && suma % 10 === 0;
}

const iconosMarca = {
    visa: '<i class="fa-brands fa-cc-visa"></i>',
    mastercard: '<i class="fa-brands fa-cc-mastercard"></i>',
    amex: '<i class="fa-brands fa-cc-amex"></i>',
    diners: '<i class="fa-brands fa-cc-diners-club"></i>',
    "": '<i class="fa-regular fa-credit-card"></i>'
};

/* La tarjeta de la vista previa se actualiza mientras escribes */
document.getElementById("tarNumero").addEventListener("input", function () {
    const limpio = this.value.replace(/\D/g, "").slice(0, 16);
    this.value = limpio.replace(/(\d{4})(?=\d)/g, "$1 ");
    const relleno = (limpio + "################").slice(0, 16).replace(/#/g, "•");
    document.getElementById("vistaNumero").textContent = relleno.replace(/(.{4})(?=.)/g, "$1 ");
    document.getElementById("tarjetaMarca").innerHTML = iconosMarca[marcaTarjeta(limpio)];
});

document.getElementById("tarNombre").addEventListener("input", function () {
    document.getElementById("vistaNombre").textContent = this.value.toUpperCase() || "NOMBRE APELLIDO";
});

document.getElementById("tarFecha").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    this.value = v;
    document.getElementById("vistaFecha").textContent = v || "MM/AA";
});

document.getElementById("tarCvv").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});

function fechaValida(texto) {
    const partes = texto.split("/");
    if (partes.length !== 2) return false;
    const mes = Number(partes[0]);
    const anio = 2000 + Number(partes[1]);
    if (mes < 1 || mes > 12) return false;
    const hoy = new Date();
    return anio > hoy.getFullYear() || (anio === hoy.getFullYear() && mes >= hoy.getMonth() + 1);
}

/* Pagar con tarjeta */
document.getElementById("formTarjeta").addEventListener("submit", function (evento) {
    evento.preventDefault();
    const numero = document.getElementById("tarNumero");
    const nombre = document.getElementById("tarNombre");
    const fecha = document.getElementById("tarFecha");
    const cvv = document.getElementById("tarCvv");
    const limpio = numero.value.replace(/\D/g, "");

    let ok = true;
    ok = marcarError(numero, luhnValido(limpio) ? "" : "El número de tarjeta no es válido.") && ok;
    ok = marcarError(nombre, nombre.value.trim().length < 3 ? "Escribe el nombre del titular." : "") && ok;
    ok = marcarError(fecha, fechaValida(fecha.value) ? "" : "Fecha inválida o vencida.") && ok;
    ok = marcarError(cvv, /^\d{3,4}$/.test(cvv.value) ? "" : "CVV inválido.") && ok;

    if (ok) {
        const tipo = metodoPago === "debito" ? "tarjeta de débito" : "tarjeta de crédito";
        procesarPago(tipo + " terminada en " + limpio.slice(-4));
    }
});

/* Pagar con PayPal */
document.getElementById("formPaypal").addEventListener("submit", function (evento) {
    evento.preventDefault();
    const correo = document.getElementById("paypalCorreo");
    const ok = marcarError(correo, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim()) ? "" : "Escribe el correo de tu cuenta PayPal.");
    if (ok) procesarPago("PayPal (" + correo.value.trim() + ")");
});

/* Simula el procesamiento y muestra la confirmación */
function procesarPago(descripcionMetodo) {
    const total = totalPedido();
    const pedido = "EP-" + Math.floor(100000 + Math.random() * 900000);
    const nombre = document.getElementById("envNombre").value.trim().split(" ")[0];
    const ciudad = document.getElementById("envCiudad").value.trim();

    mostrarPaso("pasoProcesando", 2);

    setTimeout(function () {
        document.getElementById("confirmacionTexto").innerHTML =
            "Gracias, <strong>" + nombre.replace(/</g, "") + "</strong>. Tu pedido <strong>" + pedido + "</strong> por <strong>" +
            formatoPrecio(total) + "</strong> fue pagado con " + descripcionMetodo.replace(/</g, "") + ".<br>" +
            "Lo enviaremos a " + ciudad.replace(/</g, "") + " en 24 a 72 horas. Te escribiremos por WhatsApp para coordinar la entrega.";
        mostrarPaso("paso3", 3);

        // Vaciar carrito y limpiar los datos de la tarjeta
        carrito = [];
        actualizarCarrito();
        document.getElementById("formTarjeta").reset();
        document.getElementById("formPaypal").reset();
        document.getElementById("vistaNumero").textContent = "•••• •••• •••• ••••";
        document.getElementById("vistaNombre").textContent = "NOMBRE APELLIDO";
        document.getElementById("vistaFecha").textContent = "MM/AA";
        document.getElementById("tarjetaMarca").innerHTML = iconosMarca[""];
    }, 2000);
}

document.getElementById("terminarCompra").addEventListener("click", function () {
    cerrarPago();
    mostrarVista("inicio");
});

/* ---------- 6. FORMULARIO DE CONTACTO ---------- */
document.getElementById("formContacto").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    let valido = true;

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorMensaje").textContent = "";
    document.getElementById("exitoContacto").textContent = "";

    if (nombre.length < 2) {
        document.getElementById("errorNombre").textContent = "Escribe tu nombre.";
        valido = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("errorEmail").textContent = "Escribe un correo válido.";
        valido = false;
    }
    if (mensaje.length < 10) {
        document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
        valido = false;
    }

    if (valido) {
        document.getElementById("exitoContacto").textContent =
            "¡Gracias, " + nombre + "! Recibimos tu mensaje y te responderemos pronto.";
        this.reset();
    }
});

/* ---------- 7. SBDDA - ASISTENTE DE CHAT ---------- */
const chat = document.getElementById("chat");
const chatMensajes = document.getElementById("chatMensajes");
const chatInput = document.getElementById("chatInput");
let chatIniciado = false;

/* Lo que SBDDA recuerda de la conversación */
const memoria = {
    genero: null,
    familia: null,
    ocasion: null,
    presupuesto: null,
    barato: false,
    etiqueta: null,
    resultados: [],   // última lista de recomendaciones
    mostrados: 0,     // cuántos de esa lista ya mostró
    ultimoProducto: null
};

function abrirChat() {
    chat.classList.add("abierto");
    if (!chatIniciado) {
        chatIniciado = true;
        respuestaBot({
            texto: "¡Hola! Soy SBDDA, el asistente de Éclipse Parfums ✨\nEscríbeme con tus palabras: puedo decirte si tenemos un perfume, recomendarte uno según tus gustos y tu presupuesto, o ayudarte con envíos y pagos.",
            sugerencias: ["¿Tienen Sauvage?", "Algo dulce para la noche", "Regalo para mi novia", "Hablar con un asesor"]
        });
    }
    chatInput.focus();
}

function cerrarChat() {
    chat.classList.remove("abierto");
}

document.getElementById("chatBurbuja").addEventListener("click", function () {
    chat.classList.contains("abierto") ? cerrarChat() : abrirChat();
});
document.getElementById("cerrarChat").addEventListener("click", cerrarChat);
document.getElementById("abrirChatBanner").addEventListener("click", abrirChat);
document.getElementById("abrirChatContacto").addEventListener("click", abrirChat);

/* Dibuja un mensaje en el chat */
function agregarMensaje(respuesta, quien) {
    const burbuja = document.createElement("div");
    burbuja.className = "msg " + quien;
    burbuja.textContent = respuesta.texto; // textContent evita que se inyecte HTML

    (respuesta.productos || []).forEach(function (p) {
        const item = document.createElement("div");
        item.className = "chat-producto";
        item.innerHTML =
            '<img class="mini-foto" src="' + rutaFoto(p) + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
            "<div><strong>" + p.nombre + "</strong><small>" + p.marca + " · " + formatoPrecio(p.precio) + "</small></div>" +
            '<button data-agregar="' + p.id + '" aria-label="Agregar al carrito" title="Agregar al carrito"><i class="fa-solid fa-plus"></i></button>';
        burbuja.appendChild(item);
    });

    if (respuesta.enlace) {
        const a = document.createElement("a");
        a.className = "chat-link";
        a.href = respuesta.enlace.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = respuesta.enlace.texto;
        burbuja.appendChild(document.createElement("br"));
        burbuja.appendChild(a);
    }

    chatMensajes.appendChild(burbuja);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
}

function mostrarSugerencias(lista) {
    const contenedor = document.getElementById("chatSugerencias");
    contenedor.innerHTML = "";
    (lista || []).forEach(function (texto) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = texto;
        boton.addEventListener("click", function () {
            enviarMensaje(texto);
        });
        contenedor.appendChild(boton);
    });
}

/* SBDDA "escribe" un momento y luego responde */
function respuestaBot(respuesta) {
    const escribiendo = document.createElement("div");
    escribiendo.className = "msg bot escribiendo";
    escribiendo.innerHTML = "<span></span><span></span><span></span>";
    chatMensajes.appendChild(escribiendo);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
    mostrarSugerencias([]);

    setTimeout(function () {
        escribiendo.remove();
        agregarMensaje(respuesta, "bot");
        mostrarSugerencias(respuesta.sugerencias);
        if (respuesta.accion) respuesta.accion();
    }, 650 + Math.min(respuesta.texto.length * 4, 900));
}

/* ¿El texto contiene alguna de estas palabras o partes de palabra? */
function contiene(texto, palabras) {
    return palabras.some(function (p) { return texto.includes(p); });
}

/* ¿El texto contiene alguna de estas palabras COMPLETAS? */
function tienePalabra(palabrasTexto, lista) {
    return lista.some(function (p) { return palabrasTexto.includes(p); });
}

/* Palabras que no sirven para reconocer el nombre de un perfume */
const palabrasVacias = ["de", "di", "d", "du", "eau", "pour", "the", "in", "la", "le", "l", "el", "by", "for", "and", "co", "parfum", "toilette"];

/* Versiones especiales que puede pedir el cliente (ej: "1 Million Elixir") */
const variantes = ["elixir", "intense", "intensely", "absolu", "extreme", "parfum", "prive", "noir", "platinum", "lucky", "royal", "privee", "sport", "gold", "rouge", "fraiche", "edp", "edt", "absolute", "collector"];

function palabrasDe(texto) {
    return normalizar(texto).replace(/[^a-z0-9ñ ]/g, " ").split(/\s+/).filter(Boolean);
}

/* Palabras de nombres de perfume que también se usan en conversación normal:
   solas no bastan para reconocer un perfume */
const palabrasComunes = ["agua", "fresca", "fresco", "blue", "light", "black", "one", "only", "code", "rose", "flower", "bottled", "men", "her", "homme", "avenue", "vip", "sens", "colonia", "sandalo", "orchid", "intense"];

/* Busca perfumes por su nombre dentro de lo que escribió el usuario.
   Si dice hombre o mujer, da prioridad a ese género. */
function buscarPerfumes(palabrasTexto, genero) {
    let candidatos = [];
    const textoPlano = " " + palabrasTexto.join(" ") + " ";

    productos.forEach(function (p) {
        const marca = palabrasDe(p.marca);
        const claves = palabrasDe(p.nombre).filter(function (w) {
            return !palabrasVacias.includes(w) && !(w.length === 1 && /\d/.test(w)) && !marca.includes(w);
        });
        if (claves.length === 0) return; // el nombre es solo la marca (ej: Chloé)

        const coinciden = claves.filter(function (w) { return palabrasTexto.includes(w); });
        if (coinciden.length === 0) return;

        const dijoMarca = marca.some(function (w) { return w.length > 2 && palabrasTexto.includes(w); });
        const frase = palabrasDe(p.nombre).slice(0, 2).join(" ");
        const dijoFrase = frase.includes(" ") && textoPlano.includes(" " + frase + " ");
        if (coinciden.length === 1 && palabrasComunes.includes(coinciden[0]) && !dijoMarca && !dijoFrase) return;

        let puntaje = coinciden.length / claves.length;
        if (dijoMarca) puntaje += 0.4;
        if (puntaje < 0.5) return;
        if (genero && p.genero === genero) puntaje += 0.3;
        puntaje += coinciden.length * 0.01; // desempate: gana el que coincide en más palabras
        candidatos.push({ p: p, puntaje: puntaje });
    });

    if (candidatos.length === 0) return [];
    const mejor = Math.max.apply(null, candidatos.map(function (c) { return c.puntaje; }));
    return candidatos.filter(function (c) { return mejor - c.puntaje < 0.001; }).map(function (c) { return c.p; });
}

/* Busca perfumes de una marca (ej: "¿qué tienen de Dior?") */
function buscarMarca(textoNormal) {
    const marcas = [...new Set(productos.map(function (p) { return p.marca; }))];
    const encontrada = marcas.find(function (m) {
        const mm = normalizar(m).replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
        return (" " + textoNormal + " ").includes(" " + mm + " ");
    });
    if (!encontrada) return null;
    return { marca: encontrada, lista: productos.filter(function (p) { return p.marca === encontrada; }) };
}

function describirOcasion(p) {
    return p.ocasion.map(function (o) { return o === "dia" ? "el día" : "la noche"; }).join(" y ");
}

function fichaPerfume(p) {
    let texto = "¡Sí, lo tenemos! 🙌\n" + p.nombre + " de " + p.marca +
        " (" + (p.genero === "hombre" ? "hombre" : "mujer") + ")\n" +
        "Notas: " + p.notas + "\n" +
        "Ideal para " + describirOcasion(p) + ".\n" +
        "Precio: " + formatoPrecio(p.precio);
    if (p.precioAntes) texto += " (antes " + formatoPrecio(p.precioAntes) + ", ¡está en oferta!)";
    texto += "\n¿Quieres que lo agregue a tu carrito?";
    return texto;
}

/* Lee lo que pide el cliente: género, tipo de aroma, ocasión, presupuesto... */
function leerPreferencias(t, w) {
    const pref = {};

    if (tienePalabra(w, ["hombre", "hombres", "caballero", "novio", "esposo", "papa", "padre", "papi", "hermano", "hijo", "amigo", "jefe", "tio", "abuelo", "masculino", "masculina", "chico", "varon"])) pref.genero = "hombre";
    if (tienePalabra(w, ["mujer", "mujeres", "dama", "novia", "esposa", "mama", "madre", "mami", "hermana", "hija", "amiga", "jefa", "tia", "abuela", "femenino", "femenina", "chica", "ella", "enamorada"])) pref.genero = "mujer";

    if (contiene(t, ["dulce", "vainilla", "caramelo", "gourmand", "goloso", "azucarad", "chocolate", "cafe"])) pref.familia = "dulce";
    if (contiene(t, ["fresc", "citric", "limon", "verano", "calor", "playa", "deporte", "gym", "gimnasio", "limpio", "ligero", "suave", "marino", "acuatic"])) pref.familia = "fresco";
    if (contiene(t, ["amader", "madera", "elegante", "serio", "oud", "cuero", "intenso", "fuerte", "masculino fuerte"])) pref.familia = "amaderado";
    if (contiene(t, ["floral", "flores", "flor ", "rosa", "jazmin", "romantic"])) pref.familia = "floral";

    if (contiene(t, ["noche", "fiesta", "cita", "salir", "discoteca", "boda", "evento", "cena", "seducir", "conquistar", "antro", "farra"])) pref.ocasion = "noche";
    if (contiene(t, [" dia", "dia ", "diario", "oficina", "trabajo", "universidad", "colegio", "clases", "todos los dias", "mañana", "manana"])) pref.ocasion = "dia";

    const numero = t.match(/(?:menos de|hasta|maximo|no mas de|por debajo de|presupuesto(?: de)?|tengo|gastar|alrededor de|unos)\s*\$?\s*(\d{2,4})/) || t.match(/\$\s*(\d{2,4})/) || t.match(/(\d{2,4})\s*(?:dolares|usd|\$)/);
    if (numero) pref.presupuesto = Number(numero[1]);

    if (contiene(t, ["barato", "economic", "accesible", "no muy caro", "no tan caro", "poco dinero", "bajo precio"])) pref.barato = true;
    if (contiene(t, ["oferta", "descuento", "promo", "rebaja"])) pref.etiqueta = "oferta";
    if (contiene(t, ["nuevo", "nueva", "novedad", "lanzamiento", "reciente"])) pref.etiqueta = "nuevo";
    if (contiene(t, ["mas vendido", "popular", "famoso", "favorito", "top"])) pref.etiqueta = "masvendido";

    return pref;
}

/* Filtra el catálogo con lo que SBDDA recuerda y devuelve la lista ordenada */
function recomendar() {
    let lista = productos.filter(function (p) {
        return (!memoria.genero || p.genero === memoria.genero) &&
               (!memoria.familia || p.familia.includes(memoria.familia)) &&
               (!memoria.ocasion || p.ocasion.includes(memoria.ocasion)) &&
               (!memoria.presupuesto || p.precio <= memoria.presupuesto) &&
               (!memoria.etiqueta || p.etiquetas.includes(memoria.etiqueta));
    });

    lista.sort(function (a, b) {
        if (memoria.barato) return a.precio - b.precio;
        const va = (a.etiquetas.includes("masvendido") ? 2 : 0) + (a.etiquetas.includes("oferta") ? 1 : 0);
        const vb = (b.etiquetas.includes("masvendido") ? 2 : 0) + (b.etiquetas.includes("oferta") ? 1 : 0);
        return vb - va;
    });

    return lista;
}

/* Explica en una frase lo que el cliente está buscando */
function resumenBusqueda() {
    const partes = [memoria.familia ? "algo " + memoria.familia : "perfumes"];
    if (memoria.genero) partes.push("para " + memoria.genero);
    if (memoria.ocasion) partes.push(memoria.ocasion === "dia" ? "para el día" : "para la noche");
    if (memoria.presupuesto) partes.push("de hasta " + formatoPrecio(memoria.presupuesto));
    if (memoria.etiqueta === "oferta") partes.push("en oferta");
    if (memoria.etiqueta === "nuevo") partes.push("de lo más nuevo");
    if (memoria.etiqueta === "masvendido") partes.push("entre los más vendidos");
    if (memoria.barato) partes.push("al mejor precio");
    return partes.join(", ");
}

function siguientesSugerencias() {
    const s = [];
    if (!memoria.genero) s.push("Para hombre", "Para mujer");
    if (!memoria.familia) s.push("Algo dulce", "Algo fresco", "Algo amaderado");
    else if (!memoria.ocasion) s.push("Para la noche", "Para el día");
    if (memoria.resultados.length > memoria.mostrados) s.push("Ver más opciones");
    if (!memoria.presupuesto && s.length < 4) s.push("Menos de $100");
    return s.slice(0, 4);
}

function mostrarRecomendaciones(intro) {
    const pagina = memoria.resultados.slice(memoria.mostrados, memoria.mostrados + 3);
    memoria.mostrados += pagina.length;
    if (pagina.length === 1) memoria.ultimoProducto = pagina[0];

    return {
        texto: intro + "\nToca + para agregarlo al carrito:",
        productos: pagina,
        sugerencias: siguientesSugerencias()
    };
}

/* El "cerebro" de SBDDA: decide qué responder */
function pensarRespuesta(mensaje) {
    const t = " " + normalizar(mensaje).replace(/[¿?¡!.,;:()"]/g, " ").replace(/\s+/g, " ").trim() + " ";
    const w = palabrasDe(mensaje);

    // Quitamos los saludos para ver si hay una pregunta real detrás
    const saludos = ["hola", "holi", "buenas", "buenos", "buen", "dias", "tardes", "noches", "hey", "saludos", "que", "tal", "oye", "oiga", "disculpa", "disculpe", "porfa", "por", "favor", "amigo", "amiga", "sbdda", "como", "estas", "esta", "bien", "hi"];
    const resto = w.filter(function (x) { return !saludos.includes(x); });
    const esSaludo = tienePalabra(w, ["hola", "holi", "buenas", "buenos", "hey", "saludos", "hi"]);

    // 1. Solo saludó
    if (esSaludo && resto.length === 0) {
        const comoEstas = contiene(t, ["como estas", "que tal", "como esta"]);
        return {
            texto: (comoEstas ? "¡Hola! Muy bien, gracias por preguntar 😊 " : "¡Hola! 😊 ") + "¿Buscas un perfume para ti o es para regalar?",
            sugerencias: ["Es para mí", "Es un regalo", "Ver ofertas", "¿Tienen 1 Million Elixir?"]
        };
    }

    // Desde aquí trabajamos sin las frases de saludo ("buenos días" no es "para el día")
    const tSinSaludo = t.replace(/ buen(os|as)? (dias?|tardes|noches) /g, " ").replace(/ (hola|holi|hey|saludos) /g, " ");
    return analizar(tSinSaludo, w);
}

function analizar(t, w) {
    const saludosExtra = ["hola", "holi", "buenas", "buenos", "buen", "dias", "tardes", "noches", "hey", "saludos", "que", "tal", "oye", "oiga", "disculpa", "disculpe", "porfa", "por", "favor", "amigo", "amiga", "sbdda", "como", "estas", "esta", "bien", "hi"];
    const resto = w.filter(function (x) { return !saludosExtra.includes(x); });
    // 2. Preguntas sobre SBDDA
    if (contiene(t, ["quien eres", "como te llamas", "que eres", "eres una ia", "eres un robot", "eres humano", "eres real", "tu nombre"])) {
        return { texto: "Soy SBDDA 🤖, el asistente virtual de Éclipse Parfums. Te ayudo a encontrar tu perfume ideal, te digo precios y disponibilidad, y te cuento sobre envíos y pagos. Si prefieres hablar con una persona, te paso con un asesor por WhatsApp." };
    }

    // 3. Agradecimientos y despedidas
    if (tienePalabra(w, ["gracias", "grax", "thanks"]) && resto.length <= 4) {
        return { texto: "¡Con gusto! Si necesitas algo más, aquí estoy 😊", sugerencias: ["Ver ofertas", "Hablar con un asesor"] };
    }
    if (tienePalabra(w, ["adios", "chao", "chau", "bye"]) || contiene(t, ["hasta luego", "nos vemos"])) {
        return { texto: "¡Hasta pronto! Gracias por visitar Éclipse Parfums ✨" };
    }

    // 4. Reiniciar la búsqueda
    if (contiene(t, ["empezar de nuevo", "reiniciar", "olvida", "otra cosa", "borrar"])) {
        Object.assign(memoria, { genero: null, familia: null, ocasion: null, presupuesto: null, barato: false, etiqueta: null, resultados: [], mostrados: 0 });
        return { texto: "¡Listo, empezamos de cero! ¿Qué estás buscando?", sugerencias: ["Para hombre", "Para mujer", "Ver ofertas"] };
    }

    // 5. "Sí, agrégalo" después de mostrar un perfume
    const diceQueSi = (tienePalabra(w, ["si", "dale", "ok", "okey", "listo", "claro", "agregalo", "agregala", "comprarlo", "porfa"]) && resto.length <= 3) ||
        contiene(t, [" lo quiero", " lo compro", "agregalo", "agregar al carrito", "anadelo", "ponlo en el carrito"]);
    if (memoria.ultimoProducto && diceQueSi && buscarPerfumes(w).length === 0) {
        const p = memoria.ultimoProducto;
        memoria.ultimoProducto = null;
        return {
            texto: "¡Hecho! Agregué " + p.nombre + " a tu carrito 🛍️ Cuando quieras, abre el carrito y toca \"Finalizar compra\" para pagar con tarjeta o PayPal.",
            sugerencias: ["Ver carrito", "Seguir viendo perfumes"],
            accion: function () { agregarAlCarrito(p.id); }
        };
    }
    if (contiene(t, ["ver carrito", "mi carrito", "abrir carrito"])) {
        return { texto: "¡Te abro el carrito! 🛍️", accion: abrirCarrito };
    }

    // 6. Preguntas frecuentes
    if (contiene(t, ["envio", "envian", "delivery", "domicilio", "entrega", "llega", "demora", "cuanto tarda", "mandan"])) {
        return { texto: "Hacemos envíos a todo Ecuador 🚚\nLlegan en 24 a 72 horas según tu ciudad. El envío cuesta $5 y es GRATIS en compras desde $100." };
    }
    if (contiene(t, ["pago", "pagar", "tarjeta", "transferencia", "efectivo", "paypal", "credito", "debito", "cuotas", "diferido"])) {
        return { texto: "Puedes pagar con tarjeta de crédito (hasta 12 cuotas), tarjeta de débito o PayPal 💳\nSolo agrega tus perfumes al carrito y toca \"Finalizar compra\"." };
    }
    if (contiene(t, ["original", "autentic", "replica", "falso", "garantia", "imitacion", "clon"])) {
        return { texto: "Todos nuestros perfumes son 100% originales y vienen sellados de fábrica ✅" };
    }
    if (contiene(t, ["horario", "atienden", "abren", "cierran", "a que hora"])) {
        return { texto: "Atendemos de lunes a sábado, de 8:00 a 17:00 🕗" };
    }
    if (contiene(t, ["devolu", "cambio", "reembolso", "garantia"])) {
        return { texto: "Si tu perfume llega con algún problema, tienes 7 días para cambiarlo. Solo debe estar sellado y sin usar 📦", sugerencias: ["Hablar con un asesor"] };
    }
    if (contiene(t, ["ubicacion", "donde estan", "donde quedan", "direccion", "local", "tienda fisica"])) {
        return { texto: "Estamos en Samborondón, Guayaquil 📍 y hacemos envíos a todo Ecuador. Para coordinar una entrega, escríbenos por WhatsApp.", enlace: { texto: "Escribir por WhatsApp", url: "https://wa.me/" + WHATSAPP } };
    }
    if (contiene(t, ["asesor", "humano", "persona", "contacto", "contactar", "whatsapp", "telefono", "numero", "correo", "llamar", "hablar con alguien"])) {
        return {
            texto: "¡Claro! Puedes hablar con un asesor por WhatsApp 📲\n+593 99 644 3092\nCorreo: contacto@eclipseparfums.com\nHorario: lunes a sábado, 8:00 a 17:00",
            enlace: { texto: "Abrir WhatsApp", url: "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola Éclipse Parfums, quisiera más información") }
        };
    }

    // 7. ¿Pregunta por un perfume en específico?
    const encontrados = buscarPerfumes(w, leerPreferencias(t, w).genero);
    if (encontrados.length > 0) {
        const lista = encontrados;

        if (lista.length === 1) {
            const p = lista[0];
            const nombreNormal = palabrasDe(p.nombre);
            // ¿Pidió una versión que no tenemos? (ej: "1 Million Elixir")
            const pedida = w.find(function (x) { return variantes.includes(x) && !nombreNormal.includes(x); });
            memoria.ultimoProducto = p;
            if (pedida) {
                return {
                    texto: "Por ahora no tenemos la versión \"" + pedida.charAt(0).toUpperCase() + pedida.slice(1) + "\" 😔, pero sí tenemos " + p.nombre + " de " + p.marca + ":\n" +
                        "Notas: " + p.notas + "\nPrecio: " + formatoPrecio(p.precio) + (p.precioAntes ? " (¡en oferta!)" : "") +
                        "\n¿Te lo agrego al carrito? También puedo consultar con un asesor si llega la versión que buscas.",
                    productos: [p],
                    sugerencias: ["Sí, agrégalo", "Algo parecido", "Hablar con un asesor"]
                };
            }
            return { texto: fichaPerfume(p), productos: [p], sugerencias: ["Sí, agrégalo", "Algo parecido", "Ver más opciones de " + p.marca] };
        }

        memoria.ultimoProducto = null;
        return { texto: "Encontré estas opciones que coinciden con lo que escribiste:", productos: lista.slice(0, 4), sugerencias: ["Para hombre", "Para mujer"] };
    }

    // 8. "Algo parecido" al último perfume que vio
    if (contiene(t, ["parecido", "similar", "igual a", "como ese", "como el"]) && memoria.ultimoProducto) {
        const base = memoria.ultimoProducto;
        Object.assign(memoria, { genero: base.genero, familia: base.familia[0], ocasion: null, presupuesto: null, barato: false, etiqueta: null });
        memoria.resultados = recomendar().filter(function (p) { return p.id !== base.id; });
        memoria.mostrados = 0;
        return mostrarRecomendaciones("Si te gusta " + base.nombre + ", estos tienen un estilo " + base.familia[0] + " parecido ✨");
    }

    // 9. ¿Pregunta por una marca?
    const deMarca = buscarMarca(t);
    if (deMarca) {
        memoria.resultados = deMarca.lista;
        memoria.mostrados = 0;
        return mostrarRecomendaciones("De " + deMarca.marca + " tenemos " + deMarca.lista.length + (deMarca.lista.length === 1 ? " perfume" : " perfumes") + ":");
    }

    // 10. "Ver más opciones"
    if (contiene(t, ["mas opciones", "otras opciones", "otro", "otra", "otros", "ver mas", "algo mas", "diferente", "siguiente"])) {
        if (memoria.resultados.length > memoria.mostrados) {
            return mostrarRecomendaciones("Aquí tienes más opciones:");
        }
        if (memoria.resultados.length > 0) {
            return { texto: "Esas eran todas las opciones con esas características 😊 ¿Quieres que cambie algo? Por ejemplo, el tipo de aroma o el presupuesto.", sugerencias: ["Algo dulce", "Algo fresco", "Empezar de nuevo"] };
        }
    }

    // 11. El más barato o el más caro
    if (contiene(t, ["mas barato", "mas economico", "menor precio", "precio mas bajo"])) {
        const pref = leerPreferencias(t, w);
        const lista = productos.filter(function (p) { return !pref.genero || p.genero === pref.genero; })
            .sort(function (a, b) { return a.precio - b.precio; });
        memoria.resultados = lista;
        memoria.mostrados = 0;
        return mostrarRecomendaciones("Estos son nuestros perfumes más económicos" + (pref.genero ? " para " + pref.genero : "") + " 💸");
    }
    if (contiene(t, ["mas caro", "mas exclusivo", "mas lujoso", "mejor perfume", "el mejor"])) {
        const pref = leerPreferencias(t, w);
        const lista = productos.filter(function (p) { return !pref.genero || p.genero === pref.genero; })
            .sort(function (a, b) { return b.precio - a.precio; });
        memoria.resultados = lista;
        memoria.mostrados = 0;
        return mostrarRecomendaciones("Estos son los más exclusivos de nuestra colección 👑");
    }

    // 12. Información del catálogo
    if (contiene(t, ["que marcas", "cuales marcas", "marcas tienen", "marcas venden"])) {
        const marcas = [...new Set(productos.map(function (p) { return p.marca; }))].sort();
        return { texto: "Trabajamos con estas marcas:\n" + marcas.join(", ") + ".\nPregúntame por cualquiera 😉" };
    }
    if (contiene(t, ["cuantos perfumes", "cuantos tienen", "catalogo completo", "todos los perfumes"])) {
        const h = productos.filter(function (p) { return p.genero === "hombre"; }).length;
        return {
            texto: "Tenemos " + productos.length + " perfumes: " + h + " para hombre y " + (productos.length - h) + " para mujer. ¿Te abro el catálogo?",
            sugerencias: ["Ver catálogo de hombre", "Ver catálogo de mujer"]
        };
    }
    if (contiene(t, ["catalogo de hombre", "catalogo hombre"])) {
        return { texto: "¡Te llevo al catálogo de hombre! 👔", accion: function () { mostrarVista("hombre"); } };
    }
    if (contiene(t, ["catalogo de mujer", "catalogo mujer"])) {
        return { texto: "¡Te llevo al catálogo de mujer! 👗", accion: function () { mostrarVista("mujer"); } };
    }
    if (contiene(t, ["seguir viendo"])) {
        return { texto: "¡Perfecto! Sigue explorando y aquí estaré si me necesitas 😊", sugerencias: ["Para hombre", "Para mujer"] };
    }

    // 13. Recomendación según lo que pide (y lo que ya dijo antes)
    const pref = leerPreferencias(t, w);
    const tieneAlgo = pref.genero || pref.familia || pref.ocasion || pref.presupuesto || pref.barato || pref.etiqueta;

    if (tieneAlgo) {
        // Si es una búsqueda nueva (no un simple ajuste), olvidamos la anterior
        const campos = ["genero", "familia", "ocasion", "presupuesto", "etiqueta", "barato"].filter(function (k) { return pref[k]; }).length;
        if (campos >= 2 || (pref.genero && w.length > 3) || contiene(t, ["regalo", "regalar"])) {
            Object.assign(memoria, { genero: null, familia: null, ocasion: null, presupuesto: null, barato: false, etiqueta: null });
        }
        ["genero", "familia", "ocasion", "presupuesto", "etiqueta"].forEach(function (k) {
            if (pref[k]) memoria[k] = pref[k];
        });
        if (pref.barato) memoria.barato = true;

        memoria.resultados = recomendar();
        memoria.mostrados = 0;

        if (memoria.resultados.length === 0) {
            memoria.presupuesto = null;
            return {
                texto: "No encontré " + resumenBusqueda() + " 😔 ¿Probamos cambiando algo?",
                sugerencias: ["Algo dulce", "Algo fresco", "Algo floral", "Empezar de nuevo"]
            };
        }
        return mostrarRecomendaciones("Si buscas " + resumenBusqueda() + ", te recomiendo ✨");
    }

    // 14. Regalo o para sí mismo, sin más datos
    if (contiene(t, ["regalo", "regalar", "obsequio", "sorprender", "cumpleanos", "aniversario"])) {
        return { texto: "¡Qué buen detalle! 🎁 ¿Para quién es el regalo? Cuéntame también si le gustan los aromas dulces, frescos o amaderados.", sugerencias: ["Para mi novia", "Para mi novio", "Para mi mamá", "Para mi papá"] };
    }
    if (contiene(t, ["para mi", "es para mi"])) {
        return { texto: "¡Genial! ¿Buscas perfume de hombre o de mujer? ¿Y qué aromas te gustan?", sugerencias: ["Para hombre", "Para mujer", "Algo dulce", "Algo fresco"] };
    }

    // 15. Preguntó por un perfume que no está en el catálogo
    if (contiene(t, ["tienen", "tienes", "venden", "vendes", "hay ", "disponible", "en venta", "stock", "precio", "cuesta", "cuanto vale", "cuanto es"])) {
        return {
            texto: "No encontré ese perfume en nuestro catálogo 😔 Puede que llegue pronto. Si quieres, un asesor puede confirmarte si lo conseguimos, o te recomiendo algo parecido.",
            sugerencias: ["Hablar con un asesor", "Recomiéndame algo", "Ver ofertas"]
        };
    }

    if (contiene(t, ["recomienda", "recomendacion", "perfume", "fragancia", "aroma", "olor", "cual", "busco", "quiero", "ayuda", "no se"])) {
        return { texto: "¡Te ayudo a elegir! Cuéntame un poco más: ¿es para hombre o para mujer? ¿Lo prefieres dulce, fresco, floral o amaderado? ¿Para el día o la noche?", sugerencias: ["Para hombre", "Para mujer", "Algo dulce", "Algo fresco"] };
    }

    // 16. No entendió
    return {
        texto: "Mmm, no estoy seguro de haber entendido 🤔\nPuedes preguntarme cosas como:\n• \"¿Tienen el Bad Boy?\"\n• \"Algo dulce para mi novia de menos de $100\"\n• \"¿Cuánto tarda el envío?\"",
        sugerencias: ["Recomiéndame un perfume", "Ver ofertas", "Hablar con un asesor"]
    };
}

function enviarMensaje(texto) {
    texto = texto.trim();
    if (!texto) return;

    agregarMensaje({ texto: texto }, "usuario");
    chatInput.value = "";

    // Las sugerencias de "Ver más opciones de [marca]" se entienden como la marca
    respuestaBot(pensarRespuesta(texto.replace(/^Ver más opciones de /, "")));
}

document.getElementById("chatForm").addEventListener("submit", function (evento) {
    evento.preventDefault();
    enviarMensaje(chatInput.value);
});

/* ---------- INICIO: cuando carga la página ---------- */
mostrarDestacados();
actualizarCarrito();
