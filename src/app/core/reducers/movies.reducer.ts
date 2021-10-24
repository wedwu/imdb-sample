import { createReducer, on } from '@ngrx/store'
import { MoviesModel } from '../models/movies.model'
import { retrievedMoviesList } from '../actions/movies.action'

export const initialState: ReadonlyArray<MoviesModel> = []

const _moviesReducer = createReducer(
  initialState,
  on(retrievedMoviesList, (state, { allMovies }) => [...allMovies]))

export function moviesReducer(state: any, action: any) {
  return _moviesReducer(state, action)
}
