import {changeText} from "./test.js"
const testButton = document.getElementById("test-button");
testButton.addEventListener("click",(event)=>changeText(testButton))