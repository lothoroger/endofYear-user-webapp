import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public productlisted: any[] = [];
  public whishlisted: any[] = [];


  productsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  productsRetrieved: boolean = false;
  constructor(private http: HttpClient,
    private toast: ToastrService) { }

  getProducts() {

    if (!this.productsRetrieved) {
      this.http.get('../../assets/productsjson.json')
        .subscribe((res) => {
          this.productsSub.next(Object.assign([], res))
          this.productsRetrieved = true
        })
    }
  }

  addProductToShoppingCart(prd: any, prdRemoveBool: boolean = false, prdIdx: number = -1) {

    if (this.productlisted.some(x => x["id"] === prd["id"])) {

      let idx = this.productlisted.findIndex(x => x["id"] === prd["id"]);
      this.productlisted[idx]["quantity"] += 1;
      this.toast.info(prd['title'], "Already Added to Cart, Quantity Updated")
    } else {
      this.productlisted.push({
        ...prd,
        "quantity": 1
      });
      this.toast.success(prd['title'], "Product Added to Cart")
    }


  }


  addProductToWhishList(prd: any, prdRemoveBool: boolean = false, prdIdx: number = -1) {
    if (!this.whishlisted.some(x => x["id"] === prd["id"])) {
      this.whishlisted.push({
        ...prd,
        "quantity": 1
      });
      this.toast.success(prd['title'], "Product Added to Whishlist");
    } else {
      this.toast.info(prd['title'], "Already Added to Whishlist");
    }

    if (prdRemoveBool) {
      this.productlisted.splice(prdIdx, 1);
    }
  }
}





