import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LocationFormComponent } from '../components/location-form/location-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ],
  exports: modules,
  entryComponents: [
    LocationFormComponent
  ]
})
export class AppMaterialModule { }
