import { ChangeDetectorRef, ViewChild, Component, HostBinding } from '@angular/core'
import { getLCP, getFID, getCLS } from 'web-vitals'
import { Router, RouterOutlet } from '@angular/router'
import { trigger, transition, animate, style, query, group, animateChild } from '@angular/animations'

import PHOTOS from '@shared/misc/photos'

const MIN_PAGE_TIMEOUT = 2000
const ELASTIC_BEZIER = 'cubic-bezier(.26,1.96,.58,.61)'

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
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [
        query('.text', [
          style({ marginTop: '-200px' }),
          animate('1500ms ' + ELASTIC_BEZIER, style({ marginTop: '0px' }))
        ])
      ]),
      transition(':leave', [
        query('.text', [
          animate('800ms ease-out', style({ opacity: '0' }))
        ]),
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('routeAnimation', [
      transition('* => intro', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute', top:0, left:0, width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100px)', opacity:0 }),
            animate('300ms ease-out', style({ opacity:1, transform: 'none' })),
            animateChild()
          ]),
        ])
      ]),
      transition('* => advanced, * => routing, * => basics, * => programmatic, * => resources', [
        query(':enter', animateChild())
      ]),
      transition('* => *', [])
    ])
  ]
})

export class AppComponent {
  @HostBinding('@.disabled') animationsDisabled = false

  // this will be true once all the photos are preloaded
  public title = 'imdb-sample-v1'
  public ready = true
  public page: any
  private _preloaded = false
  private _timeoutDone = false
  public percentage = 0
  public isDark: any = true
  public defaultModeValue: string = 'light'
  darkModeSelected: any

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
    let count = 0
    let done = false
    const body = document.body
    PHOTOS.forEach(photo => {
      const img = new Image()
      img.onload = onImageDone
      img.src = photo.src
    })

    function onImageDone() {
      if (!done && ++count >= PHOTOS.length) {
        done = true
        onDoneCb()
      } else {
        onProgressCb(count, PHOTOS.length)
      }
    }
  }

  disableAnimations = () => this.animationsDisabled = true
  enableAnimations = () => this.animationsDisabled = false
  toggleAnimations = () => this.animationsDisabled ? this.enableAnimations() : this.disableAnimations()
  prepRouteAnimation = (outlet: RouterOutlet) => outlet.activatedRouteData['animation'] || ''
}
