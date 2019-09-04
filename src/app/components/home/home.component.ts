import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LocationFormComponent } from '../location-form/location-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  mapHeight = 500;

  markers: Marker[] = []

  @ViewChild("mapContainer", { static: false }) mapContainer: ElementRef;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mapHeight = this.mapContainer.nativeElement.offsetHeight;
    }, 50);
  }

  onMapClicked(event: any) {
    let ref = this._bottomSheet.open(LocationFormComponent);
    ref.afterDismissed().subscribe(result => {
      console.log(result)
    })
    /*
    let marker: Marker = event['coords']
    this.markers.push(marker) 
    */
  }

}

interface Marker {
  lat: number,
  lng: number
}
