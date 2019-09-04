import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<LocationFormComponent>) { }

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  onSubmit() {
    this._bottomSheetRef.dismiss(this.form.value)
  }

  get title() { return this.form.get('title') }
  get description() { return this.form.get('description') }

}
