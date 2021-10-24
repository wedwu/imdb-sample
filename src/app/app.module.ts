// ANGULAR MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
// import { MatNativeDateModule } from '@angular/material/core'
import { BrowserModule } from '@angular/platform-browser'
// import { ImportMaterialModule } from './material-module'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { ROUTES } from './routes'
// import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core'
import { AboutComponent } from './about/about.component'
import { AnimationDetailsComponent } from './shared/components/animation-details/animation-details.component'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { HomeComponent } from './home/home.component'
import { NavigationComponent } from './shared/components/navigation/navigation.component'
import { MoviesComponent } from './movies/movies.component'
import { MoviesEffect } from './movies/movies.effect'
import { moviesReducer } from './core/reducers/movies.reducer'
import { MoviesService } from './core/services/movies/movies.service'
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
  declarations: [
    AboutComponent,
    AnimationDetailsComponent,
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([MoviesEffect]),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({ movies: moviesReducer })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MoviesService,
    // { provide: MAT_RIPPLE_GLOBAL_OPTIONS,
    //   useValue: { float: 'always' }
    // },
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: 'outline'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
  ngDoBootstrap() {}
  bootstrapRootComponent(app: any) {
    const componentElement = document.createElement('app-root')
    document.body.appendChild(componentElement)
    app.bootstrap(AppComponent)
  }
}
