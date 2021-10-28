// ANGULAR MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ROUTES } from './routes'
// Pages/Effects
import { AboutComponent } from './about/about.component'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { HomeComponent } from './home/home.component'
import { MoviesComponent } from './movies/movies.component'
import { MoviesEffect } from './movies/movies.effect'
// @Services
import { MoviesService } from '@services/movies/movies.service'
// @Shared
import { AnimationDetailsComponent } from '@shared/components/animation-details/animation-details.component'
import { NavigationComponent } from '@shared/components/navigation/navigation.component'
// @Reducer
import { moviesReducer } from '@reducers/movies.reducer'

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
  providers: [MoviesService],
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
