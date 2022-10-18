import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartQty:number=0;
  qty:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe( res=>{
      this.cartQty = res.length;
      this.qty = this.cartService.getQty();
      console.log(this.qty);
    })



  }

}
