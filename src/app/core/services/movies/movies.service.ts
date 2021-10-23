
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  loadMovies() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((albums) => albums || []))
  }
}
