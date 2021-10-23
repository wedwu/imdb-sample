import { TestBed, inject } from '@angular/core/testing'

import { AnimationCountService } from './animation-count.service'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('AnimationCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationCountService]
    })
  })

  it('should be created', inject([AnimationCountService], (service: AnimationCountService) => {
    expect(service).toBeTruthy()
  }))
})
