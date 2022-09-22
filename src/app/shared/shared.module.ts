import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCommaPipe } from './pipes/remove-comma.pipe';



@NgModule({
  declarations: [
    StarRatingComponent,
    RemoveCommaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarRatingComponent,
    RemoveCommaPipe
  ]
})
export class SharedModule { }
