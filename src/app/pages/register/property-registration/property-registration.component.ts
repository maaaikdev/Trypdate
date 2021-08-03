import { Component, OnInit } from '@angular/core';

interface Place {
  name: string;
  lat: number;
  long: number;
  id: string;
  visited: false;
}

@Component({
  selector: 'app-property-registration',
  templateUrl: './property-registration.component.html',
  styleUrls: ['./property-registration.component.scss']
})
export class PropertyRegistrationComponent implements OnInit {

  places: Place[] = [];
	lat!: number;
	long!: number;
	zoom: number = 15;

  constructor() { }

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
		console.log(this.places);    
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
