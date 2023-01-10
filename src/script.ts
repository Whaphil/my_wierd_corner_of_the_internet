import {changeText} from "./test"
const testButton = document.getElementById("test-button")!;
testButton.addEventListener("click",(event)=>changeText(testButton))