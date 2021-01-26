const windowHeight = 500;
const windowWidth = 500;
let sWeightMult = 1.0
let viewScale = 20.0;

function setup() {
	createCanvas(windowWidth, windowHeight);
  // push();
  // translate(windowWidth / 2, windowHeight / 2);
  // scale(1.0, -1.0)
  // drawCurve(10);
  // pop();
}

function draw() {
  background(100)
  grid();
  push();
  // grid();
  translate(windowWidth / 2, windowHeight / 2);
  scale(viewScale, viewScale);
  axes();
  // scale(3.0, -3.0)
  // drawCurve(10)
  pop();
	// ellipse(mouseX, mouseY, 20, 20);
}

function mouseWheel(event) {
  viewScale += event.delta
  if (viewScale <= 20.0) { viewScale = 20.0 }
}

const axes = () => {
  const axesNotches = 26;

  stroke(0)
  strokeWeight($s(2.0))
  // x axis
  line(-(windowWidth / 2), 0, windowWidth / 2, 0);

  _.range(axesNotches)
  // offset range to create negative notches
  .map(x => x - axesNotches / 2)
  .forEach(x => {
    line(x, $s(-5), x, $s(5));
  });

  // y axis
  line(0, -(windowHeight / 2), 0, windowHeight / 2);

  _.range(axesNotches)
  // offset range to create negative notches
  .map(y => y - axesNotches / 2)
  .forEach(y => {
    line($s(-5), y, $s(5), y);
  });
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
  strokeWeight(1)
  _.range(windowWidth / sampleRate)
    .map(x => {
      return (- (windowWidth / 2)) + (x * sampleRate)
    })
    .forEach(x => {
      console.log(x);
      const y = (0.002 * x ** 3) + (3 * x ** 2);
      curveVertex(x, y)
    });
  endShape()
}

const $s = x => x / viewScale