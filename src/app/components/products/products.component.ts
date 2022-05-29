import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  fetching: boolean = false;
  listofproducts: any[] = [];


  constructor(public db: DataService) { }

  ngOnInit(): void {
    this.db.getProducts();
    this.db.productsSub.subscribe(res => {
      if (res.length !== 0) {
        this.listofproducts = Object.assign([], res);
        this.fetching = false;
        console.log('Products', this.listofproducts)
      }
    }
    )
  }

}
