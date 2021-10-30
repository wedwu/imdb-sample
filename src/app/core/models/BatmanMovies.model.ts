import { BatmanMovieDetails } from '@models/BatmanMovieDetails.model'

export interface BatmanMoviesModel {
  Title: string
  Year: number
  imdbID: string
  Type?: string
  Poster: string
  Details: BatmanMovieDetails
  Plot: string
  Rated?: string
  Released: string
  Runtime?: string
  Website?: string
}
