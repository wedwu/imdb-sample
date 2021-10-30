import { createSelector } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'
import { BatmanMovieDetails } from '@models/BatmanMovieDetails.model'
import { AppState } from '@store/app.state'

// Imports the state from the store
export const moviesSelector = (state: AppState) => state.movies

// Gets the Unique Years from the state
export const uniqueYears = createSelector(
  // adding the state to reference
  moviesSelector,
  // calling the needed property
  (movies: BatmanMoviesModel[]) =>
    // The Set object lets you store unique values of any type,
    // whether primitive values or object references.
    [...new Set(movies.map((_) =>
      // Applies a given project function to each value emitted by the source Observable,
      // and emits the resulting values as an Observable.
      // Also needed to handle the year that has a `-`
      // Traverses through the function `decadePicker`
      decadePicker(Number(_.Year.toString().substr(0, 4)))))]
)

const decadePicker = (year: number | string) => {
  // This traverses through each condition to get the appropiate year
  if (year > 1989 && year < 1980) return 1980
  else if (year > 1990 && year < 1999) return 1990
  else if (year > 2000 && year < 2009) return 2000
  else if (year > 2010 && year < 2019) return 2010
  else if (year > 2020 && year < 2029) return 2020
  return 1980
}

export const moviesCollectionByYear =
  (year: string | number) =>
    // Gets the Unique Years from the state
    createSelector(
      // adding the state to reference
      moviesSelector,
      // calling the needed property and has a condition if the `year` is empty
      // it return all the movies, but if the `year` is a value, it filters
      // through the `movies` and only returnng the `movies` that are in a certain decade
      (movies: BatmanMovieDetails[]) => year == '' ?
        // all movies
        movies:
        // filtering through by a series of conditions
        movies.filter(_ => {
          // There has to be a better way of filtering,
          // this works although really ugly
          // Handling the `year` that has a `-` and making sure it is
          // `number` and not a `string`
          const checkYear = Number(_.Year.toString().substr(0, 4))
          // returning only the ones that meeting the criteria
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
