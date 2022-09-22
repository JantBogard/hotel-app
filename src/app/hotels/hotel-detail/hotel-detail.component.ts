import { HotelListService } from './../shared/services/hotel-list.service';
import { IHotel } from './../shared/models/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel!: IHotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: number = <number>(<unknown>this.route.snapshot.paramMap.get('id'));

    this.hotelService.getHotels().subscribe(
      hotels => {
        this.hotel = <IHotel>hotels.find(hotel => hotel.hotelId == id);
        console.log('id:', id);
        console.log('Hotel: ', this.hotel);
        console.log(hotels);

      }
    )

  }

  public backToList() {
    this.router.navigate(['/hotels']);
  }

}
