import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../Model/product-Model';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
tittle = 'Add product';
// @Input() data : ProductModel;
@Input() product : ProductModel ={
  ProductId: 0,
  ProductName: '',
  ProductEstablishYr: '',
  ProductCost: 0,
  PrachasingDate: undefined,
  DeliveryDate: undefined,
  LastUpdatedDate: undefined,
  Resalevalue: 0
}
  constructor(private router : Router, private service : ProductService) { }

  ngOnInit(): void {
    console.log(this.product);
  }
  addProduct(){
    this.service.updateProduct(this.product).subscribe(res=>{
     // product: ProductModel;
    });
   this.router.navigate(['/product/list']);
  }
}
