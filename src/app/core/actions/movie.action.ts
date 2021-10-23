import { createAction, props } from '@ngrx/store'
import { MoviesModel } from '../models/movies.model'

export const retrievedMovieList = createAction("[Movies API] Movie API Success", props<{allMovies:MoviesModel[]}>())
export const invokeGalleryAPI = createAction('[Movies API] Invoke API');
