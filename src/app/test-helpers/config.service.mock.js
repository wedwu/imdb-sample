"use strict"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p] }
    return function (d, b) {
        extendStatics(d, b)
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
    }
})()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc)
    else for (var i = decorators.length - 1 i >= 0 i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
}
Object.defineProperty(exports, "__esModule", { value: true })
var core_1 = require("@angular/core")
var config_service_1 = require("@services/config/config.service")
var ConfigServiceMock = /** @class */ (function (_super) {
    __extends(ConfigServiceMock, _super)
    function ConfigServiceMock() {
        var _this = _super.call(this, null) || this
        _this.load = jasmine.createSpy('load').and.returnValue(Promise.resolve(_this.config))
        _this.config = {
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
        return _this
    }
    ConfigServiceMock.prototype.getValue = function (key) {
        return this.config[key]
    }
    ConfigServiceMock.prototype.setValue = function (key, value) {
        return this.config[key] = value
    }
    ConfigServiceMock = __decorate([
        core_1.Injectable()
    ], ConfigServiceMock)
    return ConfigServiceMock
}(config_service_1.ConfigService))
exports.ConfigServiceMock = ConfigServiceMock
//# sourceMappingURL=config.service.mock.js.map