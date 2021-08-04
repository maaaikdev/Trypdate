import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
//import { Place } from '../model/place.model';

interface Place {
    name: string;
    lat: number;
    long: number;
    id: string;
    visited: false;
}

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class PropertiesListComponent implements OnInit {

	places: Place[] = [];
	lat!: number;
	long!: number;
	zoom: number = 15;

	accommodation = [
		{
			id: 1,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Glamping romántico para una escapada de fin de semana en Bogotá',
			location: 'San Francisco de Sales, Distrito capital (Colombia)',
			price: '300.000'
		},
		{
			id: 2,
			images: 'assets/images/home/glamping.jpg',
			title: 'Tienda Safarí',
			description: 'Utopia Glamping',
			location: 'Villavicencio, Meta (Colombia)',
			price: '250.000'
		},
		{
			id: 3,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Romantic Tented Cabin Rental for a Santa Elena Getaway in Colombia',
			location: 'Rionegro, Antioquia (Colombia)',
			price: '350.000'
		},
		{
			id: 3,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Romantic Tented Cabin Rental for a Santa Elena Getaway in Colombia',
			location: 'Rionegro, Antioquia (Colombia)',
			price: '350.000'
		},
		{
			id: 3,
			images: 'assets/images/home/glamping.jpg',
			title: 'Cabañas de lona',
			description: 'Romantic Tented Cabin Rental for a Santa Elena Getaway in Colombia',
			location: 'Rionegro, Antioquia (Colombia)',
			price: '350.000'
		}
	]

	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 0;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

	ngOnInit() {
		this.setCurrentLocation();
		this.places.push(
			{
				lat: 9.711783,
				long: -75.119353,
				id: "1",
				name: "HoteLucho",
				visited: false
			}

		);
		console.log(this.places)
	}
	private setCurrentLocation() {
		if ('geolocation' in navigator) {
		  navigator.geolocation.getCurrentPosition((position) => {
			this.lat = position.coords.latitude;
			this.long = position.coords.longitude;
			this.zoom = 15;
			// this.getAddress(this.lat, this.long);
		  });
		}
	}

}
