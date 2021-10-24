import { createAction, props } from '@ngrx/store'
import { MoviesModel } from '@models/movies.model'

export const retrievedMoviesList = createAction(
  '[Movies API] Movies API Success',
  props<{ allMovies: MoviesModel[] }>()
)

export const invokeMoviesAPI = createAction('[Movies API] Invoke API')
