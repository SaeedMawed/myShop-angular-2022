import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FakeapiService } from 'src/app/services/fakeapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:any=[];
  constructor(private api:FakeapiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }

  getProductList(){
    return this.productList;
  }

  addToCart(product:any){

    this.cartService.increaseQty();
    this.cartService.addToCart(product);
  }

}
