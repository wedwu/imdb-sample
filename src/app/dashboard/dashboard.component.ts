// import _ from 'lodash'
// import { ElementRef, Output, OnInit, Renderer2, Component, HostBinding, ViewChild, EventEmitter } from '@angular/core'
// import { Router } from '@angular/router'
// // SERVICE
// import { WindowRefService } from '@services/window-ref/window-ref.service'
// // import { StorageService } from '@core/common/storage.service'
// // MATERIAL
// import { MatAccordion } from '@angular/material/expansion'
// import { MatCardModule } from '@angular/material/card'
// // ANIMATION / PAGE
// import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations'
// import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '@shared/shared_route_animations'
//
// export interface Section {
//   name: string
//   updated: Date
// }

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.sass'],
//   animations: [
//     trigger('pageAnimations', [
//       transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
//       transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
//     ]),
//   ]
// })
// export class DashboardComponent implements OnInit {
//   @HostBinding('@pageAnimations')
//   public animatePage = true
//   // @ViewChild(MatAccordion) accordion: MatAccordion
//   // MatCardModule
//
//   public cardLinks: string[] = ['dashboard', 'edit']
//   public links = ['IMDB Admin', 'Dashboard', 'Web-Relays', 'Files', 'Dbeacons', 'Cast-Media', 'Areas', 'Locations', 'Readers']
//
//   public darkMode = 'dark' || 'light' // false // this._storageService.getSession('isDark')
//   public cardTitleBackground : string= 'transparent'
//   public darkClassMode: string = ''
//
//   constructor(
//     public elementRef: ElementRef,
//     // private _storageService: StorageService,
//     private _windowRef: WindowRefService,
//     private _router: Router,
//     public renderer: Renderer2) {
//   }
//
//   ngOnInit() {}
//
//   findCurrentNavLink = () => {
//     const HREF = this._windowRef.nativeWindow.location.href
//     if (HREF.includes('about')) return 0
//     if (HREF.includes('dashboard')) return 1
//     return 1
//   }
//
//   activeLink = this.links[this.findCurrentNavLink()]
//
//   onClick = (pageLink: string) => {
//     // this._router.navigate([`/dbeacons/dbeacon-details/0C/edit`])
//     this._router.navigate([`/${pageLink}`])
//   }
// }
