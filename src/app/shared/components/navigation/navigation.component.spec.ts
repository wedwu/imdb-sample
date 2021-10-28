import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavigationComponent } from './navigation.component'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('NavigationComponent', () => {
  let component: NavigationComponent
  let fixture: ComponentFixture<NavigationComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
