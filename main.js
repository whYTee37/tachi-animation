import string from "./myCss.js";
// console.log(string)

let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let time = 30;
window.scrollTo(0, 999999);//控制PC端自动往下滚动
html.scrollTo(0, 99999);//控制移动端自动往下滚动
//
const run = function (){
    n+=1
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    html.innerText = string.substring(0, n + 1);//不要忘记html指代的是这个div元素：<div id="html">
    style.innerHTML = string.substring(0, n + 1);//让css样式style的内容为自定义
    window.scrollTo(0, 999999);//控制PC端自动往下滚动
}

const play = function (){
    return setInterval(run,time)
}

let id = setInterval(run,time);

btnPause.onclick=()=>{
    window.clearInterval(id);
}

btnPlay.onclick = ()=>{
    id = play();
}

btnFast.onclick = ()=>{
    window.clearInterval(id);
    time = 0;
    id = play();
}

btnNormal.onclick = ()=>{
    window.clearInterval(id);
    time = 30;
    id = play();
}

btnSlow.onclick = ()=>{
    window.clearInterval(id);
    time = 100;
    id = play();
}

btnShow.onclick=()=>{
    window.clearInterval(id);
    html.innerText = string;
    style.innerHTML = string;
}


// let step = () => {
//     setTimeout(() => {
//
//         html.innerText = string.substring(0, n + 1);;//不要忘记html指代的是这个div元素：<div id="html">
//         style.innerHTML = string.substring(0, n + 1);//让css样式style的内容为自定义
//         window.scrollTo(0, 999999);//控制PC端自动往下滚动
//         html.scrollTo(0, 99999);//控制移动端自动往下滚动
//
//         if (n < string.length - 1) {
//             n += 1;
//             step();
//
//         }
//
//     }, 0);
// }
//
// step();

