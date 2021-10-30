import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MovieYearsComponent } from './movie-years.component'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('MovieYearsComponent', () => {
  let component: MovieYearsComponent
  let fixture: ComponentFixture<MovieYearsComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieYearsComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieYearsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
