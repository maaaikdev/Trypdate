import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['../guests/guests.component.scss']
})
export class PricesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$('#pricesComp').hide();
	}

	openCounter(){
		$('#pricesComp').toggleClass('d-block');
	}

}
