import { computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    newTheme: string = "saga-blue";
    newColourTheme: string = "";

    constructor(public layoutService: LayoutService) {
        effect(() => {
            if (layoutService.myNewThemeName() == 'arya-blue' && layoutService.myNewThemeColour() == 'dark') {
                this.newColourTheme = 'dark'
            } else if ((layoutService.myNewThemeName() == 'saga-blue' && layoutService.myNewThemeColour() == 'light') || (layoutService.myNewThemeName() == '' && layoutService.myNewThemeColour() == '')) {
                this.newColourTheme = 'light'
            }

        },{allowSignalWrites: true})

    }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Home', icon: '', routerLink: ['/'] },
                    { label: 'Treatments', icon: '', routerLink: ['/treatments'] },
                    { label: 'About us', icon: '', routerLink: ['/about'] },
                    { label: 'Contact', icon: '', routerLink: ['/contact'] },
                ]
            },

        ];


    }

    setTheme(themeName, themeColour) {
        this.layoutService.updateTheme(themeName, themeColour);
    }

}
