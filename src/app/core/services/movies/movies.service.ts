import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  loadMovies = () =>
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((albums) => albums || []))
}
