(function (){

    //PROPIEDADES DEL SLIDER

var propSlider = {

    slider:document.getElementById("slider"),
    primerSlider: null

}


//METODO SLIDER



var metSlider = {


        //PARA QUE SE EJECUTE LA FUNCION QUE ESTA AQUI DENTRO DE ESTA MISMA HAY LA LLAMARLA CON CADA PASO DE LA RAIZ
    inicio: function () {
        setInterval(metSlider.moverSlider, 3000);

    },


    moverSlider: function () {
        propSlider.slider.style.transition = "all 1s ease";  //Hay que revisar esto para el cambio de imagen que sea acorde con el setInterval y lo demás porque puede generar bug visuales
        propSlider.slider.style.marginLeft = "-100%"


        setTimeout(function () {
            propSlider.primerSlider = propSlider.slider.firstElementChild;      //PRIMER ELEMENTO HIJO
            propSlider.slider.appendChild(propSlider.primerSlider); //Esto es para colocar el primer slider al final, para que el ciclo siga repitiendose.
            propSlider.slider.style.transition = "unset"; //Le quitamos el transition para que se le de un bug visual al cambio de imagen, cuando cambia la imagen, aun se estan moviendo y acomodando.
            propSlider.slider.style.marginLeft = 0;
        }, 1000);
    }

}

metSlider.inicio();

}())

