import { createReducer, on } from '@ngrx/store'
import { MoviesModel } from '../models/movies.model'
import { retrievedMovieList } from '../actions/movie.action'

export const initialState: ReadonlyArray<MoviesModel> = []

const _movieReducer = createReducer(
  initialState,
  on(retrievedMovieList, (state, { allMovies }) => {
    return [...allMovies]
  })
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action)
}
