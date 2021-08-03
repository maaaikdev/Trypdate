import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reg-availability',
  templateUrl: './reg-availability.component.html',
  styleUrls: ['../property-registration/property-registration.component.scss']
})
export class RegAvailabilityComponent implements OnInit {

	model: NgbDateStruct;

	constructor() { }

	ngOnInit() {
	}

}
