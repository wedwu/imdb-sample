import { OnInit, Component, HostBinding } from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '@shared/shared_route_animations'

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations') animatePage = true

  constructor() { }
  ngOnInit(): void { }
}
