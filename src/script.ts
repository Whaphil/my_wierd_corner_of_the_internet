import {changeText} from "./test"
import helloWorld from "./also_test";
const changeTextButton = document.getElementById("change-text-button")!;
changeTextButton.addEventListener("click",(event)=>changeText(changeTextButton));
const helloWorldButton = document.getElementById("hello-world-button")!;
helloWorldButton.addEventListener("click",(event)=>helloWorld())