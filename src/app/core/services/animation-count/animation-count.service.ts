import { Injectable } from '@angular/core'
import { AnimationItem } from '../../models/spinner.model'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Injectable()
export class AnimationCountService {
  private _items: AnimationItem[] = []

  get total() {
    return this._items.length
  }

  specifyAnimations = (animations: AnimationItem[]) =>
    this._items = Array.from(animations)

  get items() {
    return this._items
  }
}
