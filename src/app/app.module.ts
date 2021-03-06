import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { GuestsComponent } from './shared/guests/guests.component';
import { LocationComponent } from './shared/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { DetailPropertiesComponent } from './pages/detail-properties/detail-properties.component';
import { PricesComponent } from './shared/prices/prices.component';
import { PropertyReservationComponent } from './pages/property-reservation/property-reservation.component';
import { TypePropertyComponent } from './shared/type-property/type-property.component';
import { PriceComponent } from './shared/price/price.component';
import { MoreFiltersComponent } from './shared/more-filters/more-filters.component';
import { FiltersComponent } from './shared/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PropertiesListComponent,
    CalendarComponent,
    GuestsComponent,
    LocationComponent,
    DetailPropertiesComponent,
    PricesComponent,
    PropertyReservationComponent,
    TypePropertyComponent,
    PriceComponent,
    MoreFiltersComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
