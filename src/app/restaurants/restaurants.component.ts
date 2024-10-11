import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ns-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [
    { id: 1, name: 'Pizza Place', cuisine: 'Italian' },
    { id: 2, name: 'Burger Joint', cuisine: 'American' },
    { id: 3, name: 'Sushi Bar', cuisine: 'Japanese' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Commented out HTTP request for now
    // this.http.get<any[]>('https://your-backend-api.com/restaurants')
    //   .subscribe(
    //     (data) => {
    //       this.restaurants = data;
    //     },
    //     (error) => {
    //       console.error('Error fetching restaurants:', error);
    //     }
    //   );
  }
}