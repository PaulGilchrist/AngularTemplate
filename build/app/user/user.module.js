"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var address_form_component_1 = require('./address-form.component');
var filter_objects_pipe_1 = require('./../pipes/filter-objects.pipe');
var progress_bar_component_1 = require('./../nav/progress-bar.component');
var sort_objects_pipe_1 = require('./../pipes/sort-objects.pipe');
var user_form_component_1 = require('./user-form.component');
var user_list_component_1 = require('./user-list.component');
var user_home_component_1 = require('./user-home.component');
var user_service_1 = require('./../services/user.service');
var user_routing_1 = require('./user.routing');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [
                address_form_component_1.AddressFormComponent,
                filter_objects_pipe_1.FilterObjectsPipe,
                progress_bar_component_1.ProgressBarComponent,
                sort_objects_pipe_1.SortObjectsPipe,
                user_form_component_1.UserFormComponent,
                user_list_component_1.UserListComponent,
                user_home_component_1.UserHomeComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                user_routing_1.routing
            ],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;

//# sourceMappingURL=user.module.js.map
