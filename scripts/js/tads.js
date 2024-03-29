(function(){

    //Objetos con propiedades tad

var propTabs = { 
    primer_encabezado: document.getElementById("encabezado_menu").firstElementChild,
    primer_contenido: document.getElementById("contenido_menu").firstElementChild,
    enlaces_encabezado: document.querySelectorAll("#encabezado_menu li a"),
    li_encabezado: document.querySelectorAll("#encabezado_menu li"),
    divs_contenidos: document.querySelectorAll("#contenido_menu > div"),
    contenido_activo: null
}


// Objetos con metodos de Tad

var metTabs = {

    inicio: function () {
        propTabs.primer_encabezado.className = "active";
        propTabs.primer_contenido.className = "active";

        for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
            propTabs.enlaces_encabezado[i].addEventListener("click", metTabs.evento);
        }
    },

    //COMO ESTAMOS USANDO UN SELECTOR MULTIPLE Y TE DEVUELVE UN ARREGLO HAY QUE USAR UN CICLO.
    evento: function(e) {
        e.preventDefault();

        for (var i = 0; i < propTabs.li_encabezado.length; i++) {
            propTabs.li_encabezado[i].className = "";            
        }

        for (var i = 0; i < propTabs.divs_contenidos.length; i++) {
            propTabs.divs_contenidos[i].className = "";
        }

        this.parentElement.className = "active"
        propTabs.contenido_activo = this.getAttribute("href");
        document.querySelector(propTabs.contenido_activo).className = "active";

        document.querySelector(propTabs.contenido_activo).style.opacity = 0;
        //Animacion
        //El efecto esta sueve porque previamente se le agrego un transition en los css mucho antes.
        setTimeout(function () {
            document.querySelector(propTabs.contenido_activo).style.opacity = 1;
        },100);
    }

}

metTabs.inicio();


}())


