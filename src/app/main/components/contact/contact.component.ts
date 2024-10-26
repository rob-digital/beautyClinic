import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {


    // options: google.maps.MapOptions = {
    //     center: { lat: -31, lng: 147 },
    //     zoom: 8,
    //   };

     svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 20),
      };

      constructor( public layoutService: LayoutService) {}

      ngOnInit(): void {


        let map: google.maps.Map;
        async function initMap(): Promise<void> {

            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            map = new Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 56.118314957729844, lng: -3.1571189582182333 },
                zoom: 18,
                mapId: '7ec078a45c7705fb'

            });

            const marker = new AdvancedMarkerElement({
                map,
                position: { lat: 56.11815287571036, lng: -3.1571136357557448 },
            });
        }




        initMap();
      }
}
