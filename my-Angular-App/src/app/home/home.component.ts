import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display_products: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.showProducts()
  }
  goReviewsPage(id){
    this.router.navigate([`/reviews/${id}`]);
  }
  
  goEditPage(id) {
    console.log("goes to edit page");
    console.log(id);
    this.router.navigate([`/edit/${id}`]);
  }

  showProducts() {
    let obs = this._httpService.showProducts();
    console.log("hello from show products");
    obs.subscribe(data => {
      this.display_products = data['data'];
      console.log(this.display_products);
    })
  }

  deleteProduct(id) {
    let del_obs = this._httpService.deleteProduct(id);
    del_obs.subscribe(data => {
      this.showProducts()
    })
  }

}
