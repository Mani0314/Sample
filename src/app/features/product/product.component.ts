import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Model/product-Model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Isclick = true;
  public dataSource : ProductModel = {
    ProductId: 0,
    ProductName: '',
    ProductEstablishYr: '',
    ProductCost: 0,
    PrachasingDate: undefined,
    DeliveryDate: undefined,
    LastUpdatedDate: undefined,
    Resalevalue: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  datafromCtP(data : ProductModel){
    debugger
    this.dataSource = data;
    this.Isclick = false
    console.log(this.dataSource,'Single product');
  }
}
