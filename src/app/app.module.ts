// ANGULAR MODULES
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
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { MoviesComponent } from './movies/movies.component'
import { MoviesEffect } from './movies/movies.effect'
// @Services
import { MoviesService } from '@services/movies/movies.service'
// @Shared
import { NavigationComponent } from '@shared/components/navigation/navigation.component'
// @Reducer
import { moviesReducer } from '@reducers/movies.reducer'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent
  ],
  imports: [
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
