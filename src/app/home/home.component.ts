import { Component, OnInit } from '@angular/core'

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public sum = (a: number, b: number) => a + b

  constructor() { }

  ngOnInit(): any {
    return this.sum
  }
}
