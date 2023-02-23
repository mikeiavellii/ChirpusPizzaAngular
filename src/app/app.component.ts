import { Component } from '@angular/core';
import { MenuItem } from './menu-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizzaLab';

  MenuItems:MenuItem[] = [
    {
      item: "Pizza",
      category: "Pizza",
      price: 5.00
    },
    {
      item: "Pepsi",
      category: "Drinks",
      price: 1.00
    },
    {
      item: "Bread Stick",
      category: "Pizza",
      price: 3.00
    },
    {
      item: "Wings",
      category: "Sides/Apps",
      price: 3.00
    },
    {
      item: "Tacos",
      category: "Sides/Apps",
      price: 2.00
    },
    {
      item: "Water",
      category: "Drinks",
      price: 1.00
    },
    {
      item: "Jalapeno Poppers",
      category: "Sides/Apps",
      price: 2.50
    },
];
}
