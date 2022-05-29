import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.css']
})
export class WishlistsComponent implements OnInit {

  constructor(
    public db: DataService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  removeProductFromWhishlist(prdIdx: number) {
    let elements = this.db.whishlisted.splice(prdIdx, 1);
    this.toast.info(elements[0]['title'], "Product Removed from Whishlist");
  }
}

