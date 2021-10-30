import { OnInit, Component, HostBinding } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { MoviesService } from '@core/services/movies/movies.service'
import { retrievedMoviesList } from '@core/actions/movies.action'
import {
  uniqueYears,
  moviesCollectionByYear
} from '@core/selectors/movies.selector'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
import { MoviesReleasedModel } from '@models/MoviesReleasedModel.model'

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
  public selectedYear: string = ''
  public fetchInfoLoaded: boolean = false
  public fetchMovieInfoLoaded: boolean = false
  // uniqueYears = uniqueYears.sort((a, b) => a - b)
  // console.log(`uniqueYears => ${uniqueYears}`)
  public years$ = this.store.pipe(select(uniqueYears))
  public allMovies$ = this.store.pipe(select(moviesCollectionByYear(this.selectedYear)))

  constructor(
    private store: Store<{ movies: BatmanMoviesModel[], released: MoviesReleasedModel[] }>,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.fetchInfo()
  }

  fetchInfo = () => {
    this.moviesService.loadMovieDetails().subscribe((movies: any) => {
      this.store.dispatch(
        retrievedMoviesList({
          allMovies: movies as BatmanMoviesModel[]
        })
      )
      this.fetchMovieInfoLoaded = true
    })
    this.moviesService.loadMovies().subscribe((movies: any) => {
      this.store.dispatch(
        retrievedMoviesList({
          allMovies: movies as BatmanMoviesModel[]
        })
      )
      this.fetchInfoLoaded = true
    })
  }

  goToIMDB(imdbID: any) {
    // I would handle this differently, however, for this example, it suits its purpose
    window.location.href = `https://www.imdb.com/title/${imdbID}/`
  }

  onDecadeYearChange(event: any) {
    console.log(`event => ${event}`)
    // This just filters the collection
    this.allMovies$ = this.store.pipe(select(moviesCollectionByYear(event)))
  }
}
