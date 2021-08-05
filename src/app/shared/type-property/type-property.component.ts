import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-type-property',
  templateUrl: './type-property.component.html',
  styleUrls: ['../prices/prices.component.scss']
})
export class TypePropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#typeProperty').hide();
  }

  openCounter(){
		$('#typeProperty').toggleClass('d-block');
	}

}
