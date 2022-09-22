import { HotelListService } from './../shared/services/hotel-list.service';
import { IHotel } from './../shared/models/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public hotels: IHotel[] = [];

  public showBadge: boolean = true;
  public filteredHotels!: IHotel[];
  _hotelFilter = 'mot';

  public receivedRating!: string;
  public errorMsg!: string;

  constructor(private hotelListService: HotelListService) {

  }

  ngOnInit() {
    this.hotelListService.getHotels().subscribe(
      hotels => {
        this.hotels = hotels;
        this.filteredHotels = this.hotels;
      },
      err => this.errorMsg = err
    );

    this.hotelFilter = '';
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  get hotelFilter(): string {
    return this._hotelFilter;
  }

  set hotelFilter(filter: string) {
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }


  filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;

  }

  public receiveRatingClicked(message: string) {
    this.receivedRating = message;
  }

}
