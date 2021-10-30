// Imports the Initial Model 
import { BatmanMoviesModel } from '@models/BatmanMovies.model'

export interface AppState {
  // Creates the store for state management
  movies: BatmanMoviesModel[],
}
