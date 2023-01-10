(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld() {
    alert("Hello World!");
}
exports.default = helloWorld;

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
const also_test_1 = __importDefault(require("./also_test"));
const changeTextButton = document.getElementById("change-text-button");
changeTextButton.addEventListener("click", (event) => (0, test_1.changeText)(changeTextButton));
const helloWorldButton = document.getElementById("hello-world-button");
helloWorldButton.addEventListener("click", (event) => (0, also_test_1.default)());

},{"./also_test":1,"./test":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeText = void 0;
function changeText(element) {
    element.textContent = "Test";
}
exports.changeText = changeText;

},{}]},{},[2]);
