import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {
  constructor( public layoutService: LayoutService) {}
}
