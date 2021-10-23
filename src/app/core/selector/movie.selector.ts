import { createSelector } from '@ngrx/store';
import { MoviesModel } from '../models/movies.model'

import { AppState } from '../state/app.state'

export const movieSelector = (state: AppState) => state.movies

export const uniqueAlbumIds = createSelector(
  movieSelector,
  (movies: MoviesModel[]) => {
    return [...new Set(movies.map((_) => _.albumId))]
  }
)

export const albumCollectionByAlbumId = (albumId: number) => createSelector(
    movieSelector,
    (movies:MoviesModel[]) => {
        if(albumId == -1){
            return movies
        }
        return movies.filter(_ => _.albumId == albumId)
    }
)

// '--downlevelIteration'
