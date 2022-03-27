const string = `/* 你好，我叫YT,
* 接下来我用CSS的方式演示太极图的生成过程
* 首先创建一个div，将其变为圆形，然后通过提升黑色border-bottom
* 像素的思路构造出黑白分界：
*/
.yinYang{
    width: 600px;
    height: 600px;
    border-style: solid;
    background: #fff;
    border-color: #000;
    border-width: 10px 10px 300px 10px;
    border-radius: 100%;
    position: absolute;
    z-index: 10;
    transform: scale(0.65);

}
/*然后，通过伪元素before和after做出‘阴鱼’：*/
.yinYang::before{
    content: '';
    width: 290px;
    height: 290px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 100%;
    border-radius: 100%;
    border:110px solid #000;
    transform: translateY(-50%);
}
/*接着，通过伪元素after做出‘阳鱼’：*/
.yinYang::after{
    content: '';
    width: 290px;
    height: 290px;
    background: #000;
    position: absolute;
    right: 0;
    top: 100%;
    border-radius: 100%;
    border:110px solid #fff;
    transform: translateY(-50%);
}
/*接下来通过大小div叠加构建出八卦的外沿：*/
.bg-black{
    width:600px;
    height: 200px;
    background: #000000;
    position: relative;
}

.bg-black::before{
    content: '';
    box-sizing: content-box;
    width: 220px;
    border-left: 190px solid transparent;
    border-right: 190px solid transparent;
    border-bottom: 200px solid #000;
    position: absolute;
    left: 0;
    top: -200px;
}

.bg-black::after{
    content: '';
    box-sizing: content-box;
    width: 220px;
    border-left: 190px solid transparent;
    border-right: 190px solid transparent;
    border-top: 200px solid #000;
    position: absolute;
    left: 0;
    bottom: -200px;
}

.bg-white{
    width:570px;
    height: 190px;
    background: #ffffff;
    position: absolute;
}

.bg-white::before{
    content: '';
    box-sizing: content-box;
    width: 210px;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-bottom: 190px solid #ffffff;
    position: absolute;
    left: 0;
    top: -190px;
}

.bg-white::after{
    content: '';
    box-sizing: content-box;
    width: 210px;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-top: 190px solid #ffffff;
    position: absolute;
    left: 0;
    bottom: -190px;
}
/*快要成功了！现在添加八卦的八个卦象*/
.line{
    width: 90px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #000000;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.line:nth-child(1){
    width: 50px;
    bottom: 0;
}

.line:nth-child(2){
    width: 70px;
    bottom: 15px;
}

.line:nth-child(3){
    width: 90px;
    bottom: 30px;
}

.side{
    width: 100px;
    height: 100px;
    /*background: #ffffff;*/
    position: absolute;
    z-index: 9;
}

.side:nth-child(1){
    transform: rotate(0deg) translateY(-280px);
}

.side:nth-child(2){
    transform: rotate(45deg) translateY(-270px);
}

.side:nth-child(3){
    transform: rotate(90deg) translateY(-280px);
}

.side:nth-child(4){
    transform: rotate(135deg) translateY(-270px);
}

.side:nth-child(5){
    transform: rotate(180deg) translateY(-280px);
}

.side:nth-child(6){
    transform: rotate(225deg) translateY(-270px);
}

.side:nth-child(7){
    transform: rotate(270deg) translateY(-280px);
}

.side:nth-child(8){
    transform: rotate(315deg) translateY(-270px);
}
/*利用伪元素为每个卦象进行点缀，精确卦象的形态：*/
.split-line::before{
    content: '';
    width: 8px;
    height: 12px;
    display: block;
    background: #ffffff;
    position: absolute;
    left: 50%;
    margin-left: -4px;
    top: -12px;
}
/*成功了！加上animation动画让它动起来吧！*/
@keyframes yinYangRotate {
    from{
        transform: scale(0.65) rotate(0deg);
    }

    to{
        transform: scale(0.65) rotate(360deg);
    }

}

.yinYang{
    animation: yinYangRotate 10s infinite linear;
}`

export default string;