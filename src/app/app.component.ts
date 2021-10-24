import { ChangeDetectorRef, ViewChild, Component, HostBinding } from '@angular/core'
import { getLCP, getFID, getCLS } from 'web-vitals'
import { Router, RouterOutlet } from '@angular/router'
import { trigger, transition, animate, style, query, group, animateChild } from '@angular/animations'

import PHOTOS from './shared/misc/photos'

const MIN_PAGE_TIMEOUT = 4000
const ELASTIC_BEZIER = 'cubic-bezier(.26,1.96,.58,.61)'

/**
 * todo: imdb-version-1
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
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  @HostBinding('@.disabled') animationsDisabled = false

  // this will be true once all the photos are preloaded
  public title: string = 'imdb-version-1'
  public ready: boolean = false
  public page: any
  private _preloaded: boolean = false
  private _timeoutDone: boolean = false
  public percentage: number = 0
  public isDark: boolean = true
  public defaultModeValue: string = 'light'
  public darkModeSelected: string = ''

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router
  ) {}

  ngOnInit() {
    getCLS(console.log)
    getFID(console.log)
    getLCP(console.log)

    const isDark = this.defaultModeValue
    this.darkModeSelected = isDark || this.defaultModeValue
    const eleID = document.getElementById('wrapper')
    const elmHTML =  document.getElementsByTagName('html')
    const switchBackground = this.darkModeSelected.toLowerCase() === 'dark' ? 'darkBackground' : 'lightBackground'
    elmHTML[0].classList.remove('darkBackground')
    elmHTML[0].classList.remove('lightBackground')
    elmHTML[0].classList.add(switchBackground)
    this.preloadPhotos(() => {
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

  preloadPhotos(onDoneCb: () => any, onProgressCb: (doneCount: number, totalCount: number) => any) {
    let count: number = 0
    let done: boolean = false
    const body = document.body
    PHOTOS.forEach(photo => {
      const img = new Image()
      img.onload = onImageDone
      img.src = photo.src
    })

    function onImageDone() {
      if (!done && ++count >= PHOTOS.length) {
        done = true
        console.log(`PHOTOS DONE => ${JSON.stringify(PHOTOS)}`) // <= remove
        onDoneCb()
      } else {
        console.log(`count => ${count}`) // <= remove
        onProgressCb(count, PHOTOS.length)
      }
    }
  }

  disableAnimations = () => this.animationsDisabled = true
  enableAnimations = () => this.animationsDisabled = false
  toggleAnimations = () => this.animationsDisabled ? this.enableAnimations() : this.disableAnimations()
  prepRouteAnimation = (outlet: RouterOutlet) => outlet.activatedRouteData['animation'] || ''
}
