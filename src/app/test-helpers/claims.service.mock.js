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
var rxjs_1 = require("rxjs")
var claims_service_1 = require("@services/claims/claims.service")
var throwError_1 = require("rxjs/internal/observable/throwError")
var ClaimServiceMock = /** @class */ (function (_super) {
    __extends(ClaimServiceMock, _super)
    function ClaimServiceMock() {
        var _this = _super.call(this, null, null, null) || this
        _this.error = 0
        return _this
    }
    ClaimServiceMock.prototype.getClaims = function () {
        if (this.error) {
            return throwError_1.throwError({ status: this.error })
        }
        return rxjs_1.of({})
    }
    ClaimServiceMock.prototype.setError = function (value) {
        this.error = value
    }
    ClaimServiceMock = __decorate([
        core_1.Injectable()
    ], ClaimServiceMock)
    return ClaimServiceMock
}(claims_service_1.ClaimService))
exports.ClaimServiceMock = ClaimServiceMock
//# sourceMappingURL=claims.service.mock.js.map