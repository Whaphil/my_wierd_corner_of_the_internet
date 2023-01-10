import {changeText} from "./test.js"
import helloWorld from "./also_test.js";
const changeTextButton = document.getElementById("change-text-button")!;
changeTextButton.addEventListener("click",(event)=>changeText(changeTextButton));
const helloWorldButton = document.getElementById("hello-world-button")!;
helloWorldButton.addEventListener("click",(event)=>helloWorld())