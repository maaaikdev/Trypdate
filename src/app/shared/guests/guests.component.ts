import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

	constructor() {
		$('body').click(function() {
			$('#handleCounter').hide();
		});
		$('#handleCounter').click(function(event){
			event.stopPropagation();
		});
	 }

	ngOnInit() {
		//$('#handleCounter').hide();		
	}
	openCounter(){
		$('#handleCounter').show();
		const comp = $("#handleCounter");
		if (comp.css('display') === 'd-block') {
			$('body').click(function() {
				$('#handleCounter').hide();
			});
			$('#handleCounter').click(function(event){
				event.stopPropagation();
			});
		}
	}
}
