import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatListModule,

 
 } from '@angular/material';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
//import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({

  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule ,
    //FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    
    //CoreModule,],
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,FormsModule,
    ReactiveFormsModule ,
    MatSnackBarModule,
    //FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    //CoreModule,],
  ],
})
export class MaterialModule { }
