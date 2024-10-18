import { Component, Input } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {

    @Input() footerBackground: string;
    @Input() year: number;

    constructor(public layoutService: LayoutService) { }
}
