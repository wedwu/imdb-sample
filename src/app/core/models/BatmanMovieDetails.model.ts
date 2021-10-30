// export interface BatmanMovieDetails {
//   Actors?: string
//   Awards?: string
//   BoxOffice?: string
//   Country?: string
//   DVD?: string
//   Director?: string
//   Genre?: string
//   Language?: string
//   Metascore?: number | string
//   Plot: string
//   Poster: string
//   Production?: string
//   Rated?: string
//   Ratings: []
//   Released?: number | string | undefined
//   Response?: boolean
//   Runtime?: string
//   Title: string
//   Type?: string
//   Website?: string
//   Writer?: string
//   Year: number | string
//   imdbID: string
//   imdbRating?: number | string
//   imdbVotes?: number | string
// }

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
