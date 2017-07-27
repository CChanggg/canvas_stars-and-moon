let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
// 修改了屏幕宽度和高度,不然默认
canvas.width = width;
canvas.height = height;
// 文件分离了，按照引入顺序
// 业务流程与类的封装分离
let moon = new Moon(context, width, height);
let star = new Stars(context, width, height, 200);
let count = 0;
const frame = () => {
  count++;
  if (count % 10 == 0) {
    star.blink();
  }
  moon.draw();
  star.draw();
  requestAnimationFrame(frame);
}
frame();
