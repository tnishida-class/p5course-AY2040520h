// 小手調べ
function setup(){
  createCanvas(100,100);
  for(let i = 0 - 1; i < 10; i++){
    // BLANK[1]
    noFill()
    if(i >= 0 && i <= 4){
      stroke(0, 0, 255);
    }
    else{
      stroke(255, 0, 0);
    }
    ellipse(50, 50, i*10 + 10);}
}
