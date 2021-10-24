import { ElementRef, OnInit, Renderer2, Component, HostBinding } from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../shared/shared_route_animations'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@pageAnimations') animatePage = true
  
  constructor() {}
  ngOnInit(): void {}
}
