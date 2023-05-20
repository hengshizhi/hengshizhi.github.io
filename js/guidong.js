// 鼠标滚动
var Y = -500
var X = 100
anime({
    targets: '.el',
    translateY: Y,
    translateX: X,
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    // easing: 'easeInOutQuad'
  });
function 向(){
    console.log(Y);
    if (Y >= 60){
        return true
    }
    anime({
        targets: '.el',
        translateY: Y,
        translateX: 100,
        // left: '240px',
        // backgroundColor: '#FFF',
        // borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
      });
}
windowAddMouseWheel();
function windowAddMouseWheel() {
    let 移动变化量 = 40
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                Y += 移动变化量
                向()
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                Y -= 移动变化量
                向()
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                Y += 移动变化量
                向()
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                Y -= 移动变化量
                向()
            }
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
//滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
}