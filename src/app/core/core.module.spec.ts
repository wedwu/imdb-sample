// import { ApplicationInitStatus } from '@angular/core'
// import { async, inject, TestBed } from '@angular/core/testing'
//
// import { CoreModule } from '@core/core.module'
// import { ConfigService } from '@services/config/config.service'
// import { ConfigServiceMock } from '@test-helpers/config.service.mock'
//
// const configServiceMock = new ConfigServiceMock()
//
// describe('CoreModule', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [CoreModule],
//       providers: [
//         {
//           provide: ConfigService,
//           useValue: configServiceMock,
//         },
//       ],
//     })
//   })
//
//   beforeEach(async () => {
//     await TestBed.inject(ApplicationInitStatus).donePromise
//   })
//
//   afterEach(() => {
//     configServiceMock.load.calls.reset()
//   })
//
//   it('should load the config', async(
//     inject([], () => {
//       expect(new CoreModule()).toBeDefined()
//       expect(configServiceMock.load).toHaveBeenCalled()
//     })
//   ))
// })
