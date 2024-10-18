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

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
