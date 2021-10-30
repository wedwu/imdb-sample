import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MovieContainerComponent } from './movie-container.component'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('MovieContainerComponent', () => {
  let component: MovieContainerComponent
  let fixture: ComponentFixture<MovieContainerComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieContainerComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
