import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from './dialog.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsList:any=[];
  public productList = new BehaviorSubject<any>([]);
  public grandTotal :number = 0;// total of price
  public Qty:number=0//total of items

  constructor(private dialog:DialogService) { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemsList.push(...product);
    this.productList.next(this.cartItemsList);
  }

  addToCart(product:any){
    let check : boolean = false;
    if(this.updateQty(product)){
      this.cartItemsList.push(product);
    }
    this.productList.next(this.cartItemsList);
    this.updateTotalPrice(product.price);
    this.dialog.addedSuccessfully("Product successfully added to your shopping cart").afterClosed().subscribe(res=>{

    })
  }

  updateQty(product:any):boolean{
    let title:string = product.title;
    let price:number = product.price;
    let desc:string = product.description;
    let items = this.cartItemsList;
    let index : number = 0;
    for (let item of items){
      index++;
      if( item.title === title && item.price === price && item.description === desc){
        item.quantity +=1;
        return false;
      }
    }
    return true;
  }


  updateTotalPrice(product:number) {
    let gt = this.grandTotal;
    this.grandTotal = gt + product;
  }

  getQty():number{
    return this.Qty;
  }
  removeProduct(product:any){

    this.updateTotalPrice(-1*product.price*product.quantity);
    this.decreaseQty(product.quantity);
    this.cartItemsList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemsList.splice(index,1);
      }
    this.productList.next(this.cartItemsList);
    })
  }
  removeAllCart(){
    this.cartItemsList = [];
    this.productList.next(this.cartItemsList);
    this.Qty = 0 ;
  }

  increaseQty(){
    this.Qty +=1;
  }

  decreaseQty(count:number){
    this.Qty =this.Qty - count;
  }
}
