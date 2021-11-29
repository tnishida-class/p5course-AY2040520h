// 最終課題を制作しよう
let balls = [];
let answer;
const g = 0.5;

function setup(){
  createCanvas(400, 400);
  answer = Number(window.prompt("あなたの現時点の取得単位数を入れてください"));
  for(let i = 0; i < answer; i++){
    balls.push({x: width / 2, y: 10, vx: random(-3, 3), vy: 0, grade: random(4)});
  }
}

function draw(){
  background(0);
  for(let i = 0; i < balls.length; i++){
    const b = balls[i];
    b.x += b.vx;
    b.y += b.vy;
    b.vy += g;
    b.x = constrain(b.x, 10, width - 10);
    b.y = constrain(b.y, 0, width - 10);
    ellipse(b.x, b.y, 20);
    if(b.grade > 3){
      textAlign(CENTER, CENTER);
      text("秀", b.x, b.y);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
