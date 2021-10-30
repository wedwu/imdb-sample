import { OnInit, Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { MoviesService } from '@core/services/movies/movies.service'
import { retrievedMoviesList } from '@core/actions/movies.action'
import {
  uniqueYears,
  moviesCollectionByYear
} from '@core/selectors/movies.selector'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
// import { BatmanMovieDetails } from '@models/BatmanMovieDetails.model'

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
  // start with an empty string
  public selectedYear: string = ''
  // Booleans that makes sure the DOM does not render the
  // components until the data is fetched
  public fetchInfoLoaded: boolean = false
  public fetchMovieInfoLoaded: boolean = false
  // Used to stitch together functional operators into a chain.
  public years$ = this.store.pipe(select(uniqueYears))
  public allMovies$ = this.store.pipe(select(moviesCollectionByYear(this.selectedYear)))

  constructor(
    // adds the store to this compnent
    private store: Store<{
      movies: BatmanMoviesModel[]
    }>,
    // Calling the service
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    // Function that gets called so not to have the call within the `ngOnInit`
    this.fetchInfo()
  }

  fetchInfo = () => {
    // invoke the service
    this.moviesService
      // which service to invoke
      .loadMovieDetails()
      // Invokes an execution of an Observable and registers Observer handlers
      // for notifications it will emit.
        .subscribe((details: any) => {
          // The store's reducing function will be called with the current getState()
          // result and the given action synchronously. Its return value will be considered
          // the next state. It will be returned from getState() from now on, and the
          // change listeners will immediately be notified.
          this.store.dispatch(
            // The action that was dispatched
            retrievedMoviesList({
              allMovies: details as BatmanMoviesModel[]
            })
          )
          // There are results, lets populate the components
          this.fetchMovieInfoLoaded = true
          this.fetchInfoLoaded = true
        })
  }

  goToIMDB(imdbID: any) {
    // I would handle this differently, however, for this example, it suits its purpose
    window.location.href = `https://www.imdb.com/title/${imdbID}/`
  }

  onDecadeYearChange(event: any) {
    // console.log(`event => ${event}`)
    // This just filters the collection
    this.allMovies$ = this.store.pipe(select(moviesCollectionByYear(event)))
  }
}
