import { ChangeDetectorRef, Component, OnInit, HostBinding } from '@angular/core'
import { getLCP, getFID, getCLS } from 'web-vitals'
import { Router, RouterOutlet } from '@angular/router'
import { trigger, transition, animate, style, query, group, animateChild } from '@angular/animations'

import PHOTOS from '../../../shared/misc/photos'

const MIN_PAGE_TIMEOUT = 2000
const ELASTIC_BEZIER = 'cubic-bezier(.26,1.96,.58,.61)'

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.sass'],
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
export class LoadingSpinnerComponent implements OnInit {

  public ready: boolean = true
  constructor() {}
  ngOnInit(): void {}
}