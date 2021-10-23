import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { ClaimService } from '@services/claims/claims.service'
import { throwError } from 'rxjs/internal/observable/throwError'

@Injectable()
export class ClaimServiceMock extends ClaimService {
  error = 0

  constructor() {
    super(null, null, null)
  }

  getClaims() {
    if (this.error) {
      return throwError({status: this.error})
    }

    return of({})
  }

  setError(value: number) {
    this.error = value
  }
}
