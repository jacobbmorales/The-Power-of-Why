/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

var DynamicSearch = React.createClass({
  displayName: "DynamicSearch",


  // sets initial state
  getInitialState: function getInitialState() {
    return { searchString: '' };
  },

  // sets state, triggers render method
  handleChange: function handleChange(event) {
    // grab value form input box
    this.setState({ searchString: event.target.value });
    console.log("scope updated!");
  },

  render: function render() {

    var countries = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    // filter countries list by value from input box
    if (searchString.length > 0) {
      countries = countries.filter(function (country) {
        return country.name.toLowerCase().match(searchString);
      });
    }

    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Search!" }),
      React.createElement(
        "ul",
        null,
        countries.map(function (country) {
          return React.createElement(
            "li",
            null,
            country.name,
            " "
          );
        })
      )
    );
  }

});

// list of countries, defined with JavaScript object literals
var countries = [{ "name": "Sweden" }, { "name": "China" }, { "name": "Peru" }, { "name": "Czech Republic" }, { "name": "Bolivia" }, { "name": "Latvia" }, { "name": "Samoa" }, { "name": "Armenia" }, { "name": "Greenland" }, { "name": "Cuba" }, { "name": "Western Sahara" }, { "name": "Ethiopia" }, { "name": "Malaysia" }, { "name": "Argentina" }, { "name": "Uganda" }, { "name": "Chile" }, { "name": "Aruba" }, { "name": "Japan" }, { "name": "Trinidad and Tobago" }, { "name": "Italy" }, { "name": "Cambodia" }, { "name": "Iceland" }, { "name": "Dominican Republic" }, { "name": "Turkey" }, { "name": "Spain" }, { "name": "Poland" }, { "name": "Haiti" }];

ReactDOM.render(React.createElement(DynamicSearch, { items: countries }), document.getElementById('main'));

/***/ }
/******/ ]);