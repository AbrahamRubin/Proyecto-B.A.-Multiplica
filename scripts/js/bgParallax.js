(function(){

//Objeto para las propiedades


var propParallax = {


    //Se agrego el (.parallax) dentro de las "   " porque estoy seleccionando css.
    seccion: document.querySelector(".parallax"),
    recorrido: null,
    limite: null
}




//Objeto para los metodos

metParallax = {

    inicio: function () {
        window.addEventListener("scroll", metParallax.scrollParallax);
    },

    scrollParallax: function () {
        
        propParallax.recorrido = window.pageYOffset;
        //condicion para que se mueva el elemento.


        //Esta propiedad sirve para saber cuantos pixeles hay desde el inicio de la pagina wed hasta el comienzo del elemento seleccionado. (offsetTop) EN este caso no cuenta el menu y offsetHeight para acceder hasta la parte baja de la seccion o elemento seleccionado.

        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

        //Establece el limite que que se movera el elemento.

        //Indica en que momento debe empezar a movers el elemento
        //Altura de la ventana

        if ( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite ) {
            
            //Se divide por 1.5 para que el efecto pallarax sea más lento que el movimiento normal del scroll (1.0 = 100px).
            //Se resta el valor porque sino mueve el elemento en base a todo lo recorrido en la pagina, por ende el elemento desaparecera.

            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) /1.5 + "px";

        } else{
            propParallax.seccion.style.backgroundPositionY = 0;
        }

    }

}

metParallax.inicio();



}());

