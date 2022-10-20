import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DialogService } from 'src/app/services/dialog.service';

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
  constructor(private cartService:CartService,private dialog:DialogService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.cartItems=res;
      this.countOfTypes=res.length;
      this.totalOfPiece=this.cartService.getQty();
      this.totalPrice=this.cartService.grandTotal;
    })


  }
  removeItem(item:any){
    this.dialog.deleteItemConfirm("Are you sure want to delete this record from your cart ?").afterClosed().subscribe(res=>{
      if(res){
        this.cartService.removeProduct(item);
      }
    })

  }

}
