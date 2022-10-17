import { Component, OnInit } from '@angular/core';
import { FakeapiService } from 'src/app/services/fakeapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:any=[];
  constructor(private api:FakeapiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res=>{
      this.productList=res;
    })

  }

}
