webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{font-family: 'Hammersmith One', sans-serif}\r\nheader{\r\n  padding-top: 1.5em;\r\n  padding-bottom:2em;\r\n  background-color: #FF005E;\r\n  color: white;\r\n}\r\nheader h1{\r\n  margin-top: .5em;\r\n  text-align: center;\r\n}\r\ndiv[class=\"sticky\"]{\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0\r\n}\r\ndiv[class=\"content\"]{\r\n  padding-top: 190px\r\n}\r\n/* NAVIGATION BAR */\r\ndiv[id=\"navbar\"] {\r\n  overflow: hidden;\r\n  background-color: #d8004f;\r\n}\r\ndiv[id=\"navbar\"] a{\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\ndiv[id=\"navbar\"] a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\ndiv[id=\"navbar\"] a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n/*end of NAVIGATION BAR */\r\n.wrap {\r\n  min-height: calc(120.9vh);\r\n}\r\nfooter {\r\n  background-color: #191919;\r\n  color: white;\r\n  padding: 10px;\r\n  position: absolute;\r\n  width: 100%\r\n}\r\n.social [class*=\"fa fa-\"] {\r\n    background-color: #FF005E;\r\n    border-radius: 30px;\r\n    color: white;\r\n    display: inline-block;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: auto 3px;\r\n    width: 30px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n#copyright{\r\n  margin-left: 290px;\r\n}\r\n#copyright p{\r\n line-height: 10px;\r\n margin-top: 10px;\r\n margin-left: 10px;\r\n}\r\n@media only screen and (max-width: 441px) {\r\n  footer{\r\n    display: none\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  footer{\r\n    display: none\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<div class=\"wrap\">\n<div class=\"sticky\">\n  <header>\n    <h1>NoteBook Studio</h1>\n  </header>\n  <div id=\"navbar\">\n    <div class=\"container\">\n      <a routerLink=\"\">Home</a>\n      <a routerLink=\"upload\">Upload</a>\n      <a routerLink=\"about\">About</a>\n    </div>\n  </div>\n</div>\n\n  <div class=\"container\">\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<footer id=\"mainFooter\">\n  <div class=\"container\">\n    <div class=\"row\" id=\"copyright\">\n      <div class=\"social\">\n        <a class=\"fa fa-twitter\" href=\"https://www.twitter.com/\"></a>\n        <a class=\"fa fa-facebook\" href=\"https://www.facebook.com/\"></a>\n      </div>\n      <p id=\"copyrightText\"> Copyright (c) 2018 Copyright Holder All</p>\n      <p id=\"copyrightText\">Rights Reserved.</p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.copyright = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_api_keys__ = __webpack_require__("../../../../../src/app/services/api-keys.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_10__services_api_keys__["a" /* masterFirebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_10__services_api_keys__["a" /* masterFirebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_10__services_api_keys__["a" /* masterFirebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_10__services_api_keys__["a" /* masterFirebaseConfig */].storageBucket,
    messagingSenderId: __WEBPACK_IMPORTED_MODULE_10__services_api_keys__["a" /* masterFirebaseConfig */].messagingSenderId
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_12__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'upload',
        component: __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__["a" /* UploadComponent */]
    },
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__details_details_component__["a" /* DetailsComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[id=\"topConent\"]{\r\n  margin-top: 45px;\r\n}\r\ndiv[class=\"detailsPost\"]{\r\n  padding:0;\r\n  margin-left: 0px;\r\n  margin-top: 35px;\r\n  width: 60%;\r\n  border: solid 0.0px black;\r\n  border-radius: 10px;\r\n  height: 350px;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\ndiv[class=\"detailsContent\"] p {\r\n  text-align: center;\r\n}\r\ndiv[class=\"detailsContent\"] h3 {\r\n  text-align: center;\r\n}\r\nimg{\r\n  margin-top: 30px;\r\n  width: 660px;\r\n  height: 700px;\r\n  border-radius: 20px;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\ndiv[class=\"detailsContent\"] h3{\r\n  text-align: center;\r\n}\r\ndiv[class=\"detailsContent\"] button{\r\n  width: 100%\r\n}\r\ndiv[class=\"userComment\"] h4{\r\n  font-size: 1.4em\r\n}\r\ndiv[id=\"inputNbutton\"]{\r\n  margin-left: 0px\r\n}\r\ndiv[class=\"commentDiv\"]{\r\n  width: 100%;\r\n  margin-top: 50px;\r\n}\r\ndiv[class=\"commentDiv\"] input{\r\n  width:48.5%;\r\n  float:left;\r\n}\r\np{\r\n  font-family: 'Lato', sans-serif;\r\n}\r\nbutton{\r\n  background-color: #d8004f;\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 360px) {\r\n   div[class=\"detailsPost\"]{\r\n     padding:0;\r\n     margin-left: 0px;\r\n     margin-top: 35px;\r\n     width: 100%;\r\n     border: solid 0.0px black;\r\n     border-radius: 10px;\r\n     height: 350px;\r\n     -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   }\r\n   img{\r\n     margin-top: 30px;\r\n     width: 100%;\r\n     height: 100%;\r\n     border-radius: 20px;\r\n     -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  div[class=\"detailsPost\"]{\r\n    padding:0;\r\n    margin-left: 0px;\r\n    margin-top: 35px;\r\n    width: 100%;\r\n    border: solid 0.0px black;\r\n    border-radius: 10px;\r\n    height: 350px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  img{\r\n    margin-top: 30px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<img src=\"{{galleryPosts?.url}}\" class=\"image\">\n\n\n\n<div class=\"detailsPost\">\n  <div class=\"container\">\n    <div class=\"detailsContent\">\n      <h3>{{galleryPosts?.title}}</h3>\n      <hr>\n      <p>{{galleryPosts?.description}}</p>\n      <button id=\"editBtn\" (click)=\"editPost(galleryPosts)\" name=\"button\" class=\"btn btn-default\">Edit</button> <br><br>\n    </div>\n    <div *ngIf=\"editGallery\"  id=\"editPost\">\n      <input [(ngModel)]=\"editGallery.title\" class=\"form-control\" maxlength=\"20\"><br>\n      <input [(ngModel)]=\"editGallery.description\" class=\"form-control\"  maxlength=\"115\"><br>\n      <button (click)=\"updateGallery(editGallery)\" class=\"btn btn-default\">Update</button>\n      <button (click)=\"deletePost()\" class=\"btn btn-default\">Delete</button>\n    </div>\n  </div>\n</div>\n\n\n\n  <div class=\"commentDiv\">\n    <h4>comments</h4>\n      <input #newCommentText id=\"commentField\" class=\"form-control\">\n      <button (click)=\"addText(newCommentText.value); newCommentText.value='';\" class=\"btn btn-default\">Add Comment</button><br><br>\n      <div *ngFor=\"let user of comments\">\n        <p>User: Unknown</p>\n        <p>{{user?.comentText}}</p>\n        <button (click)=\"deleteComment(user)\" class=\"btn btn-default\">delete</button>\n        <hr>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_comments__ = __webpack_require__("../../../../../src/app/models/comments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(routeTo, route, location, galleryserices, commentSerices) {
        this.routeTo = routeTo;
        this.route = route;
        this.location = location;
        this.galleryserices = galleryserices;
        this.commentSerices = commentSerices;
        this.editGallery = null;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (urlParameters) {
            _this.galleryId = urlParameters['id'];
        });
        this.galleryserices.getGalleryById(this.galleryId).subscribe(function (dataLastEmittedFromObserver) {
            _this.galleryPosts = dataLastEmittedFromObserver;
        });
        this.commentSerices.getCommentById(this.galleryId).subscribe(function (dataLastEmittedFromObserver) {
            _this.comments = dataLastEmittedFromObserver;
        });
    };
    DetailsComponent.prototype.addText = function (commentText) {
        if (commentText == '') {
            alert('please enter text!');
        }
        else {
            this.commentSerices.addComment((new __WEBPACK_IMPORTED_MODULE_3__models_comments__["a" /* Comments */](commentText)), this.galleryId);
        }
    };
    DetailsComponent.prototype.editPost = function (galleries) {
        $('#editPost').fadeIn();
        this.editGallery = galleries;
    };
    DetailsComponent.prototype.updateGallery = function (currentEdit) {
        $('#editPost').fadeOut();
        this.galleryserices.updateGallery(currentEdit);
    };
    DetailsComponent.prototype.deleteComment = function (comment) {
        if (confirm("Are you sure yoy want to delete this Comment?")) {
            this.commentSerices.deleteUsercomment(comment, this.galleryId);
        }
    };
    DetailsComponent.prototype.deletePost = function () {
        if (confirm("Are you sure you want to delete this Post?")) {
            this.routeTo.navigate(['']);
            this.galleryserices.deletePost(this.galleryId);
            this.commentSerices.deleteAllComments(this.galleryId);
        }
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_5__services_comments_service__["a" /* CommentsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_5__services_comments_service__["a" /* CommentsService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " div[class=\"gallery\"] {\r\n  margin: 10px;\r\n  float: left;\r\n  width: 250px;\r\n}\r\ndiv[class=\"gallery\"] img {\r\n  width: 95%;\r\n  height: 260px;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\ndiv[class=\"nextAndPre\"]{\r\n\r\n}\r\ninput{\r\n  opacity: 00;\r\n}\r\n@media only screen and (max-width: 768px - min-width: 500px) {\r\n  div[class=\"wrap\"]{\r\n    margin-left: 80px\r\n  }\r\n}\r\n@media only screen and (max-width: 328px) {\r\n  div[class=\"gallery\"] {\r\n   height: 0%;\r\n   width: 85%;\r\n   margin-bottom: 50px\r\n }\r\n div[class=\"wrap\"]{\r\n   margin-right: 20px\r\n }\r\n div[class=\"nextAndPre\"]{\r\n   margin-left: 50px;\r\n   margin-top: 50px\r\n }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  div[class=\"wrap\"]{\r\n    margin-left: 44px\r\n  }\r\n  div[class=\"nextAndPre\"]{\r\n    margin-left: 40px\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div class=\"wrap\">\n  <div *ngFor=\"let galleryPost of gallery\" class=\"gallery\" (click)=\"goToDetails(galleryPost)\">\n    <img src=\"{{galleryPost.url}}\">\n  </div>\n</div>\n<div class=\"nextAndPre\">\n  <div class=\"container\">\n    <button (click)=\"prevPage()\" [disabled]=\"!prevKeys?.length\" id=\"Prev\" class=\"btn btn-default\">Prev</button>\n    <button (click)=\"nextPage()\" [disabled]=\"!nextKey\" id=\"Next\" class=\"btn btn-default\">Next</button>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, galleryServices) {
        this.route = route;
        this.galleryServices = galleryServices;
        this.offset = 12;
        this.prevKeys = []; // for prev button
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getGallery();
    };
    HomeComponent.prototype.nextPage = function () {
        this.prevKeys.push(__WEBPACK_IMPORTED_MODULE_3_lodash__["first"](this.gallery)['$key']); // set current key as pointer for previous page
        this.getGallery(this.nextKey);
    };
    HomeComponent.prototype.prevPage = function () {
        var prevKey = __WEBPACK_IMPORTED_MODULE_3_lodash__["last"](this.prevKeys); // use last key in array
        this.prevKeys = __WEBPACK_IMPORTED_MODULE_3_lodash__["dropRight"](this.prevKeys); // then remove the last key in the array
        this.getGallery(prevKey);
    };
    HomeComponent.prototype.getGallery = function (key) {
        var _this = this;
        this.subscription = this.galleryServices.getGalleriesLimit('samplePost1', this.offset, key)
            .subscribe(function (gallery) {
            _this.gallery = __WEBPACK_IMPORTED_MODULE_3_lodash__["slice"](gallery, 0, _this.offset);
            _this.nextKey = __WEBPACK_IMPORTED_MODULE_3_lodash__["get"](gallery[_this.offset], '$key');
        });
    };
    HomeComponent.prototype.goToDetails = function (clickedPost) {
        this.route.navigate(['details', clickedPost.$key]);
    };
    ;
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/comments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
var Comments = /** @class */ (function () {
    function Comments(comentText) {
        this.comentText = comentText;
    }
    return Comments;
}());



/***/ }),

/***/ "../../../../../src/app/models/gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });
var Gallery = /** @class */ (function () {
    function Gallery(title, file, description) {
        this.title = title;
        this.file = file;
        this.description = description;
        this.createdAt = new Date();
    }
    return Gallery;
}());



/***/ }),

/***/ "../../../../../src/app/services/api-keys.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return masterFirebaseConfig; });
var masterFirebaseConfig = {
    apiKey: "AIzaSyDte6r6U72H0KMYF8WAt3gsz0qEY-JyC28",
    authDomain: "notebook-1de53.firebaseapp.com",
    databaseURL: "https://notebook-1de53.firebaseio.com",
    projectId: "notebook-1de53",
    storageBucket: "notebook-1de53.appspot.com",
    messagingSenderId: "622301705776"
};


/***/ }),

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = /** @class */ (function () {
    function CommentsService(database) {
        this.database = database;
        this.comments = database.list('comments');
    }
    CommentsService.prototype.getCommentById = function (galleryId) {
        return this.database.list("/comments/" + galleryId);
    };
    CommentsService.prototype.addComment = function (newComment, galleryId) {
        this.database.list("comments/" + galleryId).push(newComment);
    };
    CommentsService.prototype.deleteUsercomment = function (deleteComment, galleryId) {
        this.database.list("comments/" + galleryId).remove(deleteComment);
    };
    // this code is making sure all is deleted if post is deleted
    CommentsService.prototype.deleteAllComments = function (galleryId) {
        this.database.list("comments/" + galleryId).remove();
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryService = /** @class */ (function () {
    function GalleryService(database) {
        this.database = database;
        this.galleries = database.list('galleries');
    }
    GalleryService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
        var uploadTask = storageRef.child("galleries/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.addGallery(upload);
        });
    };
    GalleryService.prototype.addGallery = function (newGallery) {
        this.database.list("galleries/").push(newGallery);
    };
    // end of picture storage
    GalleryService.prototype.getGalleryById = function (galleryId) {
        return this.database.object("galleries/" + galleryId);
    };
    // original get galleires
    GalleryService.prototype.getGalleries = function () {
        return this.galleries;
    };
    GalleryService.prototype.getGalleriesLimit = function (postId, offset, startKey) {
        return this.database.list("galleries/", {
            query: {
                orderByKey: true,
                startAt: startKey,
                limitToFirst: offset + 1
            }
        });
    };
    GalleryService.prototype.updateGallery = function (galleryID) {
        var galleryEntryInFirebase = this.getGalleryById(galleryID.$key);
        galleryEntryInFirebase.update({ title: galleryID.title,
            description: galleryID.description });
    };
    GalleryService.prototype.deletePost = function (deletePost) {
        this.database.list("galleries/").remove(deletePost);
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  width: 50%;\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n}\r\ninput[type=\"file\"]{\r\n  background-color: blue;\r\n  width: 16.3%;\r\n  margin-top: 40px;\r\n  padding-top: 18px;\r\n  opacity: 0;\r\n}\r\nbutton{\r\n  background-color: #d8004f;\r\n  color: white;\r\n}\r\nbutton[id=\"fileBtn\"]{\r\n  margin-top: 2.5em;\r\n  border-radius: 8px;\r\n}\r\nbutton[id=\"fileBtn\"] p{\r\n  line-height: 0px;\r\n  margin-top: 18px;\r\n  width: 125px\r\n}\r\ndiv[class=\"bar\"]{\r\n  margin-top: 25px;\r\n}\r\ndiv[class=\"invisible\"]{\r\n  padding-bottom: 479px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" (click)=\"fileBtn()\" id=\"fileBtn\" class=\"btn btn-default\"><p>Upload File</p></button>\n<input type=\"file\" (change)=\"fileReader($event)\" accept=\"image/*\" id=\"filePressed\">\n<input #newTitle class='form-control' placeholder=\"Title\" maxlength=\"25\">\n<input #newDescription class='form-control' placeholder=\"Description\" maxlength=\"115\">\n<button (click)=\"submitForm(newTitle.value, newDescription.value)\" class=\"btn btn-default\" id=\"submit\"  [disabled]=\"!selectedFile\">Submit</button>\n<div *ngIf=\"currentUpload\" class=\"bar\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n  </div>\n    {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n</div>\n<div class=\"invisible\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_gallery__ = __webpack_require__("../../../../../src/app/models/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = /** @class */ (function () {
    function UploadComponent(galleryServices) {
        this.galleryServices = galleryServices;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.fileBtn = function () {
        $('#filePressed').click();
    };
    UploadComponent.prototype.fileReader = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UploadComponent.prototype.submitForm = function (newTitle, newDescription) {
        var file = this.selectedFile;
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_1__models_gallery__["a" /* Gallery */](newTitle, file, newDescription);
        this.galleryServices.pushUpload(this.currentUpload);
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map