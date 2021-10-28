import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { LoadingSpinnerComponent } from './loading-spinner.component'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent
  let fixture: ComponentFixture<LoadingSpinnerComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
