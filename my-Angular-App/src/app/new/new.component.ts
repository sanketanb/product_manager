import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_product = { "name": "", "cuisine": ""}
  display_products: any;
  errors: String = "";
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.new_product = { "name": "", "cuisine": ""}
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  createNewProduct() {
    this.errors = "";
    let obs = this._httpService.createNewProduct(this.new_product);
    console.log(this.new_product);
    obs.subscribe((data) => {
      if (data['message']) {
        // if(data['message'] == "erroru"){
        //   this.errors = (data['data']) + " ";
        // }
        if (data['message'] == "error") {
          console.log("error is", data['data']);
          if (data['data'].name) {
            console.log("errors:", data['data'].name.message)
            this.errors = (data['data'].name.message) + " ";
          }
          if (data['data'].cuisine) {
            this.errors += (data['data'].cuisine.message) + " ";
          }
        }
        else {
          console.log("got data from post back", data);
          this.goHome();
        }
      }
    })
  }
}