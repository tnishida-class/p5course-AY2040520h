// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 26, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 26, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  fill(14, 47, 146);
  noStroke();
  ellipse(300, 100, 95, 95);
  fill(255);
  ellipse(293, 93, 90, 90);
  fill(22, 131, 46);
  ellipse(291, 91, 85, 85);
  fill(255);
  ellipse(289, 97, 80, 80);
  
}
