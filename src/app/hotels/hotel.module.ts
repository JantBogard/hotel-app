import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HotelListComponent,
    HotelDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'hotels/:id', component: HotelDetailComponent,
        canActivate: [HotelDetailGuard]
      },
      { path: 'hotels', component: HotelListComponent },
    ]),
    SharedModule
  ]
})
export class HotelModule { }
