import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {

  }
  showProducts() {
    return this._http.get('/products')
  }
  createNewProduct(new_product) {
    return this._http.post('/products', new_product)
  }
  deleteProduct(id) {
    console.log(id);
    return this._http.delete(`/products/${id}`)
  }
  // updateQuote(quote) {
  //   return this._http.patch('/products', quote);
  // }
  getOne(id) {
    console.log(id);
    return this._http.get(`/products/${id}`)
  }
  updateProduct(id, update_product){
    console.log(id);
    return this._http.put(`/products/${id}`, update_product)
  }
}
