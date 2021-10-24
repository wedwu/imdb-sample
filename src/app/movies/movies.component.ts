import { OnInit, Component, HostBinding } from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../shared/shared_route_animations'
import { Store, select } from '@ngrx/store'
// import { MoviesService } from '../core/services/movies.service'
import { /*retrievedMoviesList,*/ invokeMoviesAPI } from '../core/actions/movies.action'
import { uniqueAlbumIds, albumCollectionByAlbumId } from '../core/selectors/movies.selector'
import { MoviesModel } from '../core/models/movies.model'

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
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
  ]
})
export class MoviesComponent implements OnInit {
  @HostBinding('@pageAnimations') animatePage = true

  selectedAlbumId = -1
  albumIds$ = this.store.pipe(select(uniqueAlbumIds))
  allMovies$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  )
  constructor(
    private store: Store<{ movies: MoviesModel[] }>,
    // private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(invokeMoviesAPI())
    // another way to call the endpoint
    // this.moviesService.loadMovies().subscribe((movies) => this.store.dispatch(retrievedMoviesList({ allMovies: movies as MoviesModel[] })))
  }
  albumChange(event: number) {
    this.allMovies$ = this.store.pipe(select(albumCollectionByAlbumId(event)))
  }
}
