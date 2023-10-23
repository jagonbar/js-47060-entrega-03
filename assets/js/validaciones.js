/**
 * valida si es un número entero válido
 * @param {string} valor 
 * @returns {boolean}
 */
function validaNumeroInt(valor){
    console.log("function validaNumeroInt()")
    es_entero = (parseInt(valor) ===parseFloat(valor))

    es_valido = (valor!==null) && (valor!==undefined) && ( !isNaN(valor) ) && es_entero;
    if(!es_valido) alert("Ingresa un número valido");
    return es_valido;
}

/**
 * retorna verdadero o falso si es que cantidad esta entre 1 y 100 o no.
 * @param {int} cantidad 
 * @returns {boolean}
 */
function validaRango(cantidad){
    console.log("function validaRango()")
    let minimo = 1;
    let maximo = 100;
    let es_rango_valido = (minimo>=0 && cantidad<=maximo);
    if(!es_rango_valido) alert("Cantidad debe ser un rango entre 1 y 100");
    return es_rango_valido;}