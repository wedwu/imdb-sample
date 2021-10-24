import { createSelector } from '@ngrx/store'
import { MoviesModel } from '../models/movies.model'
import { AppState } from '../store/app.state'

export const moviesSelector = (state: AppState) => state.movies

export const uniqueAlbumIds = createSelector(
  moviesSelector,
  (movies: MoviesModel[]) => [...new Set(movies.map((_) => _.albumId))]
)

export const albumCollectionByAlbumId = (albumId: number) => createSelector(
    moviesSelector,
    (movies:MoviesModel[]) => albumId == -1 ? movies : movies.filter(_ => _.albumId == albumId)
)

export const albumCollection = (albumId: number) => createSelector(
    moviesSelector,
    (movies:MoviesModel[]) => movies
)
