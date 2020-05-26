function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/album.component.ts":
  /*!******************************************!*\
    !*** ./src/app/album/album.component.ts ***!
    \******************************************/

  /*! exports provided: AlbumComponent */

  /***/
  function srcAppAlbumAlbumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () {
      return AlbumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlbumComponent = /*#__PURE__*/function () {
      function AlbumComponent() {
        _classCallCheck(this, AlbumComponent);
      }

      _createClass(AlbumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlbumComponent;
    }();

    AlbumComponent.ɵfac = function AlbumComponent_Factory(t) {
      return new (t || AlbumComponent)();
    };

    AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumComponent,
      selectors: [["app-album"]],
      decls: 26,
      vars: 0,
      consts: [[1, "main"], [1, "ia-container"], ["src", "/assets/img/album/pic1.jpg", "alt", "image01"], ["type", "radio", "name", "radio-set", "checked", "checked"], ["src", "/assets/img/album/pic2.jpg", "alt", "image02"], ["type", "radio", "name", "radio-set"], ["src", "/assets/img/album/pic3.jpg", "alt", "image03"], ["src", "/assets/img/album/pic4.jpg", "alt", "image04"], ["src", "/assets/img/album/pic5.jpg", "alt", "image05"], ["src", "/assets/img/album/pic6.jpg", "alt", "image06"], ["src", "/assets/img/album/pic7.jpg", "alt", "image07"], ["src", "/assets/img/album/pic8.jpg", "alt", "image07"]],
      template: function AlbumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".ia-container[_ngcontent-%COMP%] {\r\n    width: 985px;\r\n    height: 380px;\r\n\tmargin: 20px auto;\r\n\toverflow: hidden;\r\n\tbox-shadow: 1px 1px 4px rgba(0,0,0,0.08);\r\n\tborder: 7px solid rgba(255,255,255,0.6);\r\n}\r\n.ia-container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n\ttop: 0;\r\n\tleft: 50px; \r\n\twidth: 335px;\r\n    box-shadow: 0 0 0 1px rgba(255,255,255,0.6);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.ia-container[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%] {\r\n    position: relative;\r\n\tleft: 0 !important;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 50px; \r\n\theight: 100%;\r\n\tcursor: pointer;\r\n\tborder: 0;\r\n\tpadding: 0;\r\n    opacity: 0;\r\n\tz-index: 100;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{\r\n\twidth: 5px;\r\n\tleft: auto;\r\n\tright: 0px;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ figure[_ngcontent-%COMP%] {\r\n    left: 335px;\r\n    transition: all 0.7s ease-in-out;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tmargin-top: -30px;\r\n\tright: 20px;\r\n\tleft: 20px;\r\n\toverflow: hidden;\r\n\ttext-align: center;\r\n\tbackground: rgba(87, 73, 81, 0.3);\r\n\tline-height: 20px;\r\n\tfont-size: 18px;\r\n    opacity: 0;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 4px;\r\n\tfont-weight: 700;\r\n\tpadding: 20px;\r\n\tcolor: #fff;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + figcaption[_ngcontent-%COMP%], .ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:hover    + figcaption[_ngcontent-%COMP%]{\r\n\tbackground: rgba(87, 73, 81, 0);\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    transition: all 0.4s ease-in-out 0.5s;\r\n\topacity: 1;\r\n\ttop: 50%;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   #ia-selector-last[_ngcontent-%COMP%]:checked    + figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\ttransition-delay: 0.3s;\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover    + figcaption[_ngcontent-%COMP%] {\r\n\tbackground: rgba(87, 73, 81, 0.03);\r\n}\r\n.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ figure[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    z-index: 1;\r\n}\r\n@media screen and (max-width: 720px) {\r\n    .ia-container[_ngcontent-%COMP%] { \r\n\t\twidth: 540px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { \r\n\t\tleft: 40px; \r\n\t\twidth: 260px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n\t\twidth: 40px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ figure[_ngcontent-%COMP%] { \r\n\t\tleft: 260px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { \r\n\t\tfont-size: 16px; \r\n\t}\r\n}\r\n@media screen and (max-width: 520px) {\r\n    .ia-container[_ngcontent-%COMP%] { \r\n\t\twidth: 320px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { \r\n\t\tleft: 20px; \r\n\t\twidth: 180px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n\t\twidth: 20px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ figure[_ngcontent-%COMP%] { \r\n\t\tleft: 180px; \r\n\t}\r\n\t\r\n\t.ia-container[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { \r\n\t\tfont-size: 12px; \r\n\t\tletter-spacing: 2px; \r\n\t\tpadding: 10px; \r\n\t\tmargin-top: -20px; \r\n\t} \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGNBQWM7QUFDZDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsd0NBQXdDO0NBQ3hDLHVDQUF1QztBQUN4QztBQUVBO0lBQ0ksa0JBQWtCO0NBQ3JCLE1BQU07Q0FDTixVQUFVLEVBQUUsMkJBQTJCO0NBQ3ZDLFlBQVk7SUFDVCwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztBQUNaO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxXQUFXLEVBQUUsNEJBQTRCO0NBQ3pDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsU0FBUztDQUNULFVBQVU7SUFDUCxVQUFVO0NBQ2IsWUFBWTtDQUNaLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsVUFBVTtDQUNWLFVBQVU7QUFDWDtBQUNBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztBQUNwQztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGlDQUFpQztDQUNqQyxpQkFBaUI7Q0FDakIsZUFBZTtJQUNaLFVBQVU7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsV0FBVztDQUNYLHdDQUF3QztBQUN6QztBQUNBOztDQUVDLCtCQUErQjtBQUNoQztBQUNBO0lBQ0kscUNBQXFDO0NBQ3hDLFVBQVU7Q0FDVixRQUFRO0FBQ1Q7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJO0VBQ0YsWUFBWTtDQUNiOztDQUVBO0VBQ0MsVUFBVTtFQUNWLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUVBO0lBQ0k7RUFDRixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsWUFBWTtDQUNiOztDQUVBO0VBQ0MsV0FBVztDQUNaOztDQUVBO0VBQ0MsV0FBVztDQUNaOztDQUVBO0VBQ0MsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEIiwiZmlsZSI6InNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogYWxidW0gY3NzICovXHJcbi5pYS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk4NXB4O1xyXG4gICAgaGVpZ2h0OiAzODBweDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcblx0Ym9yZGVyOiA3cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG59XHJcblxyXG4uaWEtY29udGFpbmVyIGZpZ3VyZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDUwcHg7IC8qIHdpZHRoIG9mIHZpc2libGUgcGllY2UgKi9cclxuXHR3aWR0aDogMzM1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pYS1jb250YWluZXIgPiBmaWd1cmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlhLWNvbnRhaW5lciBpbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaWEtY29udGFpbmVyIGlucHV0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDUwcHg7IC8qIGp1c3QgY292ZXIgdmlzaWJsZSBwYXJ0ICovXHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXI6IDA7XHJcblx0cGFkZGluZzogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcblx0ei1pbmRleDogMTAwO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmlhLWNvbnRhaW5lciBpbnB1dDpjaGVja2Vke1xyXG5cdHdpZHRoOiA1cHg7XHJcblx0bGVmdDogYXV0bztcclxuXHRyaWdodDogMHB4O1xyXG59XHJcbi5pYS1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IGZpZ3VyZSB7XHJcbiAgICBsZWZ0OiAzMzVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaWEtY29udGFpbmVyIGZpZ2NhcHRpb24gc3BhbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNDAlO1xyXG5cdG1hcmdpbi10b3A6IC0zMHB4O1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdGxlZnQ6IDIwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogcmdiYSg4NywgNzMsIDgxLCAwLjMpO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59IFxyXG4uaWEtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgKyBmaWdjYXB0aW9uLFxyXG4uaWEtY29udGFpbmVyIGlucHV0OmNoZWNrZWQ6aG92ZXIgKyBmaWdjYXB0aW9ue1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoODcsIDczLCA4MSwgMCk7XHJcbn1cclxuLmlhLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgZmlnY2FwdGlvbiBzcGFuIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDAuNXM7XHJcblx0b3BhY2l0eTogMTtcclxuXHR0b3A6IDUwJTtcclxufVxyXG4uaWEtY29udGFpbmVyICNpYS1zZWxlY3Rvci1sYXN0OmNoZWNrZWQgKyBmaWdjYXB0aW9uIHNwYW4ge1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmlhLWNvbnRhaW5lciBpbnB1dDpob3ZlciArIGZpZ2NhcHRpb24ge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoODcsIDczLCA4MSwgMC4wMyk7XHJcbn1cclxuLmlhLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gZmlndXJlIGlucHV0e1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIC5pYS1jb250YWluZXIgeyBcclxuXHRcdHdpZHRoOiA1NDBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgZmlndXJlIHsgXHJcblx0XHRsZWZ0OiA0MHB4OyBcclxuXHRcdHdpZHRoOiAyNjBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgaW5wdXQgeyBcclxuXHRcdHdpZHRoOiA0MHB4OyBcclxuXHR9XHJcblx0XHJcblx0LmlhLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gZmlndXJlIHsgXHJcblx0XHRsZWZ0OiAyNjBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgZmlnY2FwdGlvbiBzcGFuIHsgXHJcblx0XHRmb250LXNpemU6IDE2cHg7IFxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgIC5pYS1jb250YWluZXIgeyBcclxuXHRcdHdpZHRoOiAzMjBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgZmlndXJlIHsgXHJcblx0XHRsZWZ0OiAyMHB4OyBcclxuXHRcdHdpZHRoOiAxODBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgaW5wdXQgeyBcclxuXHRcdHdpZHRoOiAyMHB4OyBcclxuXHR9XHJcblx0XHJcblx0LmlhLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gZmlndXJlIHsgXHJcblx0XHRsZWZ0OiAxODBweDsgXHJcblx0fVxyXG5cdFxyXG5cdC5pYS1jb250YWluZXIgZmlnY2FwdGlvbiBzcGFuIHsgXHJcblx0XHRmb250LXNpemU6IDEycHg7IFxyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDJweDsgXHJcblx0XHRwYWRkaW5nOiAxMHB4OyBcclxuXHRcdG1hcmdpbi10b3A6IC0yMHB4OyBcclxuXHR9IFxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album',
          templateUrl: './album.component.html',
          styleUrls: ['./album.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { AppData } from './AppData';//


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clientApp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _album_album_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./album/album.component */
    "./src/app/album/album.component.ts");
    /* harmony import */


    var _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./elevator/elevator.component */
    "./src/app/elevator/elevator.component.ts");
    /* harmony import */


    var _clock_clock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./clock/clock.component */
    "./src/app/clock/clock.component.ts");
    /* harmony import */


    var _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./birthday/birthday.component */
    "./src/app/birthday/birthday.component.ts"); //import $ from 'jquery';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_11__["AlbumComponent"], _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_12__["ElevatorComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_13__["ClockComponent"], _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_14__["BirthdayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_11__["AlbumComponent"], _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_12__["ElevatorComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_13__["ClockComponent"], _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_14__["BirthdayComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/birthday/birthday.component.ts":
  /*!************************************************!*\
    !*** ./src/app/birthday/birthday.component.ts ***!
    \************************************************/

  /*! exports provided: BirthdayComponent */

  /***/
  function srcAppBirthdayBirthdayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BirthdayComponent", function () {
      return BirthdayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BirthdayComponent = /*#__PURE__*/function () {
      function BirthdayComponent() {
        _classCallCheck(this, BirthdayComponent);
      }

      _createClass(BirthdayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BirthdayComponent;
    }();

    BirthdayComponent.ɵfac = function BirthdayComponent_Factory(t) {
      return new (t || BirthdayComponent)();
    };

    BirthdayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BirthdayComponent,
      selectors: [["app-birthday"]],
      decls: 32,
      vars: 0,
      consts: [["__fvdsurfcanyoninserted", "1", 1, "clickberry-extension", "clickberry-extension-standalone", "clickberry-extension", "clickberry-extension-standalone", "clickberry-extension", "clickberry-extension-standalone"], ["charset", "UTF-8"], ["content", "clickberry-extension-here"], ["href", "https://fonts.googleapis.com/css?family=Wendy+One", "rel", "stylesheet", "type", "text/css"], [1, "container"], [1, "balloon"]],
      template: function BirthdayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Happy Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u263A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "MIRI && AYELET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoZGF5L2JpcnRoZGF5LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n                font-family:'Wendy One', sans-serif;\n            }\n\t\t\t\n\t\t\tbody[_ngcontent-%COMP%] {\n  background-image: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 100, color-stop(0%, #374566), color-stop(100%, #010203));\n  background-image: -webkit-radial-gradient(#374566, #010203);\n  background-image: -moz-radial-gradient(#374566, #010203);\n  background-image: -o-radial-gradient(#374566, #010203);\n  background-image: radial-gradient(#374566, #010203);\n}\n            span[_ngcontent-%COMP%] {\n                text-transform: uppercase;\n            }\n            .container[_ngcontent-%COMP%] {\n                width: 800px;\n                height: 420px;\n                padding: 10px;\n                margin: 0 auto;\n                position: relative;\n            }\n            .balloon[_ngcontent-%COMP%] {\n                width: 738px;\n                margin: 0 auto;\n                padding-top: 30px;\n                position: relative;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 104px;\n                height: 140px;\n                background: rgba(182, 15, 97, 0.9);\n                border-radius: 0;\n                border-radius: 80% 80% 80% 80%;\n                margin: 0 auto;\n                position: absolute;\n                padding: 10px;\n                box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);\n                -webkit-transform-origin: bottom center;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n                background: rgba(182, 15, 97, 0.9);\n                left: 0;\n                box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);\n                -webkit-animation: balloon1 6s ease-in-out infinite;\n                -moz-animation: balloon1 6s ease-in-out infinite;\n                -o-animation: balloon1 6s ease-in-out infinite;\n                animation: balloon1 6s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1):before {\n                color: rgba(182, 15, 97, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n                background: rgba(242, 112, 45, 0.9);\n                left: 120px;\n                box-shadow: inset 10px 10px 10px rgba(222, 85, 14, 0.9);\n                -webkit-animation: balloon2 6s ease-in-out infinite;\n                -moz-animation: balloon2 6s ease-in-out infinite;\n                -o-animation: balloon2 6s ease-in-out infinite;\n                animation: balloon2 6s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2):before {\n                color: rgba(242, 112, 45, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n                background: rgba(45, 181, 167, 0.9);\n                left: 240px;\n                box-shadow: inset 10px 10px 10px rgba(35, 140, 129, 0.9);\n                -webkit-animation: balloon4 6s ease-in-out infinite;\n                -moz-animation: balloon4 6s ease-in-out infinite;\n                -o-animation: balloon4 6s ease-in-out infinite;\n                animation: balloon4 6s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3):before {\n                color: rgba(45, 181, 167, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n                background: rgba(190, 61, 244, 0.9);\n                left: 360px;\n                box-shadow: inset 10px 10px 10px rgba(173, 14, 240, 0.9);\n                -webkit-animation: balloon1 5s ease-in-out infinite;\n                -moz-animation: balloon1 5s ease-in-out infinite;\n                -o-animation: balloon1 5s ease-in-out infinite;\n                animation: balloon1 5s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4):before {\n                color: rgba(190, 61, 244, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n                background: rgba(180, 224, 67, 0.9);\n                left: 480px;\n                box-shadow: inset 10px 10px 10px rgba(158, 206, 34, 0.9);\n                -webkit-animation: balloon3 5s ease-in-out infinite;\n                -moz-animation: balloon3 5s ease-in-out infinite;\n                -o-animation: balloon3 5s ease-in-out infinite;\n                animation: balloon3 5s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5):before {\n                color: rgba(180, 224, 67, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(6) {\n                background: rgba(242, 194, 58, 0.9);\n                left: 600px;\n                box-shadow: inset 10px 10px 10px rgba(234, 177, 15, 0.9);\n                -webkit-animation: balloon2 3s ease-in-out infinite;\n                -moz-animation: balloon2 3s ease-in-out infinite;\n                -o-animation: balloon2 3s ease-in-out infinite;\n                animation: balloon2 3s ease-in-out infinite;\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(6):before {\n                color: rgba(242, 194, 58, 0.9);\n            }\n            .balloon[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before {\n                color: rgba(182, 15, 97, 0.9);\n                position: absolute;\n                bottom: -11px;\n                left: 52px;\n                content:\"\u25B2\";\n                font-size: 1em;\n            }\n            span[_ngcontent-%COMP%] {\n                font-size: 4.8em;\n                color: white;\n                position: relative;\n                top: 30px;\n                left: 50%;\n                margin-left: -27px;\n            }\n            \n            @-webkit-keyframes balloon1 {\n                0%, 100% {\n                    -webkit-transform: translateY(0) rotate(-6deg);\n                }\n                50% {\n                    -webkit-transform: translateY(-20px) rotate(8deg);\n                }\n            }\n            @-moz-keyframes balloon1 {\n                0%, 100% {\n                    -moz-transform: translateY(0) rotate(-6deg);\n                }\n                50% {\n                    -moz-transform: translateY(-20px) rotate(8deg);\n                }\n            }\n            @-o-keyframes balloon1 {\n                0%, 100% {\n                    -o-transform: translateY(0) rotate(-6deg);\n                }\n                50% {\n                    -o-transform: translateY(-20px) rotate(8deg);\n                }\n            }\n            @keyframes balloon1 {\n                0%, 100% {\n                    transform: translateY(0) rotate(-6deg);\n                }\n                50% {\n                    transform: translateY(-20px) rotate(8deg);\n                }\n            }\n            \n            @-webkit-keyframes balloon2 {\n                0%, 100% {\n                    -webkit-transform: translateY(0) rotate(6eg);\n                }\n                50% {\n                    -webkit-transform: translateY(-30px) rotate(-8deg);\n                }\n            }\n            @-moz-keyframes balloon2 {\n                0%, 100% {\n                    -moz-transform: translateY(0) rotate(6deg);\n                }\n                50% {\n                    -moz-transform: translateY(-30px) rotate(-8deg);\n                }\n            }\n            @-o-keyframes balloon2 {\n                0%, 100% {\n                    -o-transform: translateY(0) rotate(6deg);\n                }\n                50% {\n                    -o-transform: translateY(-30px) rotate(-8deg);\n                }\n            }\n            @keyframes balloon2 {\n                0%, 100% {\n                    transform: translateY(0) rotate(6deg);\n                }\n                50% {\n                    transform: translateY(-30px) rotate(-8deg);\n                }\n            }\n            \n            @-webkit-keyframes balloon3 {\n                0%, 100% {\n                    -webkit-transform: translate(0, -10px) rotate(6eg);\n                }\n                50% {\n                    -webkit-transform: translate(-20px, 30px) rotate(-8deg);\n                }\n            }\n            @-moz-keyframes balloon3 {\n                0%, 100% {\n                    -moz-transform: translate(0, -10px) rotate(6eg);\n                }\n                50% {\n                    -moz-transform: translate(-20px, 30px) rotate(-8deg);\n                }\n            }\n            @-o-keyframes balloon3 {\n                0%, 100% {\n                    -o-transform: translate(0, -10px) rotate(6eg);\n                }\n                50% {\n                    -o-transform: translate(-20px, 30px) rotate(-8deg);\n                }\n            }\n            @keyframes balloon3 {\n                0%, 100% {\n                    transform: translate(0, -10px) rotate(6eg);\n                }\n                50% {\n                    transform: translate(-20px, 30px) rotate(-8deg);\n                }\n            }\n            \n            @-webkit-keyframes balloon4 {\n                0%, 100% {\n                    -webkit-transform: translate(10px, -10px) rotate(-8eg);\n                }\n                50% {\n                    -webkit-transform: translate(-15px, 20px) rotate(10deg);\n                }\n            }\n            @-moz-keyframes balloon4 {\n                0%, 100% {\n                    -moz-transform: translate(10px, -10px) rotate(-8eg);\n                }\n                50% {\n                    -moz-transform: translate(-15px, 10px) rotate(10deg);\n                }\n            }\n            @-o-keyframes balloon4 {\n                0%, 100% {\n                    -o-transform: translate(10px, -10px) rotate(-8eg);\n                }\n                50% {\n                    -o-transform: translate(-15px, 10px) rotate(10deg);\n                }\n            }\n            @keyframes balloon4 {\n                0%, 100% {\n                    transform: translate(10px, -10px) rotate(-8eg);\n                }\n                50% {\n                    transform: translate(-15px, 10px) rotate(10deg);\n                }\n            }\n            h1[_ngcontent-%COMP%] {\n                position: relative;\n                top: 200px;\n                text-align: center;\n                color: white;\n                font-size: 3.5em;\n            }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirthdayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-birthday',
          templateUrl: './birthday.component.html',
          styleUrls: ['./birthday.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clock/clock.component.ts":
  /*!******************************************!*\
    !*** ./src/app/clock/clock.component.ts ***!
    \******************************************/

  /*! exports provided: ClockComponent */

  /***/
  function srcAppClockClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockComponent", function () {
      return ClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClockComponent = /*#__PURE__*/function () {
      function ClockComponent() {
        _classCallCheck(this, ClockComponent);

        this.timePassedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTimeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.FULL_DASH_ARRAY = 283;
        this.WARNING_THRESHOLD = 10;
        this.ALERT_THRESHOLD = 5;
        this.COLOR_CODES = {
          info: {
            color: "green"
          },
          warning: {
            color: "orange",
            threshold: this.WARNING_THRESHOLD
          },
          alert: {
            color: "red",
            threshold: this.ALERT_THRESHOLD
          }
        };
        this.TIME_LIMIT = 3600;
        this.timeLeft = this.TIME_LIMIT;
        this.timerInterval = null;
        this.remainingPathColor = this.COLOR_CODES.info.color;
      }

      _createClass(ClockComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.tryAgain && changes.tryAgain.currentValue) {
            this.TIME_LIMIT = 1800;
            this.startTimer();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startTimer();
        }
      }, {
        key: "onTimesUp",
        value: function onTimesUp() {
          this.onTimeEnd.emit();
          clearInterval(this.timerInterval);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this = this;

          document.getElementById("app").innerHTML = "\n      <div class=\"base-timer\">\n        <svg class=\"base-timer__svg\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g class=\"base-timer__circle\">\n            <circle class=\"base-timer__path-elapsed\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\n            <path\n              id=\"base-timer-path-remaining\"\n              stroke-dasharray=\"283\"\n              class=\"base-timer__path-remaining ".concat(this.remainingPathColor, "\"\n              d=\"\n                M 50, 50\n                m -45, 0\n                a 45,45 0 1,0 90,0\n                a 45,45 0 1,0 -90,0\n              \"\n            ></path>\n          </g>\n        </svg>\n        <span id=\"base-timer-label\" class=\"base-timer__label\">").concat(this.formatTime(this.timeLeft), "</span>\n      </div>\n      ");
          this.timerInterval = setInterval(function () {
            _this.timePassed = _this.timePassed += 1;

            _this.timePassedChange.emit(_this.timePassed);

            _this.timeLeft = _this.TIME_LIMIT - _this.timePassed;
            document.getElementById("base-timer-label").innerHTML = _this.formatTime(_this.timeLeft);

            _this.setCircleDasharray();

            _this.setRemainingPathColor(_this.timeLeft);

            if (_this.timeLeft === 0) {
              _this.onTimesUp();
            }
          }, 1000);
        }
      }, {
        key: "formatTime",
        value: function formatTime(time) {
          var minutes = Math.floor(time / 60); //let seconds = time % 60;

          var seconds = time % 60;

          if (seconds < 10) {
            seconds = +"0".concat(seconds);
          }

          return "".concat(minutes, ":").concat(seconds);
        }
      }, {
        key: "setRemainingPathColor",
        value: function setRemainingPathColor(timeLeft) {
          var _this$COLOR_CODES = this.COLOR_CODES,
              alert = _this$COLOR_CODES.alert,
              warning = _this$COLOR_CODES.warning,
              info = _this$COLOR_CODES.info;

          if (timeLeft <= alert.threshold) {
            document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
            document.getElementById("base-timer-path-remaining").classList.add(alert.color);
          } else if (timeLeft <= warning.threshold) {
            document.getElementById("base-timer-path-remaining").classList.remove(info.color);
            document.getElementById("base-timer-path-remaining").classList.add(warning.color);
          }
        }
      }, {
        key: "calculateTimeFraction",
        value: function calculateTimeFraction() {
          var rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
          return rawTimeFraction - 1 / this.TIME_LIMIT * (1 - rawTimeFraction);
        }
      }, {
        key: "setCircleDasharray",
        value: function setCircleDasharray() {
          var circleDasharray = "".concat((this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0), " 283");
          document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
        }
      }]);

      return ClockComponent;
    }();

    ClockComponent.ɵfac = function ClockComponent_Factory(t) {
      return new (t || ClockComponent)();
    };

    ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClockComponent,
      selectors: [["app-clock"]],
      inputs: {
        timePassed: "timePassed",
        tryAgain: "tryAgain"
      },
      outputs: {
        timePassedChange: "timePassedChange",
        onTimeEnd: "onTimeEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "app"]],
      template: function ClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2svY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUMiLCJmaWxlIjoic3JjL2FwcC9jbG9jay9jbG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY2xvY2sgY3NzIGlzIGluIHRoZSBnbG9iYWwgc3R5bGUuY3NzICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clock',
          templateUrl: './clock.component.html',
          styleUrls: ['./clock.component.css']
        }]
      }], function () {
        return [];
      }, {
        timePassed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tryAgain: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timePassedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onTimeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/elevator/elevator.component.ts":
  /*!************************************************!*\
    !*** ./src/app/elevator/elevator.component.ts ***!
    \************************************************/

  /*! exports provided: ElevatorComponent */

  /***/
  function srcAppElevatorElevatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElevatorComponent", function () {
      return ElevatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // <head>
    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    // </head>


    var ElevatorComponent = /*#__PURE__*/function () {
      function ElevatorComponent() {
        _classCallCheck(this, ElevatorComponent);
      }

      _createClass(ElevatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var current = 0;
          $(document).ready(function () {
            $("#floorSelect li").click(function () {
              floorSelect(this);
            });

            function floorSelect(myEvent) {
              var floor = parseInt($(myEvent).data("floor")),
                  height = floor * 20,
                  animate = Math.abs(current - floor) * 1000;
              if (floor == current) return;
              $("#rightDoor").removeClass("active-right");
              $("#leftDoor").removeClass("active-left");
              setTimeout(function () {
                $("#elevatorContainer").css("transition", "all " + animate + "ms linear");
                $("#elevatorContainer").css("bottom", height + "%");
                current = floor;
                setTimeout(function () {
                  $("#rightDoor").addClass("active-right");
                  $("#leftDoor").addClass("active-left");
                }, animate);
              }, 300);
            }
          });
        }
      }]);

      return ElevatorComponent;
    }();

    ElevatorComponent.ɵfac = function ElevatorComponent_Factory(t) {
      return new (t || ElevatorComponent)();
    };

    ElevatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElevatorComponent,
      selectors: [["app-elevator"]],
      decls: 22,
      vars: 0,
      consts: [["id", "canvas"], ["id", "floorSelect"], ["id", "elevatorLevel4", "data-floor", "4"], ["id", "elevatorLevel3", "data-floor", "3"], ["id", "elevatorLevel2", "data-floor", "2"], ["id", "elevatorLevel1", "data-floor", "1"], ["id", "elevatorLevel0", "data-floor", "0"], ["id", "building"], ["id", "elevatorShaft"], ["id", "elevatorContainer"], ["id", "strings"], ["id", "elevator"], ["id", "leftDoor", 1, "door", "active-left"], ["id", "rightDoor", 1, "door", "active-right"]],
      template: function ElevatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DE\u05E2\u05DC\u05D9\u05EA \u05D4\u05D6\u05DE\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "GL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#canvas[_ngcontent-%COMP%] {\n  position: fixed;\n  font-family: sans-serif;\n  width: 1000px;\n  height: 500px;\n  background: url(http://www.pictures-croatia.com/primosten/primosten-2m6e.jpg);\n  padding: 40px 0;\n  background-size: cover;\n  margin-top: 100px;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%] {\n  width: 64%;\n  background: unset;\n  height: 500px;\n  overflow: hidden;\n  box-shadow: unset;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%] {\n  background: #362E2B;\n  width: 33.33%;\n  height: 485px;\n  margin: 0 auto;\n  position: relative;\n  left: -110px;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 500px;\n  width: 100%;\n  bottom: 0;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%] {\n  height: 20%;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 -10px 0 #333;\n  background: url(http://www.riversideelevators.com/img/elevator_inside.jpg);\n  background-size: 100% 100%;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%]   .door[_ngcontent-%COMP%] {\n  background: #AAA;\n  width: 49%;\n  height: 100%;\n  top: 0;\n  position: absolute;\n  transition: all 300ms ease-in;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%]   .door#leftDoor[_ngcontent-%COMP%] {\n  left: 0;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%]   .door#rightDoor[_ngcontent-%COMP%] {\n  right: 0;\n  background: #999;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%]   .active-right[_ngcontent-%COMP%] {\n  right: -50% !important;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #elevator[_ngcontent-%COMP%]   .active-left[_ngcontent-%COMP%] {\n  left: -50% !important;\n}\n#canvas[_ngcontent-%COMP%]   #building[_ngcontent-%COMP%]   #elevatorShaft[_ngcontent-%COMP%]   #elevatorContainer[_ngcontent-%COMP%]   #strings[_ngcontent-%COMP%] {\n  height: 80%;\n  background: -moz-linear-gradient(left, transparent, transparent 10%, #AAA 10%, #AAA 30%, transparent 30%, transparent 40%, #CCC 40%, #CCC 60%, transparent 60%, transparent 70%, #999 70%, #999 90%, transparent 90%, transparent);\n  width: 75%;\n  margin: 0 auto;\n}\n#canvas[_ngcontent-%COMP%]   #floorSelect[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  background: #FFF;\n  width: 12%;\n  left: -6px;\n  height: 485px;\n  box-shadow: 0 0 5px #362E2B;\n  color: #320e96;\n  margin-top: 0px;\n}\n#canvas[_ngcontent-%COMP%]   #floorSelect[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50px;\n  float: left;\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid #AAA;\n  margin: 13px;\n  transition: all 300ms;\n  border-radius: 50%;\n  border: 2px solid #DDD;\n}\n#canvas[_ngcontent-%COMP%]   #floorSelect[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #656565;\n  color: #FFF;\n  cursor: pointer;\n  transition: all 300ms;\n}\n#canvas[_ngcontent-%COMP%]   #floorSelect[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n}\n#canvas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  width: 20%;\n  padding: 10px;\n  margin: 0 10%;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxldmF0b3IvQzpcXFVzZXJzXFxTaGltb24uV2VpbmVyLkdTVEVQU1xcU291cmNlXFxyZXBvc1xcUm9vdHNcXFdlYkFwcGxpY2F0aW9uMS9zcmNcXGFwcFxcZWxldmF0b3JcXGVsZXZhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbGV2YXRvci9lbGV2YXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNELGFBQUE7RUFDQyxhQUFBO0VBQ0EsNkVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FERUk7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ROO0FER007RUFFQyxtQkFBQTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESVE7RUFFQyxrQkFBQTtFQUNBLGFBQUE7RUFDQyxXQUFBO0VBQ0EsU0FBQTtBQ0hWO0FET1U7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7QUNOWjtBRE9ZO0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDTmQ7QURPYztFQUVBLE9BQUE7QUNOZDtBRFNjO0VBRUUsUUFBQTtFQUNDLGdCQUFBO0FDUmpCO0FEZWM7RUFFTSxzQkFBQTtBQ2RwQjtBRGlCYztFQUVFLHFCQUFBO0FDaEJoQjtBRHFCVTtFQUVMLFdBQUE7RUFDTSxrT0FBQTtFQUNDLFVBQUE7RUFDRixjQUFBO0FDcEJWO0FEOEJJO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzdCSjtBRGtDTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNoQ1I7QURrQ1E7RUFFSixtQkFBQTtFQUNNLFdBQUE7RUFDTixlQUFBO0VBQ0EscUJBQUE7QUNqQ0o7QUQwQ0U7RUFHRSxtQkFBQTtBQzFDSjtBRGlESTtFQUVELGNBQUE7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDaERKIiwiZmlsZSI6InNyYy9hcHAvZWxldmF0b3IvZWxldmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNjYW52YXMgeyAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICB3aWR0aDoxMDAwcHg7XHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3d3dy5waWN0dXJlcy1jcm9hdGlhLmNvbS9wcmltb3N0ZW4vcHJpbW9zdGVuLTJtNmUuanBnKTtcclxuICAgIHBhZGRpbmc6NDBweCAwIDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICAjYnVpbGRpbmcge1xyXG4gICAgIFxyXG4gICAgICB3aWR0aDo2NCU7XHJcbiAgICAgIGJhY2tncm91bmQ6dW5zZXQ7ICBcclxuICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIGJveC1zaGFkb3c6dW5zZXQ7XHJcbiAgICAgIFxyXG4gICAgICAjZWxldmF0b3JTaGFmdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICBiYWNrZ3JvdW5kOiMzNjJFMkI7XHJcbiAgICAgICAgd2lkdGg6MzMuMzMlO1xyXG4gICAgICAgIGhlaWdodDo0ODVweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0Oi0xMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAjZWxldmF0b3JDb250YWluZXIge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICNlbGV2YXRvciB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDoyMCU7ICAgICAgICBcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzowIC0xMHB4IDAgIzMzMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDp1cmwoaHR0cDovL3d3dy5yaXZlcnNpZGVlbGV2YXRvcnMuY29tL2ltZy9lbGV2YXRvcl9pbnNpZGUuanBnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICAgICAgICAgLmRvb3Ige1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojQUFBO1xyXG4gICAgICAgICAgICAgIHdpZHRoOjQ5JTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICYjbGVmdERvb3Ige1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJiNyaWdodERvb3Ige1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Izk5OTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUtcmlnaHQge1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICByaWdodDotNTAlICFpbXBvcnRhbnQ7ICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxlZnQ6LTUwJSAhaW1wb3J0YW50OyAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAjc3RyaW5ncyB7XHJcbiAgICBcclxuICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAxMCUsI0FBQSAxMCUsICNBQUEgMzAlLCB0cmFuc3BhcmVudCAzMCUsIHRyYW5zcGFyZW50IDQwJSwgI0NDQyA0MCUsICNDQ0MgNjAlLCB0cmFuc3BhcmVudCA2MCUsIHRyYW5zcGFyZW50IDcwJSwgIzk5OSA3MCUsICM5OTkgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIFxyXG4gIFxyXG4gICAgfVxyXG4gICAgI2Zsb29yU2VsZWN0IHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6I0ZGRjtcclxuICAgIHdpZHRoOjEyJTtcclxuICAgIGxlZnQ6LTZweDtcclxuICAgIGhlaWdodDogNDg1cHg7XHJcbiAgICBib3gtc2hhZG93OjAgMCA1cHggIzM2MkUyQjtcclxuICAgIGNvbG9yOiByZ2IoNTAsIDE0LCAxNTApO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBcclxuICAgICBcclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6NTBweDsgICAgIFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjQUFBO1xyXG4gICAgICAgIG1hcmdpbjoxM3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246YWxsIDMwMG1zO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgI0RERDtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiM2NTY1NjU7XHJcbiAgICAgICAgICBjb2xvcjojRkZGO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAzMDBtcztcclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgaDQge1xyXG4gICBcclxuICBcclxuICAgIG1hcmdpbjoyMHB4IDAgMTBweDs7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIH1cclxuICAgIHAge1xyXG4gICAgXHJcbiAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW46MCAxMCU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIH1cclxuICAiLCIjY2FudmFzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly93d3cucGljdHVyZXMtY3JvYXRpYS5jb20vcHJpbW9zdGVuL3ByaW1vc3Rlbi0ybTZlLmpwZyk7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4jY2FudmFzICNidWlsZGluZyB7XG4gIHdpZHRoOiA2NCU7XG4gIGJhY2tncm91bmQ6IHVuc2V0O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiB1bnNldDtcbn1cbiNjYW52YXMgI2J1aWxkaW5nICNlbGV2YXRvclNoYWZ0IHtcbiAgYmFja2dyb3VuZDogIzM2MkUyQjtcbiAgd2lkdGg6IDMzLjMzJTtcbiAgaGVpZ2h0OiA0ODVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTExMHB4O1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyICNlbGV2YXRvciB7XG4gIGhlaWdodDogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIC0xMHB4IDAgIzMzMztcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly93d3cucml2ZXJzaWRlZWxldmF0b3JzLmNvbS9pbWcvZWxldmF0b3JfaW5zaWRlLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyICNlbGV2YXRvciAuZG9vciB7XG4gIGJhY2tncm91bmQ6ICNBQUE7XG4gIHdpZHRoOiA0OSU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyICNlbGV2YXRvciAuZG9vciNsZWZ0RG9vciB7XG4gIGxlZnQ6IDA7XG59XG4jY2FudmFzICNidWlsZGluZyAjZWxldmF0b3JTaGFmdCAjZWxldmF0b3JDb250YWluZXIgI2VsZXZhdG9yIC5kb29yI3JpZ2h0RG9vciB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyICNlbGV2YXRvciAuYWN0aXZlLXJpZ2h0IHtcbiAgcmlnaHQ6IC01MCUgIWltcG9ydGFudDtcbn1cbiNjYW52YXMgI2J1aWxkaW5nICNlbGV2YXRvclNoYWZ0ICNlbGV2YXRvckNvbnRhaW5lciAjZWxldmF0b3IgLmFjdGl2ZS1sZWZ0IHtcbiAgbGVmdDogLTUwJSAhaW1wb3J0YW50O1xufVxuI2NhbnZhcyAjYnVpbGRpbmcgI2VsZXZhdG9yU2hhZnQgI2VsZXZhdG9yQ29udGFpbmVyICNzdHJpbmdzIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAxMCUsICNBQUEgMTAlLCAjQUFBIDMwJSwgdHJhbnNwYXJlbnQgMzAlLCB0cmFuc3BhcmVudCA0MCUsICNDQ0MgNDAlLCAjQ0NDIDYwJSwgdHJhbnNwYXJlbnQgNjAlLCB0cmFuc3BhcmVudCA3MCUsICM5OTkgNzAlLCAjOTk5IDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCk7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI2NhbnZhcyAjZmxvb3JTZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgd2lkdGg6IDEyJTtcbiAgbGVmdDogLTZweDtcbiAgaGVpZ2h0OiA0ODVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMzYyRTJCO1xuICBjb2xvcjogIzMyMGU5NjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuI2NhbnZhcyAjZmxvb3JTZWxlY3QgdWwgbGkge1xuICB3aWR0aDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcbiAgbWFyZ2luOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0RERDtcbn1cbiNjYW52YXMgI2Zsb29yU2VsZWN0IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY1NjU2NTtcbiAgY29sb3I6ICNGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuI2NhbnZhcyAjZmxvb3JTZWxlY3QgaDQge1xuICBtYXJnaW46IDIwcHggMCAxMHB4O1xufVxuI2NhbnZhcyBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAxMCU7XG4gIGNvbG9yOiAjRkZGO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElevatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-elevator',
          templateUrl: './elevator.component.html',
          styleUrls: ['./elevator.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../elevator/elevator.component */
    "./src/app/elevator/elevator.component.ts");
    /* harmony import */


    var _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../clock/clock.component */
    "./src/app/clock/clock.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../birthday/birthday.component */
    "./src/app/birthday/birthday.component.ts");
    /* harmony import */


    var _album_album_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../album/album.component */
    "./src/app/album/album.component.ts");

    function HomeComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-clock", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timePassedChange", function HomeComponent_div_37_Template_app_clock_timePassedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.timePassed = $event;
        })("onTimeEnd", function HomeComponent_div_37_Template_app_clock_onTimeEnd_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onFinish(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timePassed", ctx_r1.timePassed)("tryAgain", ctx_r1.tryAgain);
      }
    }

    function HomeComponent_div_42_app_birthday_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-birthday");
      }
    }

    function HomeComponent_div_42_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05DE\u05D5\u05E8\u05E9\u05D4 \u05D1\u05D1\u05E8\u05DB\u05D9\u05D4 \u05D0\u05D9\u05DA \u05E9\u05DB\u05D7\u05EA??! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D0\u05D9\u05E0\u05D3\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9 \u05D5\u05D3\u05D0\u05E8\u05E3 \u05DE\u05D4 \u05DC\u05D0 \u05D1\u05E8\u05D5\u05E8\u05E8?!?! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D0\u05EA \u05D1\u05D7\u05D9\u05D9\u05DD \u05DC\u05D0 \u05EA\u05D6\u05DB\u05E8\u05D9 \u05D0\u05EA \u05D6\u05D4?!?! \u05D0\u05D9\u05E0\u05D3\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9\u05D9 \u05D5\u05D3\u05D0\u05E8\u05E3 \u05DE\u05D4 \u05DC\u05D0 \u05D1\u05E8\u05D5\u05E8\u05E8?!?!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r24.q1Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_42_p_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E7\u05D5\u05DC\u05D5\u05DC\u05D5\u05DC\u05D5 \u05D0\u05EA \u05D1\u05D0\u05DE\u05EA \u05D9\u05D5\u05D3\u05E2\u05EA \u05E2\u05DC\u05D9 \u05D4\u05DB\u05DC!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_p_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DE\u05D9\u05E8\u05D5\u05E9 \u05E6\u05D9\u05E4\u05D9\u05EA\u05D9 \u05DE\u05DE\u05DA \u05DC100 \u05D0\u05D7\u05D5\u05D6! \u05E7\u05D7\u05D9 \u05D0\u05D5\u05D5\u05D9\u05E8.. .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_42_app_birthday_1_Template, 1, 0, "app-birthday", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D7\u05D9\u05D3\u05D5\u05DF \u05D4\u05D9\u05D5\u05DE\u05D5\u05DC\u05D3\u05EA!!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05D7\u05DC\u05E7 \u05E8\u05D0\u05E9\u05D5\u05DF - \u05E9\u05D0\u05DC\u05D5\u05EA \u05D9\u05D3\u05E2 \u05DB\u05DC\u05DC\u05D9 \u05E2\u05DC \u05E9\u05DE\u05E2\u05D5\u05DF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05E9\u05D0\u05DC\u05EA \u05E6\u05D1\u05D9\u05E8\u05D4. \u05D4\u05DE\u05D8\u05E8\u05D4 - \u05DC\u05D1\u05D3\u05D5\u05E7 \u05E2\u05D3 \u05DB\u05DE\u05D4 \u05D0\u05EA \u05DE\u05DB\u05D9\u05E8\u05D4 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05DC \u05D1\u05E2\u05DC\u05DA \u05D5\u05DE\u05E9\u05E4\u05D7\u05EA\u05D5 \u05D5\u05D1\u05E7\u05E9\u05E8 \u05E9\u05DC\u05E0\u05D5 \u05D1\u05DB\u05DC\u05DC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05E9\u05D9\u05DE\u05D9 \u05DC\u05D1! \u05D9\u05E9 \u05DC\u05DA \u05E8\u05E7 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D0\u05D7\u05D3 \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA. \u05D5\u05D0\u05DD \u05EA\u05D8\u05E2\u05D9 \u05DC\u05D0 \u05EA\u05E7\u05D1\u05DC\u05D9 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05DE\u05D4 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D6\u05D4\u05D5\u05EA \u05E9\u05DC \u05E9\u05DE\u05E2\u05D5\u05DF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_42_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.q1.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_42_p_23_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_42_p_24_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u05DE\u05D4 \u05D4\u05D0\u05D9\u05DE\u05DC \u05E9\u05DC \u05E9\u05DE\u05E2\u05D5\u05DF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_42_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.q2.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_div_42_p_28_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_42_p_29_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u05DE\u05D4 \u05E9\u05DD \u05D1\u05D9\u05EA \u05D4\u05E1\u05E4\u05E8 \u05D4\u05D9\u05E1\u05D5\u05D3\u05D9 \u05E9\u05E9\u05DE\u05E2\u05D5\u05DF \u05DC\u05DE\u05D3 \u05D1\u05D5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_42_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.q3.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomeComponent_div_42_p_33_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_div_42_p_34_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u05DE\u05D4 \u05E9\u05DD \u05D4\u05DB\u05DC\u05D1 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05E9\u05DE\u05E2\u05D5\u05DF \u05D1\u05E6\u05D1\u05D0?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_42_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.q4.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_div_42_p_38_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_div_42_p_39_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05DE\u05D4 \u05E9\u05DD \u05D4\u05DB\u05DC\u05D1 \u05D4\u05E9\u05E0\u05D9 \u05E9\u05DC \u05E9\u05DE\u05E2\u05D5\u05DF \u05D1\u05E6\u05D1\u05D0?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_42_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.q5.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HomeComponent_div_42_p_43_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_42_p_44_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_42_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.calculateQuestion1();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_div_42_p_47_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_div_42_p_48_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HomeComponent_div_42_p_49_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || !ctx_r2.q1.ResultTrue && !ctx_r2.q2.ResultTrue && !ctx_r2.q3.ResultTrue && !ctx_r2.q4.ResultTrue && !ctx_r2.q5.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.q1.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q1.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q1.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.q2.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q2.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q2.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.q3.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q3.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q3.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.q4.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q4.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q4.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.q5.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q5.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.q5.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.q1Score > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q1Score > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q1.ResultTrue || ctx_r2.q2.ResultTrue || ctx_r2.q3.ResultTrue || ctx_r2.q4.ResultTrue || ctx_r2.q5.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allOpen || ctx_r2.q1.ResultFalse || ctx_r2.q2.ResultFalse || ctx_r2.q3.ResultFalse || ctx_r2.q4.ResultFalse || ctx_r2.q5.ResultFalse);
      }
    }

    function HomeComponent_div_43_video_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_p_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA . \u05D7\u05E9\u05D1\u05EA\u05DF \u05E9\u05D4\u05D2\u05E2\u05EA\u05DF \u05DC\u05D7\u05D9\u05D3\u05D5\u05DF \u05E4\u05E9\u05D5\u05D8 \u05D0\u05D4\u05D4?? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_p_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_26_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r45.q11.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_43_div_26_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05E0\u05D9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u05E7\u05D5\u05DE\u05D4 3 \u05D3\u05D9\u05E8\u05D4 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_div_26_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.q11.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_div_26_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.insertAnswer(11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_43_div_26_p_11_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_43_div_26_p_12_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.q11.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r37.q11.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.allOpen || ctx_r37.q11.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.allOpen || ctx_r37.q11.ResultFalse == true);
      }
    }

    function HomeComponent_div_43_app_album_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-album", 61);
      }
    }

    function HomeComponent_div_43_div_29_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r50.q12.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_43_div_29_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_div_29_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r52.q12.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_div_29_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.insertAnswer(12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_43_div_29_p_10_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_43_div_29_p_11_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.q12.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.q12.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.allOpen || ctx_r39.q12.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.allOpen || ctx_r39.q12.ResultFalse == true);
      }
    }

    function HomeComponent_div_43_video_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_31_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r55.q13.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_43_div_31_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D1\u05D9\u05E2\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DE\u05DE\u05D9 \u05EA\u05E7\u05D1\u05DC \u05E2\u05D5\u05DE\u05E8 \u05D0\u05D4\u05D1\u05D4 \u05D5\u05E0\u05E9\u05D9\u05E7\u05D5\u05EA?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_div_31_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r57.q13.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_div_31_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r59.insertAnswer(13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_43_div_31_p_11_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_43_div_31_p_12_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.q13.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r41.q13.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.allOpen || ctx_r41.q13.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.allOpen || ctx_r41.q13.ResultFalse == true);
      }
    }

    function HomeComponent_div_43_video_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_33_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r60.q14.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_43_div_33_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05D7\u05DE\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D0\u05D9\u05E4\u05D4 \u05D4\u05D9\u05EA\u05D4 \u05D0\u05DE\u05D0 \u05E9\u05DC\u05DB\u05DD \u05DB\u05E9\u05E6\u05D9\u05DC\u05DE\u05D4 \u05D0\u05EA \u05D4\u05E1\u05E8\u05D8\u05D5\u05DF?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_div_33_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.q14.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_div_33_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r64.insertAnswer(14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_43_div_33_p_11_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_43_div_33_p_12_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.q14.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r43.q14.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.allOpen || ctx_r43.q14.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.allOpen || ctx_r43.q14.ResultFalse == true);
      }
    }

    function HomeComponent_div_43_div_34_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r65.q17.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_43_div_34_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_43_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DE\u05D9 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05DE\u05E9\u05DE\u05D0\u05DC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_div_34_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r67.q17.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_div_34_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r69.insertAnswer(17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_43_div_34_p_11_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_43_div_34_p_12_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.q17.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r44.q17.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.allOpen || ctx_r44.q17.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.allOpen || ctx_r44.q17.ResultFalse == true);
      }
    }

    function HomeComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_43_video_4_Template, 2, 0, "video", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "audio", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DC\u05D9 \u05D1\u05E8\u05D9\u05E8\u05D4... \u05D0\u05DC\u05D0 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D0\u05D5\u05EA\u05DA \u05DC\u05DE\u05E2\u05DC\u05D9\u05EA \u05D4\u05D6\u05DE\u05DF \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D6\u05DB\u05D9\u05E8 \u05DC\u05DA \u05D0\u05EA \u05DB\u05DC \u05DE\u05D4 \u05E9\u05E9\u05DB\u05D7\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05E7\u05D5\u05DE\u05D4 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05DE\u05D9\u05E8\u05D9! \u05D0\u05EA \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05E2\u05E8\u05D5\u05DA \u05D0\u05D5\u05EA\u05D9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_43_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.q10.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_43_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.insertAnswer(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_43_p_24_Template, 2, 0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_43_p_25_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_43_div_26_Template, 13, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_div_43_app_album_27_Template, 1, 0, "app-album", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_43_div_29_Template, 12, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_43_video_30_Template, 2, 0, "video", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_div_43_div_31_Template, 13, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_div_43_video_32_Template, 2, 0, "video", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomeComponent_div_43_div_33_Template, 13, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_div_43_div_34_Template, 13, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || !ctx_r3.q10.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.q10.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.q10.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q10.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q10.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q10.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q11.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q11.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q12.ResultTrue && !ctx_r3.q13.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q12.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q13.ResultTrue && !ctx_r3.q14.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q13.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allOpen || ctx_r3.q14.ResultTrue);
      }
    }

    function HomeComponent_div_44_video_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_audio_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
      }
    }

    function HomeComponent_div_44_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r75.q20.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_44_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_24_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r82.q21.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_44_div_24_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05E0\u05D9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D4\u05E8\u05D1 \u05E6\u05D7\u05D9, \u05E9\u05DF, \u05E9\u05D5\u05EA\u05E4\u05D4 \u05DC\u05E4\u05E9\u05E2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_44_div_24_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r84.q21.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_44_div_24_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r86.insertAnswer(21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_44_div_24_p_11_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_44_div_24_p_12_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r77.q21.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r77.q21.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.allOpen || ctx_r77.q21.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.allOpen || ctx_r77.q21.ResultFalse == true);
      }
    }

    function HomeComponent_div_44_video_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_26_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r87.q22.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_44_div_26_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_44_div_26_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r89.q22.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_44_div_26_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r91.insertAnswer(22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_44_div_26_p_10_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_44_div_26_p_11_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r79.q22.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r79.q22.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.allOpen || ctx_r79.q22.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.allOpen || ctx_r79.q22.ResultFalse == true);
      }
    }

    function HomeComponent_div_44_video_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_28_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r92.q23.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_44_div_28_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_44_div_28_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r94.q23.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_44_div_28_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r96.insertAnswer(23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_44_div_28_p_10_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_44_div_28_p_11_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r81.q23.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r81.q23.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.allOpen || ctx_r81.q23.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.allOpen || ctx_r81.q23.ResultFalse == true);
      }
    }

    function HomeComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_44_video_3_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_44_audio_4_Template, 2, 1, "audio", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05E2\u05DC\u05D9\u05EA \u05E7\u05D5\u05DE\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E7\u05D5\u05DE\u05D4 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05DB\u05E0\u05E8\u05EA, \u05D0\u05DD \u05EA\u05DC\u05DA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_44_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.q20.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_44_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.insertAnswer(20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_44_p_22_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_44_p_23_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_44_div_24_Template, 13, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_44_video_25_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_44_div_26_Template, 12, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_div_44_video_27_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_div_44_div_28_Template, 12, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || !ctx_r4.q20.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || !ctx_r4.q20.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.q20.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.q20.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q20.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q20.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q20.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q21.ResultTrue && !ctx_r4.q22.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q21.ResultTrue && !ctx_r4.q22.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q22.ResultTrue && !ctx_r4.q23.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allOpen || ctx_r4.q22.ResultTrue && !ctx_r4.q23.ResultTrue);
      }
    }

    function HomeComponent_div_45_video_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_45_audio_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
      }
    }

    function HomeComponent_div_45_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r102.q30.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_45_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_45_video_3_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_45_audio_4_Template, 2, 1, "audio", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05E2\u05DC\u05D9\u05EA \u05E2\u05D5\u05D3 \u05E7\u05D5\u05DE\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05E7\u05D5\u05DE\u05D4 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05E1\u05D9\u05D8\u05D5\u05D0\u05E6\u05D9\u05D4 = \u05DE\u05E7\u05D5\u05DD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_45_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.q30.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_45_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.insertAnswer(30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_45_p_22_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_45_p_23_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.allOpen || ctx_r5.q23.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.allOpen || ctx_r5.q23.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.q30.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.q30.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.allOpen || ctx_r5.q30.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.allOpen || ctx_r5.q30.ResultFalse == true);
      }
    }

    function HomeComponent_div_46_video_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_audio_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
      }
    }

    function HomeComponent_div_46_div_5_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r110.q40.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_46_div_5_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_div_5_video_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_div_5_div_21_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r116.q41.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_46_div_5_div_21_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_div_5_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05E0\u05D9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_46_div_5_div_21_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r118.q41.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_div_5_div_21_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r120.insertAnswer(41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_46_div_5_div_21_p_10_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_46_div_5_div_21_p_11_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r113.q41.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r113.q41.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r113.allOpen || ctx_r113.q41.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r113.allOpen || ctx_r113.q41.ResultFalse == true);
      }
    }

    function HomeComponent_div_46_div_5_video_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_div_5_div_23_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4!! \u05D4\u05D5\u05E1\u05E4\u05EA ", ctx_r121.q45.Score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DC\u05DE\u05E9\u05E4\u05D7\u05EA \u05D5\u05D9\u05D9\u05E0\u05E8");
      }
    }

    function HomeComponent_div_46_div_5_div_23_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4!! \u05D1\u05D5\u05E9\u05D4\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_46_div_5_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05E9\u05D0\u05DC\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_46_div_5_div_23_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r123.q45.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_div_5_div_23_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          ctx_r125.insertAnswer(45);
          return ctx_r125.onFinish(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_46_div_5_div_23_p_10_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_46_div_5_div_23_p_11_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r115.q45.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r115.q45.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r115.allOpen || ctx_r115.q45.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r115.allOpen || ctx_r115.q45.ResultFalse == true);
      }
    }

    function HomeComponent_div_46_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05E2\u05DC\u05D9\u05EA \u05E2\u05D5\u05D3 \u05E7\u05D5\u05DE\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E7\u05D5\u05DE\u05D4 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05DC\u05E7\u05D7 \u05D0\u05D5\u05EA\u05D9 \u05D4\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_46_div_5_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r126.q40.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_div_5_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r128.insertAnswer(40);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_46_div_5_p_18_Template, 2, 1, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_46_div_5_p_19_Template, 2, 0, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_46_div_5_video_20_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_46_div_5_div_21_Template, 12, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_46_div_5_video_22_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_46_div_5_div_23_Template, 12, 4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r109.q40.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r109.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q40.ResultFalse == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q41.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.allOpen || ctx_r109.q41.ResultTrue);
      }
    }

    function HomeComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_46_video_3_Template, 2, 0, "video", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_46_audio_4_Template, 2, 1, "audio", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_46_div_5_Template, 24, 8, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.allOpen || ctx_r6.q30.ResultTrue && !ctx_r6.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.allOpen || ctx_r6.q30.ResultTrue && !ctx_r6.q40.ResultTrue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.allOpen || ctx_r6.q30.ResultTrue);
      }
    }

    function HomeComponent_div_47_app_birthday_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-birthday");
      }
    }

    function HomeComponent_div_47_audio_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_47_app_birthday_1_Template, 1, 0, "app-birthday", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_47_audio_2_Template, 2, 0, "audio", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.allOpen || ctx_r7.success && ctx_r7.finish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.allOpen || ctx_r7.success && ctx_r7.finish);
      }
    }

    function HomeComponent_div_48_video_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_48_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E0\u05D2\u05DE\u05E8 \u05D4\u05D6\u05DE\u05DF\u05DF\u05DF\u05DF\u05DF! \u05D7\u05DB\u05D9 \u05DC\u05E9\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4 \u05E1\u05EA\u05DD :) \u05E8\u05D5\u05E6\u05D4 \u05E2\u05D5\u05D3 \u05D6\u05DE\u05DF? \u05EA\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5 \u05DC\u05D9\u05D5\u05DD \u05E9\u05E8\u05D5\u05EA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_48_div_4_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r135.tryAgainAnswer.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_48_div_4_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r137.onTryAgain();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r132.tryAgainAnswer.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r132.tryAgainAnswer.ResultTrue);
      }
    }

    function HomeComponent_div_48_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D4\u05D5\u05D5\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05D4\u05E8\u05D5\u05D5\u05D7\u05EA ", ctx_r133.score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05DC\u05E7\u05D7 \u05DC\u05DA ", ctx_r133.calculateTimePassed(), "");
      }
    }

    function HomeComponent_div_48_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D4\u05D5\u05D5\u05D4!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_48_video_3_Template, 2, 0, "video", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_48_div_4_Template, 6, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_48_div_5_Template, 7, 2, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_48_div_6_Template, 4, 0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allOpen || ctx_r8.success && ctx_r8.finish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allOpen || ctx_r8.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allOpen);
      }
    }

    function HomeComponent_div_49_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E0\u05D2\u05DE\u05E8 \u05D4\u05D6\u05DE\u05DF\u05DF\u05DF\u05DF\u05DF! \u05D7\u05DB\u05D9 \u05DC\u05E9\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4 \u05E1\u05EA\u05DD :) \u05E8\u05D5\u05E6\u05D4 \u05E2\u05D5\u05D3 \u05D6\u05DE\u05DF? \u05EA\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5 \u05DC\u05D9\u05D5\u05DD \u05E9\u05E8\u05D5\u05EA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_49_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r141.tryAgainAnswer.AnswerText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_49_div_3_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r143.onTryAgain();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r139.tryAgainAnswer.AnswerText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r139.tryAgainAnswer.ResultTrue);
      }
    }

    function HomeComponent_div_49_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-birthday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D1\u05E8\u05DB\u05D5\u05EA\u05D9!! \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF \u05D7\u05D6\u05E8 \u05D0\u05DC\u05D9\u05DA :)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05DC\u05DB\u05D5 \u05DC\u05DE\u05D7\u05E1\u05DF \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05E1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05D4\u05E8\u05D5\u05D5\u05D7\u05EA ", ctx_r140.score, " \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05DC\u05E7\u05D7 \u05DC\u05DA ", ctx_r140.calculateTimePassed(), "");
      }
    }

    function HomeComponent_div_49_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_49_div_3_div_1_Template, 6, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_49_div_3_div_2_Template, 12, 2, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r138.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.success);
      }
    }

    function HomeComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_49_div_3_Template, 3, 2, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.allOpen || ctx_r9.finish);
      }
    } //import { AppData } from './../AppData';//
    //import {NgForm} from '@angular/forms';
    //import { AppData } from './AppData';


    var Question = function Question(q, qResultTrue, qResultFalse, realAnswer, score) {
      _classCallCheck(this, Question);

      this.AnswerText = q;
      this.ResultTrue = qResultTrue;
      this.ResultFalse = qResultFalse;
      this.RealAnswer = realAnswer;
      this.Score = score;
    };

    var HomeComponent = /*#__PURE__*/function () {
      //data = new AppData('');//
      function HomeComponent(http) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.dataFromServer = null;
        this.allOpen = false;
        this.q1 = new Question("", false, false, "305532475", 5);
        this.q2 = new Question("", false, false, "shimonweiner33@gmail.com", 5);
        this.q3 = new Question("", false, false, "מורשה", 5);
        this.q4 = new Question("", false, false, "אינדי", 5);
        this.q5 = new Question("", false, false, "דארף", 5);
        this.q10 = new Question("", false, false, "שחר", 5);
        this.q11 = new Question("", false, false, "אברהם בלסברג", 5); //אברהם בלסברג

        this.q12 = new Question("", false, false, "מעיין", 5);
        this.q13 = new Question("", false, false, "סבא וסבתא", 5); //עפ מילות השיר עומר עומר תבואה של סבא דוד

        this.q14 = new Question("", false, false, "בסלון", 5); //איפה מזל צילמה את הסרטון

        this.q17 = new Question("", false, false, "משה", 5); //נילי תמונה

        this.q20 = new Question("", false, false, "נטע רמות", 5);
        this.q21 = new Question("", false, false, "ליטל שלמה", 5);
        this.q22 = new Question("", false, false, "טוסטים", 5); //חידת וידאו של נעה כהן

        this.q23 = new Question("", false, false, "יט כסלו", 5); //חידת וידאו של עידה

        this.q30 = new Question("", false, false, "ים המלח", 5); //מיכל
        // q31: Question = new Question("", false, false, "ירדן", 5);

        this.q40 = new Question("", false, false, "סלים", 5); // קארין

        this.q41 = new Question("", false, false, "טון השוקו", 5); //ירדן

        this.q45 = new Question("", false, false, "סלט", 5); //ירדן

        this.tryAgainAnswer = new Question("", false, false, "טוב", 5);
        this.score = 0;
        this.q1Score = 0; //elevator instanse

        this.finish = false;
        this.success = false;
        this.tryAgain = false;
        this.timePassed = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(function (res) {
            _this2.dataFromServer = res;
            console.log('dataFromServer', _this2.dataFromServer);
          }); //   let audioPlayer: HTMLMediaElement = document.getElementById('audio1')
          //   document.getElementById('audio1').addEventListener("ended",function() {
          //     this.src = "song.php?nocache="+new Date().getTime();
          //     this.play();
          // });
        }
      }, {
        key: "calculateQuestion1",
        value: function calculateQuestion1() {
          this.q1Score = 0;

          for (var questionNum = 1; questionNum < 6; questionNum++) {
            this.insertAnswer(questionNum);
          }

          this.q1Score += this.score;
          this.clickOnelevatorBtn(1);
        }
      }, {
        key: "insertAnswer",
        value: function insertAnswer(questionNum) {
          var q = 'q' + questionNum;

          if (this[q].AnswerText == this[q].RealAnswer) {
            this.score += !this[q].ResultTrue ? this[q].Score : 0;
            this[q].ResultTrue = true;
            this[q].ResultFalse = false;
          } else {
            this[q].ResultTrue = false;
            this[q].ResultFalse = true;
          }

          if (this[q].ResultTrue) {
            this.clickOnelevatorBtn(questionNum);
          }
        }
      }, {
        key: "clickOnelevatorBtn",
        value: function clickOnelevatorBtn(questionNum) {
          if (questionNum == 1) {
            var level = 1;
            $('#elevatorLevel' + level).click(); // window.open('https://www.youtube.com/watch?v=hEC8pjzurLY','_blank');
            // window.focus();
          }

          if (questionNum == 17) {
            var level = 2;
            $('#elevatorLevel' + level).click();
          }

          if (questionNum == 23) {
            var level = 3;
            $('#elevatorLevel' + level).click();
          }

          if (questionNum == 30) {
            var level = 4;
            $('#elevatorLevel' + level).click();
          }
        }
      }, {
        key: "onFinish",
        value: function onFinish(isSuccess) {
          this.finish = true;
          this.success = isSuccess;
          this.tryAgain = false;
        }
      }, {
        key: "calculateTimePassed",
        value: function calculateTimePassed() {
          if (this.timePassed < 60) {
            return "".concat(this.timePassed, " \u05E9\u05E0\u05D9\u05D5\u05EA");
          } else {
            var minutes = parseInt(this.timePassed / 60 + "");
            var seconds = this.timePassed - minutes * 60;
            return "".concat(minutes, " \u05D3\u05E7\u05D5\u05EA \u05D5-").concat(seconds, " \u05E9\u05E0\u05D9\u05D5\u05EA");
          }
        }
      }, {
        key: "onTryAgain",
        value: function onTryAgain() {
          this.finish = false;
          this.tryAgain = true;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 54,
      vars: 12,
      consts: [["lang", "en", 1, "js", "cssanimations", "csstransforms", "csstransforms3d", "csstransitions"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Raleway"], [1, "w3-light-grey", "w3-content", "home", 2, "max-width", "1600px"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-animate-left", "w3-text-grey", "w3-collapse", "w3-top", "w3-center", 2, "z-index", "3", "width", "170px", "font-weight", "bold", "background-color", "aquamarine !important"], [1, "w3-padding-64", "w3-center"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-padding", "w3-hide-large"], ["href", "#", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button"], ["href", "#about", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button"], ["href", "#contact", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button"], ["href", "https://photos.google.com/share/AF1QipM3Yx0qTTGG9bl7v8S6siur3tJiBOEiRc4UKeuS4dZ95ocg5RrFVxVMlktrH0kFKQ?key=YXFXYS03dFBUSU90Tl9HUGhwZ1BSc2ZrZWZ1VEJn", "target", "_blank", "onclick", "w3_close()", "class", "w3-bar-item w3-button", 4, "ngIf"], [1, "w3-container", "w3-top", "w3-hide-large", "w3-white", "w3-xlarge", "w3-padding-16"], [1, "w3-left", "w3-padding"], ["href", "javascript:void(0)", "onclick", "w3_open()", 1, "w3-right", "w3-button", "w3-white"], ["onclick", "w3_close()", "title", "close side menu", "id", "myOverlay", 1, "w3-overlay", "w3-hide-large", "w3-animate-opacity", 2, "cursor", "pointer"], [1, "w3-main", 2, "margin-left", "170px"], [1, "w3-hide-large", 2, "margin-top", "83px"], [1, "w3-row"], [1, "w3-third"], ["style", "position: fixed;", 4, "ngIf"], ["fxFlex", "50", 3, "hidden"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 background1", "id", "about", 4, "ngIf"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 background2", "id", "about", 4, "ngIf"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 level2 background3", "id", "about", 4, "ngIf"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 level3 background4", "id", "about", 4, "ngIf"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 level4 background5", "id", "about", 4, "ngIf"], [4, "ngIf"], ["class", "w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32 level4 background6", "id", "about", 4, "ngIf"], [1, "w3-black", "w3-center", "w3-padding-24"], ["href", "", "title", "W3.CSS", "target", "_blank", 1, "w3-hover-opacity"], ["href", "https://photos.google.com/share/AF1QipM3Yx0qTTGG9bl7v8S6siur3tJiBOEiRc4UKeuS4dZ95ocg5RrFVxVMlktrH0kFKQ?key=YXFXYS03dFBUSU90Tl9HUGhwZ1BSc2ZrZWZ1VEJn", "target", "_blank", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button"], [2, "position", "fixed"], [3, "timePassed", "tryAgain", "timePassedChange", "onTimeEnd"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "background1"], [1, "w3-center"], ["fxLayout", "row"], [1, "w3-content", "w3-justify"], ["id", "contact", 1, "w3-container", "w3-light-grey", "w3-padding-32", "w3-padding-large"], [1, "w3-content", 2, "max-width", "600px"], [1, "question", 2, "text-align", "right"], [2, "color", "red"], [1, "w3-section"], [1, "question"], ["type", "text", "name", "Name", "required", "", 1, "w3-input", "w3-border", 3, "ngModel", "ngModelChange"], ["style", "color: blue", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], ["type", "submit", "href", "https://photos.google.com/share/AF1QipM3Yx0qTTGG9bl7v8S6siur3tJiBOEiRc4UKeuS4dZ95ocg5RrFVxVMlktrH0kFKQ?key=YXFXYS03dFBUSU90Tl9HUGhwZ1BSc2ZrZWZ1VEJn", "target", "_blank", 1, "w3-button", "w3-block", "w3-black", "w3-margin-bottom", 3, "disabled", "click"], [2, "color", "blue"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "background2"], [1, "level1"], ["class", "myVideo", "width", "400", "style", "margin-right: auto; margin-left: auto;", "autoplay", "", "controls", "", 4, "ngIf"], ["id", "audio1", "autoplay", "", "controls", "", 3, "hidden"], ["src", "/assets/audio/1.m4a", "type", "audio/mp3"], [1, "w3-center", 2, "color", "red"], ["type", "submit", 1, "w3-button", "w3-block", "w3-black", "w3-margin-bottom", 3, "disabled", "click"], ["class", "w3-container w3-light-grey w3-padding-32 w3-padding-large", "id", "contact", 4, "ngIf"], ["class", "myAlbum", 4, "ngIf"], ["width", "400", "autoplay", "", "controls", "", 1, "myVideo", 2, "margin-right", "auto", "margin-left", "auto"], ["src", "/assets/img/video/ido.mp4", "type", "video/mp4"], [1, "myAlbum"], ["src", "/assets/img/video/mazal.mp4", "type", "video/mp4"], ["src", "/assets/img/video/nili.mp4", "type", "video/mp4"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "level2", "background3"], ["class", "myVideo3", "width", "400", "style", "margin-right: auto; margin-left: auto;", "autoplay", "", "controls", "", 4, "ngIf"], ["id", "audio1", "autoplay", "", "controls", "", 3, "hidden", 4, "ngIf"], [1, "w3-center", 2, "color", "yellow"], ["width", "400", "autoplay", "", "controls", "", 1, "myVideo3", 2, "margin-right", "auto", "margin-left", "auto"], ["src", "/assets/img/video/lila.mp4", "type", "video/mp4"], ["src", "/assets/audio/2.m4a", "type", "audio/mp3"], ["src", "/assets/img/video/noa.mp4", "type", "video/mp4"], ["src", "/assets/img/video/ida.mp4", "type", "video/mp4"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "level3", "background4"], ["src", "/assets/img/video/michal.mp4", "type", "video/mp4"], ["src", "/assets/audio/3.m4a", "type", "audio/mp3"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "level4", "background5"], ["class", "level4", 4, "ngIf"], ["src", "/assets/img/video/karin.mp4", "type", "video/mp4"], ["src", "/assets/audio/4.m4a", "type", "audio/mp3"], [1, "level4"], ["src", "/assets/img/video/yarden.mp4", "type", "video/mp4"], ["src", "/assets/img/video/nir.mp4", "type", "video/mp4"], ["id", "audio1", "autoplay", "", "controls", "", 4, "ngIf"], ["id", "audio1", "autoplay", "", "controls", ""], ["src", "/assets/audio/Victory1.mp3", "type", "audio/mp3"], ["class", "myVideo3", "width", "400", "style", "margin-right: auto; margin-left: auto;", "controls", "", 4, "ngIf"], ["style", "position: relative; left: 187px;", 4, "ngIf"], ["width", "400", "controls", "", 1, "myVideo3", 2, "margin-right", "auto", "margin-left", "auto"], ["src", "/assets/img/video/finish.mp4", "type", "video/mp4"], ["required", "", 1, "w3-input", "w3-border", 3, "ngModel", "ngModelChange"], [2, "position", "relative", "left", "187px"], ["id", "about", 1, "w3-container", "w3-dark-grey", "w3-center", "w3-text-light-grey", "w3-padding-32", "level4", "background6"], ["class", "success", 4, "ngIf"], [1, "success"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W3.CSS Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05DE\u05E2\u05D1\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05E9\u05D0\u05DC\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CLOSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05E9\u05DC\u05D1 \u05D4\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA\u05D9\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ABOUT ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_a_26_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "header", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SOME NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_div_37_Template, 2, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-elevator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 50, 20, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HomeComponent_div_43_Template, 35, 14, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 29, 11, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HomeComponent_div_45_Template, 24, 6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 6, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_div_47_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_div_48_Template, 7, 4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HomeComponent_div_49_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Created By -- Shimon Weiner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "WEINER FAMILY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E6\u05D9\u05D5\u05DF - ", ctx.score, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.q13.ResultTrue && !ctx.q17.ResultTrue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.q1.ResultFalse || ctx.q1.ResultTrue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.q1.ResultFalse || ctx.q1.ResultTrue));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || !ctx.q1.ResultFalse && !ctx.q1.ResultTrue && !ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || (ctx.q1.ResultFalse || ctx.q1.ResultTrue) && !ctx.q17.ResultTrue && !ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.q17.ResultTrue && !ctx.q23.ResultTrue && !ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.q23.ResultTrue && !ctx.q30.ResultTrue && !ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.q30.ResultTrue && !ctx.q45.ResultTrue && !ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.success && ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || ctx.finish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOpen || !ctx.q45.ResultTrue);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_4__["ElevatorComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__["ClockComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _birthday_birthday_component__WEBPACK_IMPORTED_MODULE_7__["BirthdayComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_8__["AlbumComponent"]],
      styles: [".subQuestion[_ngcontent-%COMP%] {\r\n    text-align: right\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n    text-align: right\r\n}\r\n.home[_ngcontent-%COMP%]   .w3-dark-grey[_ngcontent-%COMP%]{\r\n\r\n    \r\n    \r\n    background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  background-size: 100% 100%;\r\n}\r\n.w3-dark-grey.background1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background1.jpg')!important;\r\n    background-size:cover\r\n}\r\n.w3-dark-grey.background2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.w3-dark-grey.background3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.w3-dark-grey.background4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.w3-dark-grey.background5[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.w3-dark-grey.background6[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.success[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/img/background2.jpg')!important;\r\n}\r\n.w3-justify[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    z-index:99;\r\n}\r\n.w3-input[_ngcontent-%COMP%]{\r\n    direction:RTL;\r\n}\r\n\r\n.myAlbum[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: -170px;\r\n}\r\n.myVideo[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n    \r\n    \r\n     left: 113px; \r\n\r\n}\r\n.myVideo3[_ngcontent-%COMP%] {\r\n    position: relative;\r\n     left: 0px; \r\n\r\n}\r\n.myVideo4[_ngcontent-%COMP%] {\r\n    position: relative;\r\n     left: 344px;\r\n}\r\n.w3-content[_ngcontent-%COMP%]{\r\n   max-width: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBRUE7O0lBRUksNENBQTRDO0lBQzVDLCtEQUErRDtJQUMvRCw0QkFBNEI7RUFDOUIsNEJBQTRCOztFQUU1QiwwQkFBMEI7QUFDNUI7QUFDQTtJQUNJLDhEQUE4RDtJQUM5RDtBQUNKO0FBQ0E7SUFDSSw4REFBOEQ7QUFDbEU7QUFDQTtJQUNJLDhEQUE4RDtBQUNsRTtBQUNBO0lBQ0ksOERBQThEO0FBQ2xFO0FBQ0E7SUFDSSw4REFBOEQ7QUFDbEU7QUFDQTtJQUNJLDhEQUE4RDtBQUNsRTtBQUVBO0lBQ0ksOERBQThEO0FBQ2xFO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7Ozs7O0dBS0c7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7S0FDakIsV0FBVzs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtLQUNqQixTQUFTOztBQUVkO0FBQ0E7SUFDSSxrQkFBa0I7S0FDakIsV0FBVztBQUNoQjtBQUNBO0dBQ0csZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViUXVlc3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLmhvbWUgLnczLWRhcmstZ3JleXtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWUgIWltcG9ydGFudDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvZmFtaWx5LmpwZycpIWltcG9ydGFudDsgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLnczLWRhcmstZ3JleS5iYWNrZ3JvdW5kMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDEuanBnJykhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyXHJcbn1cclxuLnczLWRhcmstZ3JleS5iYWNrZ3JvdW5kMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIuanBnJykhaW1wb3J0YW50O1xyXG59XHJcbi53My1kYXJrLWdyZXkuYmFja2dyb3VuZDN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQyLmpwZycpIWltcG9ydGFudDtcclxufVxyXG4udzMtZGFyay1ncmV5LmJhY2tncm91bmQ0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMi5qcGcnKSFpbXBvcnRhbnQ7XHJcbn1cclxuLnczLWRhcmstZ3JleS5iYWNrZ3JvdW5kNXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIuanBnJykhaW1wb3J0YW50O1xyXG59XHJcbi53My1kYXJrLWdyZXkuYmFja2dyb3VuZDZ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQyLmpwZycpIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQyLmpwZycpIWltcG9ydGFudDtcclxufVxyXG4udzMtanVzdGlmeXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6OTk7XHJcbn1cclxuLnczLWlucHV0e1xyXG4gICAgZGlyZWN0aW9uOlJUTDtcclxufVxyXG4vKiAudzMtYnV0dG9ue1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuY2FudmFzLnBhcnRpY2xlcy1qcy1jYW52YXMtZWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0gKi9cclxuXHJcbi5teUFsYnVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xNzBweDtcclxufVxyXG5cclxuXHJcbi5teVZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGxlZnQ6IDEwMHB4OyAqL1xyXG4gICAgLyogbGVmdDogMjc0cHg7ICovXHJcbiAgICAvKiBsZWZ0OiAtMjEwcHg7ICovXHJcbiAgICAgbGVmdDogMTEzcHg7IFxyXG5cclxufVxyXG4ubXlWaWRlbzMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGxlZnQ6IDBweDsgXHJcblxyXG59XHJcbi5teVZpZGVvNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgbGVmdDogMzQ0cHg7XHJcbn1cclxuLnczLWNvbnRlbnR7XHJcbiAgIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */", "body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    font-family: \"Raleway\", sans-serif\n  }\n\n  .w3-third[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: -6px;\n    opacity: 0.8;\n    cursor: pointer\n  }\n\n  .w3-third[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    opacity: 1\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.appTitle = 'כותרת';
      } //


      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 9,
      vars: 0,
      consts: [[1, "container", "topnav"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/contact"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: burlywood;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztBQUVGLHVEQUF1RDs7QUFDdkQ7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDhDQUE4Qzs7QUFDOUM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUEsdUNBQXVDOztBQUN2QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuLnRvcG5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi50b3BuYXYgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Shimon.Weiner.GSTEPS\Source\repos\Roots\WebApplication1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map