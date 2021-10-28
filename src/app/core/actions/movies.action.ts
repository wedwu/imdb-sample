import { createAction, props } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'

export const retrievedMoviesList = createAction(
  '[Movies API] Movies API Success',
  props<{ allMovies: BatmanMoviesModel[] }>()
)

export const invokeMoviesAPI = createAction('[Movies API] Invoke API')
