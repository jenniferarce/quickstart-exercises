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
var courses_service_1 = require('./courses.service');
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.title = "The title of courses page";
        //new CourseService();
        this.courses = courseService.getCourses();
    }
    CoursesComponent.prototype.onClick = function ($event) {
        console.log("Clicked", $event);
    }; //EventBinding
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <u><h2>Courses </h2></u>\n    <mark>{{title}}</mark>\n    <input type=\"text\" autoGrow />\n    <ul>\n        <li *ngFor=\"let course of courses\">\n          <i>  {{course}} </i>\n        </li>\n    </ul>\n    <button (click)=\"onClick($event)\" [style.backgroundColor]=\"'gray'\">EventBinding </button>\n    ",
            providers: [courses_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [courses_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
/// 
//# sourceMappingURL=courses.components.js.map