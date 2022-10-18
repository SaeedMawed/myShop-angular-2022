import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FakeapiService } from 'src/app/services/fakeapi.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,SwiperOptions} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class OffersComponent implements OnInit {

    offersList:any=[];
  constructor(private api:FakeapiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res=>{
        this.offersList = res;
    })
  }



  config:SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    //spaceBetween: 20,
    loop: true,
    watchOverflow: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        20: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        300: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1000: {
            slidesPerView: 5,
            spaceBetween: 15
        }

    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  }

}
