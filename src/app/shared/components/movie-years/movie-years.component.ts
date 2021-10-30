import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core'

/**
 * todo: missing the release date that has a hythen
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/
 declare let window: any
 declare var $: any

@Component({
  selector: 'app-movie-years',
  templateUrl: './movie-years.component.html',
  styleUrls: ['./movie-years.component.sass']
})
export class MovieYearsComponent implements OnInit {
  // Pulls in the data to populate the navigation
  @Input() decadeYears: any
  // The even listener that bubbles up what value was selected
  @Output() doDecadeChange = new EventEmitter<any>()

  constructor() {}
  ngOnInit(): void {
    console.log(`MovieYearsComponent Loaded`)
  }
  movieChange(ev: any, event: any) {
    // since I am not using a bootstrap type framework, I created this in jQuery,
    // which was already referenced within the original 'index.html'
    $('button').removeClass('active')
    $(ev.currentTarget).addClass('active')
    this.doDecadeChange.emit(event)
  }
}
