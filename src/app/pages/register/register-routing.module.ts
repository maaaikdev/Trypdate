import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';
import { RegAddPhotosComponent } from './reg-add-photos/reg-add-photos.component';
import { RegAvailabilityComponent } from './reg-availability/reg-availability.component';
import { RegCancellationComponent } from './reg-cancellation/reg-cancellation.component';
import { RegConditionsComponent } from './reg-conditions/reg-conditions.component';
import { RegConfigPriceComponent } from './reg-config-price/reg-config-price.component';
import { RegExperiencesComponent } from './reg-experiences/reg-experiences.component';
import { RegFeaturesAndServicesComponent } from './reg-features-and-services/reg-features-and-services.component';
import { RegPropertyDetails1Component } from './reg-property-details1/reg-property-details1.component';
import { RegPropertyDetails2Component } from './reg-property-details2/reg-property-details2.component';
import { RegisterComponent } from './register.component';


const routes: Routes = [
	{
		path: '',
		component: RegisterComponent,
		children: [
			{
				path: '',
				redirectTo: 'registro-propiedad'
			},
			{
				path: 'registro-propiedad', component: PropertyRegistrationComponent
			},
			{
				path: 'detalles-propiedad-1', component: RegPropertyDetails1Component
			},
			{
				path: 'detalles-propiedad-2', component: RegPropertyDetails2Component
			},
			{
				path: 'caracteristicas-y-servicios', component: RegFeaturesAndServicesComponent
			},
			{
				path: 'experiencias', component: RegExperiencesComponent
			},
			{
				path:'adicionar-fotos', component: RegAddPhotosComponent
			},
			{
				path:'condiciones', component: RegConditionsComponent
			},
			{
				path:'disponibilidad-propiedad', component: RegAvailabilityComponent
			},
			{
				path:'configuracion-precio', component: RegConfigPriceComponent
			},
			{
				path:'politicas-cancelacion', component: RegCancellationComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegisterRoutingModule { }
