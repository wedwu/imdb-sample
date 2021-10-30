import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'

import { MoviesService } from '@services/movies/movies.service'

/**
 * todo: This was using a mergeMap() instead of forkJoin()
 * todo: This is not in use.
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Injectable()
export class MoviesEffect {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies API] Invoke API'),
      mergeMap(() =>
        this.moviesService
          .loadMovies()
          .pipe(map((data) => ({
            type: '[Movies API] Movies API Success',
            allMovies: data
          })))
      )
    )
  );
}
