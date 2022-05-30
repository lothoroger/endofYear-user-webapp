import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service'



export const menuItems: any[] = [
  { path: '/products', title: 'Products', icon: '', class: '' },
  { path: '/shopping-cart', title: 'Shopping-cart', icon: '', class: '' },
  { path: '/wishlist', title: 'Wishlist', icon: '', class: '' },
  { path: '/my-orders', title: 'My Orders', icon: '', class: '' },
  { path: '/profile', title: 'My Profile', icon: '', class: '' },
];





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public db: DataService) { }

  ngOnInit(): void {
  }

}
