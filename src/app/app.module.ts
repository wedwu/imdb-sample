// ANGULAR MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatNativeDateModule } from '@angular/material/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImportMaterialModule } from './material-module'
import { EffectsModule } from '@ngrx/effects'

import { WindowRefService } from '@services/window-ref/window-ref.service'

// REFERENCES
import { StoreModule } from '@ngrx/store'
import { MoviesService } from './core/services/movies/movies.service'

import { movieReducer } from './core/reducers/movies.reducer'

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { ROUTES } from './routes'
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core'

import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { MovieEffect } from './about/about.effect'

import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { LayoutModule } from '@angular/cdk/layout'

// SHARED COMPONENTS TEMP
import { IconComponent } from '@shared/components/icons/icons.component';
import { AnimationDetailsComponent } from '@shared/components/animation-details/animation-details.component'
import { NavigationComponent } from '@shared/components/navigation/navigation.component'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // TEMPLATE
    NavigationComponent,
    AnimationDetailsComponent,
    IconComponent,
  ],
  imports: [
    HttpClientModule,
    ImportMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MovieEffect]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MoviesService,
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: { float: 'always' }
    },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: 'outline'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private config: any

  constructor( private _windowRef: WindowRefService ) {}

  ngDoBootstrap(app) {}

  bootstrapRootComponent(app) {
    const componentElement = document.createElement('app-root')
    document.body.appendChild(componentElement)
    app.bootstrap(AppComponent)
  }
}
