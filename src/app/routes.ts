// COMPONENT PAGES

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

// PAGES
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { MoviesComponent } from './movies/movies.component'

// TODO :
export const ROUTES = [
  { path: 'movies', component: MoviesComponent, data: {animation:'programmatic'} },
  { path: 'about', component: AboutComponent, data: {animation:'programmatic'} },
  { path: 'home', component: HomeComponent, data: {animation:'programmatic'} },
  { path: '', component: HomeComponent, data: {animation:'programmatic'} }
]
