import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  restaurantId: string;
  menuItems: any[] = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic tomato and mozzarella', price: 12.99, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Pepperoni Pizza', description: 'Spicy pepperoni with cheese', price: 14.99, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Vegetarian Pasta', description: 'Mixed vegetables in tomato sauce', price: 11.99, image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Chicken Alfredo', description: 'Creamy pasta with grilled chicken', price: 13.99, image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing', price: 8.99, image: 'https://via.placeholder.com/100' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.restaurantId = this.route.snapshot.params.id;
  }

  addToOrder(item: any) {
    console.log('Added to order:', item);
    // Implement add to order functionality
  }
}