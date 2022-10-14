import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../Model/product-Model';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public data : ProductModel[] = [];
@Output() event : EventEmitter<ProductModel> = new EventEmitter();
constructor(private router : Router, private product : ProductService) { }

  ngOnInit(): void {
    this.product.getAll().subscribe(res=>{
      this.data = res;
      console.log(this.data);
    });
  }
  onClick(){
    this.router.navigate(['/product/edit']);
  }
  editProduct(args:ProductModel){
    debugger;
   // alert('save');
    this.event.emit(args);
  }
  // delete(id : number){
  //   this.product.deleteProduct(id).subscribe(res=>{
      
  //   });
  //}
}
