import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { SwiperModule } from 'swiper/angular'


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { OffersComponent } from './components/offers/offers.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvertisingComponent,
    OffersComponent,
    MycartComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    ProductInfoComponent,
    PopupDialogComponent,
    NotificationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatDialogModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopupDialogComponent]

})
export class AppModule { }
