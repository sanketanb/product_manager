import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '.././http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  update_product = { name: "", cuisine: ""}
  // update_product: any; we cannot assign any else we get titl undefined before fetching data
  update_errors: String = "";

  constructor(private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id'])
      console.log("woooohooooo")
      this.getOne(params['id']);
    });
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  
  getOne(id) {
    let obs = this._httpService.getOne(id);
    obs.subscribe(product_data => {
      console.log("getOne data", product_data['data']);
      console.log("woohooo2");
      console.log("getOne message", product_data['message']);
      this.update_product = product_data['data'];
    })
  }

  updateOne(id) {
    let obs = this._httpService.updateProduct(id, this.update_product);
    obs.subscribe(product_data => {
      if (product_data['message'] == "success") {
        this.router.navigate(['/home']);
      }
      else {
        console.log("message from updateone", product_data['message']);
        this.update_errors += product_data['message'];
      }
    })
  }
}
