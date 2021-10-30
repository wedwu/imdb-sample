import { ChangeDetectorRef, Component } from '@angular/core'

import { getLCP, getFID, getCLS } from 'web-vitals'

import POSTERS from '@shared/misc/posters'
const MIN_PAGE_TIMEOUT = 2000

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: []
})

export class AppComponent {

  // this will be true once all the posterss are preloaded
  public title: string = 'imdb-version-1'
  public ready: boolean = false
  public page: any
  private _preloaded: boolean = false
  private _timeoutDone: boolean = false
  public percentage: number = 0

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit() {
    // testing
    getCLS(console.log)
    getFID(console.log)
    getLCP(console.log)

    this.preloadPosters(() => {
      this._preloaded = true
      this.percentage = 100
      this._onReady()
    }, (doneCount, totalCount) => {
      this.percentage = Math.ceil((doneCount / totalCount) * 100)
      this._cd.detectChanges()
    })
    setTimeout(() => {
      this._timeoutDone = true
      this._onReady()
    }, MIN_PAGE_TIMEOUT)
  }
  private _onReady() {
    if (this._preloaded && this._timeoutDone) {
      this.ready = true
      this._cd.detectChanges()
    }
  }
  preloadPosters(onDoneCb: () => any, onProgressCb: (doneCount: number, totalCount: number) => any) {
      let count: number = 0,
          done: boolean = false
    const body = document.body
    POSTERS.forEach(poster => {
      const img = new Image()
      img.onload = onImageDone
      img.src = poster.src
    })
    function onImageDone() {
      if (!done && ++count >= POSTERS.length) {
        done = true, onDoneCb()
      } else {
        onProgressCb(count, POSTERS.length)
      }
    }
  }
}
