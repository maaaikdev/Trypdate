import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPropertiesComponent } from './pages/detail-properties/detail-properties.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';
import { PropertyReservationComponent } from './pages/property-reservation/property-reservation.component';


	const routes: Routes = [
		{ path: '', component: HomeComponent  },
		{ path: 'listado-propiedades', component: PropertiesListComponent },
		{ path: 'detalle-propiedad', component: DetailPropertiesComponent },
		{ path: 'reserva-propiedad', component: PropertyReservationComponent },
		{ 
			path: 'private',
			loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
		}
	];

	@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
	})
export class AppRoutingModule { }
