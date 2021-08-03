import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-progessbar',
  templateUrl: './progessbar.component.html',
  styleUrls: ['./progessbar.component.scss']
})
export class ProgessbarComponent implements OnInit {

	url: any;

	constructor(
		public router: Router
	) {
		this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
			  this.url = val.url;
			  console.log("URL", this.url)
			}
		});
	 }

	ngOnInit() {
	}

	progessBar() {
		switch (this.url) {
			case '/private/registro-propiedad':
				return 'prog-10';
			case '/private/detalles-propiedad-1':
				return 'prog-20'
			case '/private/detalles-propiedad-2':
				return 'prog-30'
			case '/private/caracteristicas-y-servicios':
				return 'prog-40'
			case '/private/experiencias':
				return 'prog-50'
			case '/private/adicionar-fotos':
				return 'prog-60'
			case '/private/condiciones':
				return 'prog-70'
			case '/private/disponibilidad-propiedad':
				return 'prog-80'
			case '/private/configuracion-precio':
				return 'prog-90'
			case '/private/politicas-cancelacion':
				return 'prog-100'
			default:
		}
	}
	stepsBar() {
		switch (this.url) {
			case '/private/registro-propiedad':
				return 'Paso 1 de 10 / Resgitro de propiedad';
			case '/private/detalles-propiedad-1':
				return 'Paso 2 de 10 / Detalles de la propiedad'
			case '/private/detalles-propiedad-2':
				return 'Paso 3 de 10 / Detalles de la propiedad'
			case '/private/caracteristicas-y-servicios':
				return 'Paso 4 de 10 / Características y servicios'
			case '/private/experiencias':
				return 'Paso 5 de 10 / Experiencias'
			case '/private/adicionar-fotos':
				return 'Paso 6 de 10 / Añadir fotos de la propiedad'
			case '/private/condiciones':
				return 'Paso 7 de 10 / Condiciones'
			case '/private/disponibilidad-propiedad':
				return 'Paso 8 de 10 / Disponibilidad de propiedad'
			case '/private/configuracion-precio':
				return 'Paso 9 de 10 / Configuración de precio'
			case '/private/politicas-cancelacion':
				return 'Paso 10 de 10 / Políticas de cancelación'
			default:
		}
	}
}
