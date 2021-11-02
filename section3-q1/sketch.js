// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  size = 70
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
  size += 1;

  if(size >= 150){
    size = 70
  }
  if(keyIsDown(" ".charCodeAt(0))){
    count += 1
    size += 2
  }
}

//下の書き方の方がすっきりしたのですが、countとcycleの意味がなくなってしまいました。
//let size;

//function setup(){
  //createCanvas(200, 200);
  //size = 70;
//}

//function draw(){
  //background(160, 192, 255);
  // BLANK[1]
  //ellipse(width / 2, height / 2, size);
  //size += 1;

  //if(size >= 150){
    //size = 70;
  //}
  //if(keyIsDown(" ".charCodeAt(0))){
    //size += 2;
  //}
//}
