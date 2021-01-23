const windowHeight = 500;
const windowWidth = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(100);
  // push();
  // translate(windowWidth / 2, windowHeight / 2);
  // scale(1.0, -1.0)
  // drawCurve(10);
  // pop();
}

function draw() {
  grid();
  push();
  // grid();
  translate(windowWidth / 2, windowHeight / 2);
  axes();
  scale(1.0, -1.0)
  drawCurve(10)
  pop();
	// ellipse(mouseX, mouseY, 20, 20);
}

const axes = () => {
  stroke(0)
  strokeWeight(2)
  // x axis
  line(-200, 0, 200, 0);
  // y axis
  line(0, -200, 0, 200);
}

const grid = () => {
  stroke(50)
  for(let i = 0; i < windowWidth; i+=25) {
    line(0, 0 + i, windowWidth, 0 + i);
    line(0 + i, 0, 0 + i, windowHeight);
  }
}

const drawCurve = (sampleRate) => {
  console.log(windowWidth / sampleRate)
  beginShape()
  noFill();
  _.range(windowWidth / sampleRate)
    .map(x => {
      return (- (windowWidth / 2)) + (x * sampleRate)
    })
    .forEach(x => {
      console.log(x);
      const y = 0.002 * x ** 3 + 10;
      curveVertex(x, y)
    });
  endShape()
}