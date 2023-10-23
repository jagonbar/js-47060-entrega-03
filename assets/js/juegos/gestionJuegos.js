/**
 * ARCHIVO QUE CONTIENE TODA LA GESTION DE
 * PAGINA pages\juegos.html
 */

const plataformas = ["pc","playstation","switch","xbox"];

// verificar carga de página
window.onload = function(){
    
    //01 - al cargar pagina, dibujar todas las tarjetas de juegos
    inicioPaginaJuegos(plataformas);

    //02 - asociar eventos a tarjetas
    const linkAgregarJuegos = document.querySelectorAll(".link_agregar_juego");
    
    linkAgregarJuegos.forEach(function(linkJuego){
        // linkJuego.addEventListener("click",function(event){
            //     event.preventDefault();
            //     console.log(this)            
            // });
            linkJuego.addEventListener("click",clickLinkAgregarJuegos);
        });
    
    //03 - asociar eventos a checks de filtro
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

    //de assets/js/venta/gestionVentas.js
    agregarJuegoVenta(juego, cantidad);
    
}


/**
 * pide cantidad a vender entre 1 a 100
 * si numero está fuera de rango, se sigue preguntando
 * @returns cantidad
 */
function pedirCantidad(){
    console.log("function pedirCantidad()")
    let cantidad;
    do{
        cantidad= prompt("Indica cantidad a comprar (de 1 a 100) ");
        
        if(cantidad===null) {
            console.log("canceló prompt");
            return false;
        }//canceló prompt

        es_valido   = validaNumeroInt(cantidad) && validaRango(cantidad);
    }while(!es_valido)
    return parseInt(cantidad);
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