import { createAction, props } from '@ngrx/store'
import { BatmanMoviesModel } from '@models/BatmanMovies.model'

export const retrievedMoviesList =
// Creates a configured Creator function that, when called,
// returns an object in the shape of the Action interface.
createAction(
  // Describes the action that will be dispatched
  '[Movies API] Movies API Success',
  // Declaring an action creator
  // With additional metadata
  props<{ allMovies: BatmanMoviesModel[] }>()
)
