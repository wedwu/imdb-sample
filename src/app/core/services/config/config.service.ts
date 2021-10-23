import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Object

  constructor(private http: HttpClient) {}

  async load(): Promise<any> {
    this.config = await this.http.get('/config').toPromise()

    return this.config
  }

  getValue(key: string): any {
    // Get value of config key:
    return this.config[key]
  }
}
