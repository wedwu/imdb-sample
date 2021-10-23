import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MoviesService } from '../core/services/movies/movies.service';
import { retrievedMovieList, invokeGalleryAPI } from '../core/actions/movie.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
} from '../core/selector/movie.selector';
import { MoviesModel } from '../core/models/movies.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allMovies$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  constructor(
    private store: Store<{ movies: MoviesModel[] }>,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(invokeGalleryAPI());
    // this.movieService.loadMovies().subscribe((movies) => {
    //   console.log(movies);
    //   this.store.dispatch(
    //     retrievedMovieList({ allMovies: movies as MoviesModel[] })
    //   );
    // });
  }
  albumChange(event:number) {
    this.allMovies$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }
}
