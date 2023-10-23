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
    for (juego of juegosDisponibles) {
        
        // solo mostrar juegos de plataformas pedidas
        if(plataformas.indexOf(juego.plataforma)==-1) continue;

        ++i;
        // console.log(i,{juego});
        let html = templateJuego;
        let data = "";
        Object.keys(juego).forEach(function(valor){
            data+= `data-${valor}="${juego[valor]}" `;
        });
        let JSONdata=JSON.stringify(juego) ;
        
        html = html.replace("###DATA###"        , data);
        html = html.replace("###ID###"          , juego.id);
        html = html.replace("###NOMBRE_JUEGO###", juego.titulo);
        html = html.replace("###PRECIO###"      , juego.precio);
        html = html.replace("###DESCRIPCION###" , juego.descripcion);
        html = html.replace("###IMAGEN###"      , juego.imagen);

        htmlJuegos.push(html);
    }
    
    games__list.innerHTML =  htmlJuegos.length>0 ? htmlJuegos.join("") : "Seleccione plataforma para mostrar juegos." ;
}