import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$('#handleCounter').hide();
	}
	openCounter(){
		$('#handleCounter').toggleClass('d-block');
	}

}
