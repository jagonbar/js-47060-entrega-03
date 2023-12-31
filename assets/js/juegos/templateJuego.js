// ###DATA###         = atributos data
// ###NOMBRE_JUEGO### = nombre de juego
// ###PRECIO###       = precio en pesos
// ###DESCRIPCION###  = descripcion del juego
// ###IMAGEN###       = ruta de archivo del juego
const templateJuego = `
<!-- games__game -->
                    <div class="games__game">
                        <div class="games__game_img">
                            <h2>###NOMBRE_JUEGO###</h2>
                            <img src="###IMAGEN###" alt="cover ###NOMBRE_JUEGO###">
                        </div>
                        <div class="games__game_price">
                            <h3>###PRECIO###</h3>
                        </div>
                        <div class="games__game_option">
                            <a href="" class="games__game_option_buy">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                Comprar
                            </a>
                        </div>
                        <div class="games__game_cart">
                            <div class="games__game_desc">

                                <p>
                                    ###DESCRIPCION###
                                </p>
                            </div>
                            <div>
                                <a href="" ###DATA### class="link_agregar_juego games__game_option_cart">

                                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                    Agregar al carro
                                </a>
                            </div>
                        </div>
                    </div><!-- ./games__game -->
`