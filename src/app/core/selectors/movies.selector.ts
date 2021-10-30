import { createSelector } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
import { AppState } from '@store/app.state'

export const moviesSelector = (state: AppState) => state.movies

export const uniqueYears = createSelector(moviesSelector,
  (movies: BatmanMoviesModel[]) =>
    [...new Set(movies.map((_) =>
      decadePicker(Number(_.Year.toString().substr(0, 4)))))]
)

const decadePicker = (year: number | string) => {
  if (year > 1989 && year < 1980) return 1980
  else if (year > 1990 && year < 1999) return 1990
  else if (year > 2000 && year < 2009) return 2000
  else if (year > 2010 && year < 2019) return 2010
  else if (year > 2020 && year < 2029) return 2020
  return 1980
}

export const moviesCollectionByYear = (year: string | number) => createSelector(moviesSelector,
  (movies:BatmanMoviesModel[]) => year == '' ?
    movies :
    movies.filter(_ => {
      // There has to be a better way of filtering, this works although really ugly
      const checkYear = Number(_.Year.toString().substr(0, 4))
      return Number(year) === 2000 ?
        checkYear >= 2000 && checkYear <= 2009 :
          Number(year) === 2010 ?
            checkYear >= 2010 && checkYear <= 2019 :
              Number(year) === 2020 ?
                checkYear >= 2020 && checkYear <= 2029 :
                  Number(year) === 1990 ?
                    checkYear >= 1990 && checkYear <= 1999 :
                    checkYear <= 1989
    })
)

export const albumCollection =
  (movies: string | number) =>
    createSelector(moviesSelector,
      (movies:BatmanMoviesModel[]) => movies)
