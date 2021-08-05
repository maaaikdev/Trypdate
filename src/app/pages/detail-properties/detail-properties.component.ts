import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface Place {
    name: string;
    lat: number;
    long: number;
    id: string;
    visited: false;
}

@Component({
  selector: 'app-detail-properties',
  templateUrl: './detail-properties.component.html',
  styleUrls: ['./detail-properties.component.scss']
})
export class DetailPropertiesComponent implements OnInit {

	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
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

	constructor(
		config: NgbCarouselConfig
	) { 
		// customize default values of carousels used by this component tree
		config.interval = 10000;
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
