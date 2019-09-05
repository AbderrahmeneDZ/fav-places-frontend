import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LocationFormComponent } from '../location-form/location-form.component';
import { Place } from 'src/app/models/placeModel';
import { PlacesService } from 'src/app/services/places.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  places: Place[] = []

  @ViewChild("mapContainer", { static: false }) mapContainer: ElementRef;

  constructor(private _bottomSheet: MatBottomSheet, private service: PlacesService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getFavoriteLocations().subscribe((places) => {
      this.places = places
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mapHeight = this.mapContainer.nativeElement.offsetHeight;
    }, 50);
  }

  onMapClicked(event: any) {
    let ref = this._bottomSheet.open(LocationFormComponent);
    ref.afterDismissed().subscribe(result => {
      if (result) {
        let place: Place = {
          id: null,
          lat: event['coords']['lat'],
          lng: event['coords']['lng'],
          title: result['title'],
          description: result['description'],
        }
        let index = this.places.length
        this.places.push(place)

        this.service.postNewPlace(place).subscribe(res => {
          this.places[index].id = res['id']
          this._snackBar.open("Saved !!.", null, {
            duration: 2000,
          });
        }, err => {
          this.places.splice(index, 1)
          this._snackBar.open("Something went wrong, try again.", null, {
            duration: 2000,
          });
        })
      }
    })
  }

}
