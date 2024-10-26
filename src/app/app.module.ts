import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './main/components/notfound/notfound.component';
import { CountryService } from './main/service/country.service';
import { CustomerService } from './main/service/customer.service';
import { EventService } from './main/service/event.service';
import { IconService } from './main/service/icon.service';
import { NodeService } from './main/service/node.service';
import { PhotoService } from './main/service/photo.service';

import { AboutComponent } from './main/components/about/about.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
    declarations: [AppComponent, NotfoundComponent, AboutComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        StyleClassModule,
        ButtonModule,
        CommonModule,
        GoogleMapsModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
