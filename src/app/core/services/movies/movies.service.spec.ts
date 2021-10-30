import { TestBed } from '@angular/core/testing'
import { MoviesService } from './movies.service'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

describe('MoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService)
    expect(service).toBeTruthy()
  });
});
