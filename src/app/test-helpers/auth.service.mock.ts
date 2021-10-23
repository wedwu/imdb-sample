import { Injectable } from '@angular/core'
import { AuthService } from '@services/auth/auth.service'

@Injectable()
export class AuthServiceMock extends AuthService {
  error = false
  handleServiceError = jasmine.createSpy('handleServiceError')

  constructor() {
    super(null, null, null)
  }
}
