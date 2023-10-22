// verificar carga de página
window.onload = function(){
    
    //01 - al cargar pagina, dibujar todas las tarjetas de juegos
    inicioPaginaJuegos();

    //02 - asociar eventos a tarjetas
    const link_agregar_juegos = document.querySelectorAll(".link_agregar_juego");

    link_agregar_juegos.forEach(function(linkJuego){
        // linkJuego.addEventListener("click",function(event){
        //     event.preventDefault();
        //     console.log(this)            
        // });
        linkJuego.addEventListener("click",clickLinkAgregarJuegos);
    });
};
// -------------------------------------------------------
function clickLinkAgregarJuegos(event){
    event.preventDefault();
    console.log(this.dataset)
 
    let juego = {...this.dataset};
    console.log("click hecho a ",{juego});
    
}
