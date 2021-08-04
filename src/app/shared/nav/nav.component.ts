import { Component, OnInit, HostListener } from '@angular/core';
//import { $ } from 'protractor';

declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@HostListener("window:scroll", ['$event'])
	onScroll(event) {
		// if (event.srcElement.scrollTop == 0) {
		// 	console.log("Scroll 0")
		// } else {
		// 	console.log("Scroll active")
		// }
		if (window.pageYOffset == 0) {
			console.log("Scroll 0")
			//$(".detail-properties").addClass("detail-fixed");
			$("#navFIxedTop").removeClass("fixed-scroll");
		} else {
			console.log("Scroll active")
			$("#navFIxedTop").addClass("fixed-scroll");
			//$(".detail-properties").removeClass("detail-fixed")
		}
	}

}
