import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ns-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  orderItems: any[] = [];

  constructor(private http: HttpClient) {}

  placeOrder() {
    this.http.post('https://your-backend-api.com/orders', { items: this.orderItems })
      .subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          // Navigate to order confirmation or tracking page
        },
        (error) => {
          console.error('Error placing order:', error);
        }
      );
  }
}