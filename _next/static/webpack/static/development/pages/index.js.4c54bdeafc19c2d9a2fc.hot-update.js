webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Header/Header.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/Header/Header.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Header_header__1-VVS {\r\n  position: relative;\r\n  min-height: 60vh;\r\n  width: 100%;\r\n  background-image: linear-gradient(60deg, var(--primary), var(--secondary));\r\n  padding: 3em 2em;\r\n}\r\n\r\n.Header_header__1-VVS::after {\r\n  content: \"\";\r\n  background: url(\"/wave.svg\");\r\n  width: 100%;\r\n  height: 200px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n}\r\n\r\n.Header_container__2tga9 {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.Header_col__2IRZV {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1;\r\n}\r\n.Header_col__2IRZV:first-child {\r\n  justify-content: center;\r\n}\r\n\r\n.Header_avatar__WR3Pq {\r\n  border-radius: 50%;\r\n  margin-top: auto;\r\n  border: 5px solid #28169c;\r\n  position: relative;\r\n  z-index: 1;\r\n  align-self: flex-end;\r\n  width: 250px;\r\n}\r\n\r\n.Header_bigtitle__VR4R9 {\r\n  margin: 0;\r\n  font-family: \"mosk\", sans-serif;\r\n  font-weight: 900;\r\n  font-size: 3em;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: #252525;\r\n}\r\n.Header_bigtitle__VR4R9 > span,\r\n.Header_leadtext__1F0Ab > span {\r\n  color: #28169c;\r\n}\r\n\r\n.Header_leadtext__1F0Ab {\r\n  margin: 0;\r\n  font-size: 2.75em;\r\n  font-weight: 800;\r\n  color: #252525;\r\n}\r\n", "",{"version":3,"sources":["C:/Users/mimil/Documents/GitHub/milena-milicio/components/Header/Header.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,0EAA0E;EAC1E,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAO;AACT;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,+BAA+B;EAC/B,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,sBAAsB;EACtB,cAAc;AAChB;AACA;;EAEE,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB","file":"Header.module.css","sourcesContent":[".header {\r\n  position: relative;\r\n  min-height: 60vh;\r\n  width: 100%;\r\n  background-image: linear-gradient(60deg, var(--primary), var(--secondary));\r\n  padding: 3em 2em;\r\n}\r\n\r\n.header::after {\r\n  content: \"\";\r\n  background: url(\"/wave.svg\");\r\n  width: 100%;\r\n  height: 200px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.col {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n.col:first-child {\r\n  justify-content: center;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 50%;\r\n  margin-top: auto;\r\n  border: 5px solid #28169c;\r\n  position: relative;\r\n  z-index: 1;\r\n  align-self: flex-end;\r\n  width: 250px;\r\n}\r\n\r\n.bigtitle {\r\n  margin: 0;\r\n  font-family: \"mosk\", sans-serif;\r\n  font-weight: 900;\r\n  font-size: 3em;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: #252525;\r\n}\r\n.bigtitle > span,\r\n.leadtext > span {\r\n  color: #28169c;\r\n}\r\n\r\n.leadtext {\r\n  margin: 0;\r\n  font-size: 2.75em;\r\n  font-weight: 800;\r\n  color: #252525;\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"header": "Header_header__1-VVS",
	"container": "Header_container__2tga9",
	"col": "Header_col__2IRZV",
	"avatar": "Header_avatar__WR3Pq",
	"bigtitle": "Header_bigtitle__VR4R9",
	"leadtext": "Header_leadtext__1F0Ab"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix5QkFBeUIsdUJBQXVCLGtCQUFrQixpRkFBaUYsdUJBQXVCLEtBQUssc0NBQXNDLG9CQUFvQixxQ0FBcUMsa0JBQWtCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGNBQWMsbUNBQW1DLGtDQUFrQyxLQUFLLGtDQUFrQyxrQkFBa0Isd0JBQXdCLHFCQUFxQixvQkFBb0IsbUJBQW1CLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssb0NBQW9DLDhCQUE4QixLQUFLLCtCQUErQix5QkFBeUIsdUJBQXVCLGdDQUFnQyx5QkFBeUIsaUJBQWlCLDJCQUEyQixtQkFBbUIsS0FBSyxpQ0FBaUMsZ0JBQWdCLHdDQUF3Qyx1QkFBdUIscUJBQXFCLGdCQUFnQiw2QkFBNkIscUJBQXFCLEtBQUssdUVBQXVFLHFCQUFxQixLQUFLLGlDQUFpQyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxXQUFXLHlJQUF5SSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLDhEQUE4RCx5QkFBeUIsdUJBQXVCLGtCQUFrQixpRkFBaUYsdUJBQXVCLEtBQUssd0JBQXdCLG9CQUFvQixxQ0FBcUMsa0JBQWtCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGNBQWMsbUNBQW1DLGtDQUFrQyxLQUFLLG9CQUFvQixrQkFBa0Isd0JBQXdCLHFCQUFxQixvQkFBb0IsbUJBQW1CLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLGNBQWMsS0FBSyxzQkFBc0IsOEJBQThCLEtBQUssaUJBQWlCLHlCQUF5Qix1QkFBdUIsZ0NBQWdDLHlCQUF5QixpQkFBaUIsMkJBQTJCLG1CQUFtQixLQUFLLG1CQUFtQixnQkFBZ0Isd0NBQXdDLHVCQUF1QixxQkFBcUIsZ0JBQWdCLDZCQUE2QixxQkFBcUIsS0FBSywyQ0FBMkMscUJBQXFCLEtBQUssbUJBQW1CLGdCQUFnQix3QkFBd0IsdUJBQXVCLHFCQUFxQixLQUFLLE9BQU87QUFDbDRHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40YzU0YmRlYWZjMTljMmQ5YTJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9oZWFkZXJfXzEtVlZTIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgdmFyKC0tcHJpbWFyeSksIHZhcigtLXNlY29uZGFyeSkpO1xcclxcbiAgcGFkZGluZzogM2VtIDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9oZWFkZXJfXzEtVlZTOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3dhdmUuc3ZnXFxcIik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9jb250YWluZXJfXzJ0Z2E5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfY29sX18ySVJaViB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDEgMTtcXHJcXG59XFxyXFxuLkhlYWRlcl9jb2xfXzJJUlpWOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyX2F2YXRhcl9fV1IzUHEge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyODE2OWM7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfYmlndGl0bGVfX1ZSNFI5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9za1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMyNTI1MjU7XFxyXFxufVxcclxcbi5IZWFkZXJfYmlndGl0bGVfX1ZSNFI5ID4gc3BhbixcXHJcXG4uSGVhZGVyX2xlYWR0ZXh0X18xRjBBYiA+IHNwYW4ge1xcclxcbiAgY29sb3I6ICMyODE2OWM7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfbGVhZHRleHRfXzFGMEFiIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMi43NWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGNvbG9yOiAjMjUyNTI1O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9taW1pbC9Eb2N1bWVudHMvR2l0SHViL21pbGVuYS1taWxpY2lvL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMEVBQTBFO0VBQzFFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBTztBQUNUO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztFQUNULHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEJcIixcImZpbGVcIjpcIkhlYWRlci5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWluLWhlaWdodDogNjB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XFxyXFxuICBwYWRkaW5nOiAzZW0gMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3dhdmUuc3ZnXFxcIik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuLmNvbDpmaXJzdC1jaGlsZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmF2YXRhciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzI4MTY5YztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ3RpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9za1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMyNTI1MjU7XFxyXFxufVxcclxcbi5iaWd0aXRsZSA+IHNwYW4sXFxyXFxuLmxlYWR0ZXh0ID4gc3BhbiB7XFxyXFxuICBjb2xvcjogIzI4MTY5YztcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWR0ZXh0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMi43NWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGNvbG9yOiAjMjUyNTI1O1xcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18xLVZWU1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzJ0Z2E5XCIsXG5cdFwiY29sXCI6IFwiSGVhZGVyX2NvbF9fMklSWlZcIixcblx0XCJhdmF0YXJcIjogXCJIZWFkZXJfYXZhdGFyX19XUjNQcVwiLFxuXHRcImJpZ3RpdGxlXCI6IFwiSGVhZGVyX2JpZ3RpdGxlX19WUjRSOVwiLFxuXHRcImxlYWR0ZXh0XCI6IFwiSGVhZGVyX2xlYWR0ZXh0X18xRjBBYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==