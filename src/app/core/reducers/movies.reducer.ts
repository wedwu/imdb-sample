import { createReducer, on } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
import { retrievedMoviesList } from '@actions/movies.action'

export const initialState: ReadonlyArray<BatmanMoviesModel> = []

const _moviesReducer = createReducer(initialState,
  on(retrievedMoviesList, (state, { allMovies }) => [...allMovies]))

export function moviesReducer(state: any, action: any) {
  return _moviesReducer(state, action)
}
