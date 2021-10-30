import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.sass'],
  animations: []
})
export class MovieContainerComponent implements OnInit {

  @Input() allMovies: any
  @Output() doClickChange = new EventEmitter<any>()

  public infoFetched: boolean = true
  public allMovie: any | any[]

  constructor() {

  }
  ngOnInit(): void {
    console.log(`allMovies => ${this.allMovies}`)

    // this.allMovie = this.allMovies.actionsObserver._value.allMovies
    this.infoFetched = true
  }
  onClick = (imdbID: string) => {
    console.log(`imdbID => ${imdbID}`)
    this.doClickChange.emit(imdbID)
  }

}
