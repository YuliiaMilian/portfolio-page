let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('/color_image.png');
  topImg = loadImage('/bw_image.png');
}
function setup() {
  createCanvas(1080, 1920);
  image(topImg, 0, 0);
}
function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 400, 400, mouseX, mouseY, 400, 400);
}