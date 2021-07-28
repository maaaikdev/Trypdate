import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPropertiesComponent } from './pages/detail-properties/detail-properties.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';


	const routes: Routes = [
		{ path: '', component: HomeComponent  },
		{ path: 'listado-propiedades', component: PropertiesListComponent },
		{ path: 'detalle-propiedad', component: DetailPropertiesComponent }
	];

	@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
	})
export class AppRoutingModule { }
