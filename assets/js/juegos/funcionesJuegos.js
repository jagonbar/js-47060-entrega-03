/**
 * FUNCIONES DE 
 * PAGINA pages\juegos.html
 */


/**
 * dibuja las tarjetas de cada juego
 * @param {*} plataformas 
 */
function inicioPaginaJuegos(plataformas) {
    const games__list = document.querySelector(".games__list");
    const htmlJuegos = [];
    let i=0;
    //01 dibujar tarjetas por cada juego
    for (juego of juegosDisponibles) {
        
        // solo mostrar juegos de plataformas pedidas
        if(plataformas.indexOf(juego.plataforma)==-1) continue;

        ++i;
        // console.log(i,{juego});
        let html = templateJuego; // de templateJuego.js
        let data = "";
        Object.keys(juego).forEach(function(valor){
            data+= `data-${valor}="${juego[valor]}" `;
        });        
        
        html = html.replace("###DATA###"        , data);
        html = html.replace("###ID###"          , juego.id);
        html = html.replace("###NOMBRE_JUEGO###", juego.titulo);
        html = html.replace("###PRECIO###"      , formateaMiles(juego.precio));
        html = html.replace("###DESCRIPCION###" , juego.descripcion);
        html = html.replace("###IMAGEN###"      , juego.imagen);

        htmlJuegos.push(html);
    }
    
    games__list.innerHTML =  htmlJuegos.length>0 ? htmlJuegos.join("") : "Seleccione plataforma para mostrar juegos." ;

    //02 - asociar eventos a tarjetas
    const linkAgregarJuegos = document.querySelectorAll(".link_agregar_juego");
    
    linkAgregarJuegos.forEach(function(linkJuego){
        // linkJuego.addEventListener("click",function(event){
            //     event.preventDefault();
            //     console.log(this)            
            // });
            linkJuego.addEventListener("click",clickLinkAgregarJuegos);
        });
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
            break;
        }//canceló prompt

        es_valido   = validaNumeroInt(cantidad) && validaRango(cantidad);
    }while(!es_valido)
    console.log("paso 1",cantidad)
    return parseInt(cantidad);
}