import { TestBed, inject, async } from '@angular/core/testing'

import { WindowRefService } from '@services/window-ref/window-ref.service'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('Window Ref Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WindowRefService
      ]
    })
  })

  it('should be created', inject([WindowRefService], (service: WindowRefService) => {
    expect(service).toBeTruthy()
  }))

  it('should define the nativeWindow',
    async(inject([WindowRefService], (service: WindowRefService) => {
      expect(service.nativeWindow).toBeDefined()
    }))
  )
})
