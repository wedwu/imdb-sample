import { Injectable } from '@angular/core'
import { ConfigService } from '@services/config/config.service'

@Injectable()
export class ConfigServiceMock extends ConfigService {
  config: any
  load = jasmine.createSpy('load').and.returnValue(Promise.resolve(this.config))

  constructor() {
    super(null)

    this.config = {
      ENVIRONMENT_CONSTANT: {
        NG_DEBUG_MODE_ENABLED: true,
        NG_DEBUG_LOG_ENABLED: true
      },
      webApiUrl: 'API_URL/',
      baseUrl: 'http://local.disney.go.com:8080',
      siteId: 'app',
      environment: 'DEV',
      hasSetAuth: true,
      webApiBaseUrl: 'http://local.disney.go.com:8080',
      authzValidatorConfig: {
        myIdBaseUrl: '/login?redirectUri='
      }
    }
  }

  getValue(key: string) {
    return this.config[key]
  }

  setValue(key: string, value: any) {
    return this.config[key] = value
  }
}
