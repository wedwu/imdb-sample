import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, switchMap } from 'rxjs/operators'
import { forkJoin, of } from 'rxjs';
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
  apikey = `e76b80ad`
  baseURL = `https://www.omdbapi.com/?`
  defaultSearch = `Batman`

  apiSearch = `${this.baseURL}s=${this.defaultSearch}`
  apiDetails = `${this.baseURL}i=`

  loadMovies = () =>
    this.http.get(`${this.apiSearch}&apikey=${this.apikey}`)
      .pipe(switchMap((movies: any) => {
       if (movies.Search.length > 0) movies.Search.filter((year: any | any[]) => year.Year)
       return of([])
     })
   )

  loadMovieDetails = () =>
    this.http.get(`${this.apiSearch}&apikey=${this.apikey}`)
      .pipe(
        switchMap((movies: any) => {
         if (movies.Search.length > 0) {
           const results = movies.Search
           results.sort((a: any, b: any) => Number(a.Year.toString().substr(0, 4)) - Number(b.Year.toString().substr(0, 4)))
           return forkJoin(
             results.map((movie: any) => {
               return this.http.get(`${this.apiDetails}${movie.imdbID}&apikey=${this.apikey}`)
                .pipe(
                  map((Details: any) => {
                    movie.Rated = Details.Rated
                    movie.Released = Details.Released
                    movie.Runtime = Details.Runtime
                    movie.Plot = Details.Plot
                    return movie
                 })
               )
             })
           );
         }
         return of([])
       })
     )
   }
