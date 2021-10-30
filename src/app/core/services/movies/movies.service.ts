import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, switchMap } from 'rxjs/operators'
import { forkJoin, iif, of } from 'rxjs'
/**
 * todo: retrievedMoviesList
 * todo: `https://www.omdbapi.com/?s=Batman&apikey=e76b80ad`
 * todo: `https://www.omdbapi.com/?i=tt3896198&apikey=e76b80ad`
 * todo:
 * todo:
 *
 **/

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  // never would put an apikey here.
  // these values should be in .env file.
  apikey = `e76b80ad`
  baseURL = `https://www.omdbapi.com/?`
  // Hard coded searcch result string
  defaultSearch = `Batman`
  // create the endpoint URI's
  apiSearch = `${this.baseURL}s=${this.defaultSearch}`
  apiDetails = `${this.baseURL}i=`

  loadMovies = () =>
    // Makes the initial call of the search endpoint
    this.http.get(`${this.apiSearch}&apikey=${this.apikey}`)
      // Used to stitch together functional operators into a chain.
      .pipe(
        // Projects each source value to an Observable which is merged in the output Observable,
        // emitting values only from the most recently projected Observable.
        switchMap((movies: any) => {
          // todo:: remove if statement and replace with iif().
          if (movies.Search.length > 0) {
            return movies.Search.filter((movie: any | any[]) => movie.Year)
          }
          // If no results, it will return an empty array.
          return of([])
        }),
        // If there was an error thrown, it will return an empty array.
        catchError(() => of([]))
   )

   // filter on ngxjs
  loadMovieDetails = () =>
    // Makes the initial call of the search endpoint
    this.http.get(`${this.apiSearch}&apikey=${this.apikey}`)
      // Used to stitch together functional operators into a chain.
      .pipe(
        // Projects each source value to an Observable which is merged in the output Observable,
        // emitting values only from the most recently projected Observable.
        switchMap((movies: any) => {
          // Checks a boolean at subscription time, and chooses between one of two observable sources
          // const firstOrSecond = iif(() => movies, of(movies.Search))
          // console.log(`firstOrSecond => ${firstOrSecond}`)
          // todo:: remove if statement and replace with iif().
          if(movies.Search.length > 0) {
            // Simplfies movie results to a top tier object
            const results = movies.Search
            // need to sort the incoming results, to minimize errors,
            // I created a `Number` from the `Year` mainly to handle the Year that thas a range
            results.sort((a: any, b: any) =>
              Number(a.Year.toString().substr(0, 4)) - Number(b.Year.toString().substr(0, 4)))
            // needing to Accept an Array of ObservableInput and returns an Observable
            // that emits an array of values in the exact same order as the passed array.
            return forkJoin(
              // Applies a given project function to each value emitted by the source Observable,
              // and emits the resulting values as an Observable.
              results.map((movie: any) => {
                // the second endpoint that is called to get the details
                return this.http.get(`${this.apiDetails}${movie.imdbID}&apikey=${this.apikey}`)
                // Used to stitch together functional operators into a chain.
                .pipe(
                  // Applies a given project function to each value emitted by the source Observable,
                  // and emits the resulting values as an Observable.
                  map((Details: any) => {
                    // return only the values needed
                    movie.Rated = Details.Rated
                    movie.Released = Details.Released
                    movie.Runtime = Details.Runtime
                    movie.Plot = Details.Plot
                    // now return your new object
                    return movie
                  })
                )
              })
            )
          }
          // If no results, it will return an empty array.
          return of([])
       }),
       // If there was an error thrown, it will return an empty array.
       catchError(() => of([]))
     )
   }
