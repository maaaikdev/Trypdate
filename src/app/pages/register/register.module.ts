import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';
import { ProgessbarComponent } from './progessbar/progessbar.component';
import { RegPropertyDetails1Component } from './reg-property-details1/reg-property-details1.component';
import { RegPropertyDetails2Component } from './reg-property-details2/reg-property-details2.component';
import { RegFeaturesAndServicesComponent } from './reg-features-and-services/reg-features-and-services.component';
import { RegExperiencesComponent } from './reg-experiences/reg-experiences.component';
import { RegAddPhotosComponent } from './reg-add-photos/reg-add-photos.component';
import { RegConditionsComponent } from './reg-conditions/reg-conditions.component';
import { RegAvailabilityComponent } from './reg-availability/reg-availability.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegConfigPriceComponent } from './reg-config-price/reg-config-price.component';
import { RegCancellationComponent } from './reg-cancellation/reg-cancellation.component';



@NgModule({
  declarations: [
    RegisterComponent,
    PropertyRegistrationComponent,
    ProgessbarComponent,
    RegPropertyDetails1Component,
    RegPropertyDetails2Component,
    RegFeaturesAndServicesComponent,
    RegExperiencesComponent,
    RegAddPhotosComponent,
    RegConditionsComponent,
    RegAvailabilityComponent,
    RegConfigPriceComponent,
    RegCancellationComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule, NgbModule
  ]
})
export class RegisterModule { }
