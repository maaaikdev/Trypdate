import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	accommodation = [
		{
			id: 1,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Glamping romántico para una escapada de fin de semana en Bogotá',
			location: 'San Francisco de Sales, Distrito capital (Colombia)',
			price: '143'
		},
		{
			id: 2,
			images: 'assets/images/home/glamping.jpg',
			title: 'Tienda Safarí',
			description: 'Utopia Glamping',
			location: 'Villavicencio, Meta (Colombia)',
			price: '69'
		},
		{
			id: 3,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Romantic Tented Cabin Rental for a Santa Elena Getaway in Colombia',
			location: 'Rionegro, Antioquia (Colombia)',
			price: '146'
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
