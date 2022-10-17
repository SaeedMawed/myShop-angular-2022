import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y ,
    SwiperOptions,EffectFade, Lazy} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade,Lazy]);

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdvertisingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
