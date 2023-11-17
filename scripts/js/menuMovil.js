
// Propiedades de menu movil

var propMenu = {

	burger_menu: document.getElementById('burger_menu'),
	sliderMenu: document.getElementById('sliderMenu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#sliderMenu .menu-principal a')

}

// Métodos de menu movil

var metMenu = {
	
	inicio: function () {
		
		propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}

	},

	toggleMenu: function () {
		if ( propMenu.menu_activo == false ) {

			propMenu.menu_activo = true;
			propMenu.sliderMenu.className = propMenu.sliderMenu.className + ' active';

		} else{

			propMenu.menu_activo = false;
			propMenu.sliderMenu.className = propMenu.sliderMenu.className.replace('active', '');

		}
	},

	ocultarMenu: function () {
		propMenu.menu_activo = false;
		propMenu.sliderMenu.className = propMenu.sliderMenu.className.replace('active', '');
	}

}

metMenu.inicio();