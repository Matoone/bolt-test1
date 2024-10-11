import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ns-shipper',
  templateUrl: './shipper.component.html',
})
export class ShipperComponent implements OnInit {
  availableOrders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAvailableOrders();
  }

  fetchAvailableOrders() {
    this.http.get<any[]>('https://your-backend-api.com/shipper/available-orders')
      .subscribe(
        (data) => {
          this.availableOrders = data;
        },
        (error) => {
          console.error('Error fetching available orders:', error);
        }
      );
  }

  acceptOrder(orderId: string) {
    this.http.post(`https://your-backend-api.com/shipper/accept-order/${orderId}`, {})
      .subscribe(
        (response) => {
          console.log('Order accepted:', response);
          // Update UI or navigate to order details
        },
        (error) => {
          console.error('Error accepting order:', error);
        }
      );
  }
}