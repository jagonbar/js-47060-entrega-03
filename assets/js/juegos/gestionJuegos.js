/**
 * ARCHIVO QUE CONTIENE TODA LA GESTION DE
 * PAGINA pages\juegos.html
 */

const plataformas = ["pc","playstation","switch","xbox"];

// verificar carga de página
window.onload = function(){
    
    //01 - al cargar pagina, dibujar todas las tarjetas de juegos
    inicioPaginaJuegos(plataformas);    
    
    //02 - asociar eventos a checks de filtro
    const checksFiltro        = document.querySelectorAll(".checkFiltro");
    checksFiltro.forEach(function(checkFiltro){
        checkFiltro.addEventListener("change",clickcheckFiltro);
    });
};

/**
 * accion de click agregar juego
 * @param {event} event 
 */

function clickLinkAgregarJuegos(event){
    event.preventDefault();
    console.log(this.dataset)
    

    let juego = {...this.dataset};
    console.log("click hecho a ",{juego});
    cantidad = pedirCantidad();
    console.log("paso 2")
    if(cantidad!==false){
        console.log("paso 3")
        //de assets/js/venta/gestionVentas.js
        agregarJuegoVenta(juego, cantidad);
    }
    
}

/**
 * filtra tabla de juegos disponibles segun check seleccionados
 * @returns {}
 */
function clickcheckFiltro(){
    const checksFiltro        = document.querySelectorAll(".checkFiltro:checked");
    const checkSeleccion = [];
    
    //si no hay checks marcados, mostrar sección vacía
    if(checksFiltro.length==0){
        inicioPaginaJuegos([]);
        return;
    }
    
    for(check of checksFiltro){
        checkSeleccion.push(check.dataset.tipo);
    }
    inicioPaginaJuegos(checkSeleccion);
}