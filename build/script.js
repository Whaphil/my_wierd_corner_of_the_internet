"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
const testButton = document.getElementById("test-button");
testButton.addEventListener("click", (event) => (0, test_1.changeText)(testButton));
