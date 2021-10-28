import { OnInit, Component, HostBinding } from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'
import { Store, select } from '@ngrx/store'
import { MoviesService } from '@core/services/movies/movies.service'
import { retrievedMoviesList } from '@core/actions/movies.action'
import { uniqueIMDBIDs, moviesCollectionByYear } from '@core/selectors/movies.selector'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'

declare let window: any
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
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  animations: []
})
export class MoviesComponent implements OnInit {
  selectedYear = ''
  IMDBIDs$ = this.store.pipe(select(uniqueIMDBIDs))
  allMovies$ = this.store.pipe(
    select(moviesCollectionByYear(this.selectedYear))
  )
  constructor(
    private store: Store<{ movies: BatmanMoviesModel[] }>,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.loadMovies().subscribe((movies: any) => {
      this.store.dispatch(
        retrievedMoviesList({
          allMovies: movies as BatmanMoviesModel[]
        })
      )
    })
  }
  onClick = (imdbID: string) => {
    // I would handle this differently, however, for this example, it suits its purpose
    window.location.href = `https://www.imdb.com/title/${imdbID}/`
  }

  movieChange(ev: any, event: string) {
    // since I am not using a bootstrap type framework, I created this in jQuery, which was already referenced within the original 'index.html'
    $('button').removeClass('active')
    $(ev.currentTarget).addClass('active')
    // This just filters the collection
    this.allMovies$ = this.store.pipe(select(moviesCollectionByYear(event)))
  }
}
