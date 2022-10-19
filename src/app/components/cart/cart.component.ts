import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FakeapiService } from 'src/app/services/fakeapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any=[];
  countOfTypes:number=0;
  totalOfPiece:number=0;
  totalPrice:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.cartItems=res;
      this.countOfTypes=res.length;
      this.totalOfPiece=this.cartService.getQty();
      this.totalPrice=this.cartService.grandTotal;
    })


  }
  removeItem(item:any){
    this.cartService.removeProduct(item);
  }

}
