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
  styleUrls: ['./movie-container.component.sass']
})
export class MovieContainerComponent implements OnInit {
  // Pulls in the data to populate the navigation
  @Input() allMovies: any
  // The even listener that bubbles up what value was selected
  @Output() doClickChange = new EventEmitter<any>()

  public infoFetched: boolean = true
  public allMovie: any | any[]

  constructor() {}
  ngOnInit(): void {
    console.log(`MovieContainerComponent Loaded`)
    // this.allMovie = this.allMovies.actionsObserver._value.allMovies
    // just a flag if needed
    this.infoFetched = true
  }
  onClick = (imdbID: string) => this.doClickChange.emit(imdbID)
}
