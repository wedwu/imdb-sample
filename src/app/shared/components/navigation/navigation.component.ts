import { Component, Input /*, OnInit, AfterContentInit, ChangeDetectionStrategy, SimpleChanges*/ } from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { Router, RouterOutlet } from '@angular/router'
import { /*HttpHeaders,*/ HttpClient } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
// import { MatDialog, MatDialogConfig } from '@angular/material'
import { trigger, transition, style, animate } from '@angular/animations'
import { AnimationCountService } from '@services/animation-count/animation-count.service'
import { WindowRefService } from '@services/window-ref/window-ref.service'
// import { ConfigService } from '@services/config/config.service'
import { AppComponent } from '@app/app.component'

declare var $: any

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
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [
    trigger('counterChangeAnimation', [
      transition(':enter', []),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class NavigationComponent {
  activeLoadedLink: number
  linkClick: number
  logOutText: string
  logOutConfirmation: any
  loggedOutSuccessMessage: any
  setTimeOutInt = 7000
  message: any
  showMessage = false
  submitAttempted = false
  darkModeSelected: any

  delay500: number = 500
  delay1000: number = 1000
  delay1500: number = 1500
  delay2000: number = 2000

  whichPark = 'wdw' // must be [dlr|wdw]

  // @Input() parkIconChar: any
  // @Input() url: string
  @Input() userInitials: string

  public version: string = 'version'
  public name: string = 'name'
  public description: string = ' ,,,,,,,,,,'
  parkIcon: any
  menuDisplay: boolean
  userName: string

  constructor(
    private _router: Router,
    protected http: HttpClient,
    // private _storageService: StorageService,
    private _windowRef: WindowRefService,
    // private _animationCount: AnimationCountService,
    private _parent: AppComponent
  ) {
    this.userInitials === undefined && this.userInitials === '' && this.userInitials === null ? 'CW' : this.userInitials
  }
  ngOnInit() {
    this.logOutConfirmation = false
    this.loggedOutSuccessMessage = false
    this.logOutText = ""
    this.handleDarkModeButtons()
  }

  handleDarkModeButtons = () => {
    this.darkModeSelected = 'light' || 'dark'
    const element = document.getElementById(this.darkModeSelected.toLowerCase())
    element.classList.add("darkHover")
  }

  links = ['Home', 'About']
  sideLinks = ['Home', 'About']

  findCurrentNavLink = () => {
    const HREF = this._windowRef.nativeWindow.location.href
    if (HREF.includes('home')) return 0
    if (HREF.includes('about')) return 1
    // if (HREF.includes('dashboard')) return 2

    return 0
  }

  activeLink = this.links[this.findCurrentNavLink()]
  background: ThemePalette = undefined

  toggleBackground = () => this.darkModeSelected ? 'dark' : 'light'
  toggleDisableAnimations = () => this._parent.toggleAnimations()

  addLink = () => this.links.push(`Link ${this.links.length + 1}`)
  animationsDisabled = () => this._parent.animationsDisabled

  getDarkMode = (event) => {
    const ev = event.target.childNodes[0].data
    // this._storageService.setSession('isDark', ev)
    this.darkModeSelected = 'isDark' || 'dark'
    const elmHTML =  document.getElementsByTagName('html')
    const switchBackground = this.darkModeSelected.toLowerCase() === 'dark' ? 'darkBackground' : 'lightBackground'
    elmHTML[0].classList.remove('darkBackground')
    elmHTML[0].classList.remove('lightBackground')
    elmHTML[0].classList.add(switchBackground)
    window.location.reload()
  }

  // get totalAnimations() {
  //   return this._animationCount.total
  // }
  get activeRoutePath(): string {
    return this._router.url
  }

  isActiveRoute = (path: string) => {
    if (path.length > 1) {
      const regex = new RegExp('^' + path)
      return regex.test(this.activeRoutePath)
    }
    return path == this.activeRoutePath
  }

  onLogOut = () => {
    this.logOutText = 'Are you sure you want to Log Out?'
    $('.logOutItem').addClass('animationContainer').animate({'marginRight' : '0px'}, 'linear').addClass('initialHide hide')
    setTimeout(() => $('.confirmMessage .btnLbl, .confirmMessage').delay(this.delay500).removeClass('hide logOutMessage'), this.delay500)
  }
  onConfirmLogOut = (event: any) => {
    $('.logOutItem').animate({'marginRight' :' 15px'}, 'linear').removeClass('initialHide hide animationContainer')
    $('.confirmMessage .btnLbl, .confirmMessage').delay(this.delay500).addClass('hide logOutMessage')
    if (event.target.textContent === 'Yes') {
      // document.cookie = '__d= max-age=0'
      // document.cookie = 'Conversation_UUID= max-age=0'
      this.slowAlert()
    }
  }

  slowAlert = () => {
    setTimeout(() => {
      this._router.navigate([`/about`])
    }, this.setTimeOutInt)
  }
  prepRouteAnimation = (outlet: RouterOutlet) => outlet.activatedRouteData['animation'] || ''
}
