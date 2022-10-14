import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../Model/product-Model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  apiUrl = "http://localhost:59092/api/product";
  getAll():Observable<ProductModel[]>{
    const url = `${this.apiUrl}/getAll`;
    const result = this.http.get<ProductModel[]>(url);
    return result;
  }
  updateProduct(add : ProductModel) : Observable<ProductModel>{
    debugger
    const url = `${this.apiUrl}/update`;
    const result = this.http.post<ProductModel>(url,add);
    return result;
  }
  deleteProduct(id : number) : Observable<any>{
    const url = `${this.apiUrl}/delete?id=${id}`;
    const result = this.http.get<any>(url);
    return result;
  }
}
