import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { CartService } from 'src/app/services/cart.service';
import { FakeapiService } from 'src/app/services/fakeapi.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})


export class ProductInfoComponent implements OnInit {
  product:any;
  selectedValue: number=0;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  productList:any=[];
  constructor(private route: ActivatedRoute,private api:FakeapiService,
    private cartService:CartService) { }

  ngOnInit(): void {
    /*this.api.getAllProducts().subscribe(result=>{
      this.productList=result;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })*/
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getProduct(id).subscribe(res=>{
      this.product = res;
      this.selectedValue = this.product.rating.rate*2;
      this.product.quantity = 1
      })
      //console.log(this.product.quantity);
    }


  addToCart(product:any){
    this.cartService.increaseQty();
    this.cartService.addToCart(product);
    console.log(product.quantity);
  }

}
