
export interface BatmanMovieDetails {
  Title: string
  Year: number | string
  imdbID: string
  Type?: string
  Poster: string
  Details: BatmanMovieDetails
  Plot: string
  Rated?: string
  Released: number | string
  Runtime?: string
  Website?: string
}
