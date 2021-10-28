import { createSelector } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
import { AppState } from '@store/app.state'

export const moviesSelector = (state: AppState) => state.movies

export const uniqueIMDBIDs = createSelector(
  moviesSelector,
  (movies: BatmanMoviesModel[]) => [...new Set(movies.map((_) => _.Year))]
)

export const moviesCollectionByYear = (year: string | number) => createSelector(
    moviesSelector,
    (movies:BatmanMoviesModel[]) => year == '' ?
      movies :
      movies.filter(_ => {
        // There has to be a better way of filtering, this works although really ugly
        const newYear = Number(_.Year.toString().substr(0, 4))
        return Number(year) === 2000 ?
          Number(_.Year) >= Number(year) || Number(newYear) >= Number(year) :
          Number(_.Year) < 2000 || Number(newYear) < 2000
      })
)

export const albumCollection = (movies: string | number) => createSelector(
    moviesSelector,
    (movies:BatmanMoviesModel[]) => movies
)
