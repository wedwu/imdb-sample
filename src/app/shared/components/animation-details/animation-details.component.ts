import { Component } from '@angular/core'
import { AnimationItem, AnimationCountService } from '@services/animation-count/animation-count.service'

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
  selector: 'app-animation-details',
  templateUrl: './animation-details.component.html',
  styleUrls: ['./animation-details.component.sass']
})
export class AnimationDetailsComponent {
  constructor(private _service: AnimationCountService) { }

  get animationItems(): AnimationItem[] {
    return this._service.items
  }

  loadAnimationDetails(item: AnimationItem) {
    return 
  }
}
