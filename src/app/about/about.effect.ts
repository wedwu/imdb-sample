import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'
import { MoviesService } from '../core/services/movies/movies.service'

@Injectable()
export class MovieEffect {
  constructor(
    private actions$: Actions,
    private movieService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies API] Invoke API'),
      mergeMap(() =>
        this.movieService
          .loadMovies()
          .pipe(map((data) => ({ type: '[Movies API] Movie API Success', allMovies: data })))
      )
    )
  );
}
