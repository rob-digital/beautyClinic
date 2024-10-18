import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items: any[] = [];

    @Input() footerBackground: string;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.items = [

                    { label: 'Home', icon: '', routerLink: ['/'] },
                    { label: 'Treatments', icon: '', routerLink: ['/treatments'] },
                    { label: 'About us', icon: '', routerLink: ['/about'] },
                    { label: 'Contact', icon: '', routerLink: ['/contact'] },

        ]
    }
}
