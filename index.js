let options; //объект для хранения всех настроек вариаций

const colors0 = ["#10100f", "#b7b1a4", "#677f75", "#8d9a97", "#b7b1a4"];
const colors1 = ["#a29f9a", "#461109", "#20234f", "#0e0e0e", "#0e0e0e"];
const colors2 = ["#10100f", "#c6bdb2", "#c6bdb2", "#c6bdb2", "#a39a8f"];
const colors3 = ["#0a0910", "#a77248", "#a77248", "#753c24"];
const colors4 = ["#0a0910", "#285c9c", "#5e92a6", "#ac97b3"];
const colors5 = ["#a29f9a", "#6e090e", "#0e0e0e", "#0e0e0e", "#0e0e0e", "#0e0e0e", "#0e0e0e", "#0e0e0e"];
const colors6 = ["#aba59c", "#47443a", "#0e0e0e", "#0e0e0e"];

const var0 = {
  //обычный вариант
  varID: 0, //порядковый номер вариации
  pCount: 1100, //число партиклов
  iters: 1700, //число итераций
  generation: "point", //point,  line, circle, random
  thickness: 0.6,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(70, 140), //ширина рамки
  maxSpeed: 12,
  maxForce: 4,
  initialSpeed: 1, //начальная скорость партиклов при создании
  zeroParticleOffset: 3, //скорость нулевого партикла
  zeroParticleNoiseFactor: 500, //степень нойза движения нулевого партикла
  drawingWithLines: false, //рисовать линиями, false или true
  rotateLines: false, //вращать линии, если рисование линиями
  lengthMin: 5, //минимальная длина линий при рисовании
  lengthMax: 20, //максимальная длина линий при рисовании
  circleRadius: 700, //радиус круга при генерации по кругу
  colors: [colors0, colors2, colors3, colors4, colors6], //варианты цветов для данной вариации
};

const var0_1 = {
  //обычный вариант
  varID: 101,
  pCount: 1500,
  iters: 1700,
  generation: "point",
  thickness: 0.8,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(90, 120),
  maxSpeed: 22,
  maxForce: 10,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

const var0_2 = {
  //обычный вариант
  varID: 102,
  pCount: 1300,
  iters: 2000,
  generation: "point",
  thickness: 0.7,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(60, 150),
  maxSpeed: 10,
  maxForce: 5,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

const var1 = {
  //альбомная ориентация
  varID: 1,
  pCount: 1400,
  iters: 1900,
  generation: "point",
  thickness: 0.5,
  opac: 90,
  width: 900,
  height: 450,
  density: 6.4,
  border: getRandomBetween(90, 120),
  maxSpeed: 5,
  maxForce: 2,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors1, colors2, colors3, colors4, colors5, colors6],
};

const var1_1 = {
  //альбомная ориентация
  varID: 11,
  pCount: 1200,
  iters: 1800,
  generation: "point",
  thickness: 0.5,
  opac: 90,
  width: 900,
  height: 450,
  density: 6.4,
  border: getRandomBetween(80, 140),
  maxSpeed: 7,
  maxForce: 3,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors1, colors2, colors3, colors4, colors5, colors6],
};

const var1_3 = {
  //альбомная ориентация
  varID: 13,
  pCount: 1000,
  iters: 1200,
  generation: "point",
  thickness: 0.7,
  opac: 90,
  width: 900,
  height: 450,
  density: 6.4,
  border: getRandomBetween(60, 120),
  maxSpeed: 10,
  maxForce: 4,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors1, colors2, colors3, colors4, colors5, colors6],
};

const var1_4 = {
  //альбомная ориентация
  varID: 14,
  pCount: 1000,
  iters: 1200,
  generation: "point",
  thickness: 0.8,
  opac: 90,
  width: 900,
  height: 450,
  density: 6.4,
  border: getRandomBetween(60, 140),
  maxSpeed: 21,
  maxForce: 10,
  initialSpeed: 1,
  zeroParticleOffset: 1,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: true,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors1, colors2, colors3, colors4, colors5, colors6],
};

const var2 = {
  //вариант с генерацией по линии горизонта
  varID: 2,
  pCount: 1100,
  iters: 1900,
  generation: "line",
  thickness: 0.7,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(90, 130),
  maxSpeed: 8,
  maxForce: 3,
  initialSpeed: 3,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

const var2_1 = {
  //вариант с генерацией по линии горизонта
  varID: 21,
  pCount: 1000,
  iters: 1300,
  generation: "line",
  thickness: 0.8,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(90, 130),
  maxSpeed: 11,
  maxForce: 5,
  initialSpeed: 3,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

const var2_2 = {
  //вариант с генерацией по линии горизонта
  varID: 22,
  pCount: 1100,
  iters: 1300,
  generation: "line",
  thickness: 0.7,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(90, 130),
  maxSpeed: 18,
  maxForce: 9,
  initialSpeed: 3,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

const var2_3 = {
  //вариант с генерацией по линии горизонта
  varID: 23,
  pCount: 1000,
  iters: 1200,
  generation: "line",
  thickness: 0.8,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: getRandomBetween(80, 130),
  maxSpeed: 22,
  maxForce: 11,
  initialSpeed: 3,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 200,
  colors: [colors0, colors2, colors3, colors4],
};

// const var3 = {
//   //вариант рисования линиями
//   varID: 3,
//   pCount: 900,
//   iters: 400,
//   generation: "point",
//   thickness: 0.5,
//   opac: 20,
//   width: 900,
//   height: 450,
//   density: 7.2,
//   border: 110,
//   maxSpeed: 25,
//   maxForce: 15,
//   initialSpeed: 3,
//   zeroParticleOffset: 3,
//   zeroParticleNoiseFactor: 50,
//   drawingWithLines: true,
//   rotateLines: true,
//   lengthMin: 50,
//   lengthMax: 100,
//   circleRadius: 200,
//   colors: [colors1, colors6, colors5],
// };

// const var3_1 = {
//   //вариант рисования линиями
//   varID: 31,
//   pCount: 900,
//   iters: 400,
//   generation: "point",
//   thickness: 0.5,
//   opac: 20,
//   width: 900,
//   height: 450,
//   density: 7.2,
//   border: 100,
//   maxSpeed: 10,
//   maxForce: 5,
//   initialSpeed: 1,
//   zeroParticleOffset: 1,
//   zeroParticleNoiseFactor: 50,
//   drawingWithLines: true,
//   rotateLines: true,
//   lengthMin: 5,
//   lengthMax: 100,
//   circleRadius: 200,
//   colors: [colors6],
// };

// const var3_3 = {
//   //вариант рисования линиями
//   varID: 33,
//   pCount: 900,
//   iters: 400,
//   generation: "point",
//   thickness: 0.5,
//   opac: 20,
//   width: 900,
//   height: 450,
//   density: 7.2,
//   border: 110,
//   maxSpeed: 20,
//   maxForce: 10,
//   initialSpeed: 1,
//   zeroParticleOffset: 1,
//   zeroParticleNoiseFactor: 50,
//   drawingWithLines: true,
//   rotateLines: true,
//   lengthMin: 5,
//   lengthMax: 100,
//   circleRadius: 200,
//   colors: [colors6],
// };

// const var3_5 = {
//   //вариант рисования линиями
//   varID: 35,
//   pCount: 400,
//   iters: 400,
//   generation: "point",
//   thickness: 0.5,
//   opac: 20,
//   width: 900,
//   height: 450,
//   density: 7.2,
//   border: 100,
//   maxSpeed: 12,
//   maxForce: 5,
//   initialSpeed: 3,
//   zeroParticleOffset: 3,
//   zeroParticleNoiseFactor: 50,
//   drawingWithLines: true,
//   rotateLines: true,
//   lengthMin: 5,
//   lengthMax: 150,
//   circleRadius: 200,
//   colors: [colors2],
// };

const var5 = {
  //вариант с генерацией по кругу
  varID: 5,
  pCount: 900,
  iters: 1300,
  generation: "circle",
  thickness: 0.8,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: 60,
  maxSpeed: 1,
  maxForce: 0.13,
  initialSpeed: 1,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 500,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 400,
  colors: [colors2, colors3, colors6],
};

const var5_1 = {
  //вариант с генерацией по кругу
  varID: 51,
  pCount: 900,
  iters: 1200,
  generation: "circle",
  thickness: 0.8,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: 150,
  maxSpeed: 1,
  maxForce: 0.15,
  initialSpeed: 1,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 500,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 450,
  colors: [colors2, colors3, colors6],
}

const var5_2 = {
  //вариант с генерацией по кругу
  varID: 52,
  pCount: 900,
  iters: 1200,
  generation: "circle",
  thickness: 0.6,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: 110,
  maxSpeed: 1.5,
  maxForce: 0.3,
  initialSpeed: 1,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 500,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 350,
  colors: [colors2, colors3, colors0, colors6],
};

const var5_3 = {
  //вариант с генерацией по кругу
  varID: 53,
  pCount: 1200,
  iters: 1200,
  generation: "circle",
  thickness: 0.9,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: 60,
  maxSpeed: 26,
  maxForce: 13,
  initialSpeed: 1,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 300,
  colors: [colors2, colors3, colors0, colors4],
};

const var5_4 = {
  //вариант с генерацией по кругу
  varID: 54,
  pCount: 900,
  iters: 2500,
  generation: "circle",
  thickness: 0.7,
  opac: 90,
  width: 750,
  height: 950,
  density: 4.8,
  border: 60,
  maxSpeed: 4.1,
  maxForce: 1.6,
  initialSpeed: 1,
  zeroParticleOffset: 3,
  zeroParticleNoiseFactor: 50,
  drawingWithLines: false,
  rotateLines: false,
  lengthMin: 5,
  lengthMax: 100,
  circleRadius: 350,
  colors: [colors2, colors3],
};

//включаем либо все вариации, либо какую-то одну для тестов
 //const variations = [var0, var0_2, var0_1, var0_2, var1, var1_3, var1_4, var2, var2_3, var5, var5_1, var5_2, var5_3, var5_4];

const variations = [var1];

let particles = [];

let centerX, centerY;
let start;

let grainAmt = 15;

let colorInd;

let rnSeed;

function setup() {
  //start = Date.now();
  options = randomVariation();

  rnSeed = floor(fxrand() * 100000);
  // rnSeed = 1;
  noiseSeed(rnSeed);
  randomSeed(rnSeed);

  if (options.width == 750) {
    if (windowWidth < windowHeight / 1.26) {
      createCanvas(windowWidth / 1.05, (windowWidth * 1.26) / 1.05);
    } else createCanvas((windowHeight / 1.26) / 1.05, windowHeight / 1.05);
  } else if (options.width == 900) {
    if (windowHeight < windowWidth / 2) {
      createCanvas((windowHeight * 2) / 1.05, windowHeight / 1.05);
    } else createCanvas(windowWidth / 1.05, (windowWidth / 2) / 1.05);
  }

  buff = createGraphics(options.width, options.height);
  buff.pixelDensity(options.density);
  // createCanvas(options.width, options.height);
  pixelDensity(options.density);
  //buff.angleMode(DEGREES);
  //angleMode(DEGREES);
  buff.rectMode(CENTER);

  // console.log(width, height);

  colorInd = floor(fxrand() * options.colors.length);

  buff.background(options.colors[colorInd][0]);

  centerX = buff.width / 2 + getRandomBetween(-100, 100);
  centerY = buff.height / 2 + getRandomBetween(-100, 100);

  if (options.generation === "line") {
    createLinedParticles(getRandomBetween(550, 700), buff); //координата линии генерации по Y
  } else if (options.generation === "point") {
    createCenteredParticles(centerX, centerY);
  } else if (options.generation === "random") {
    createRandomParticles(buff);
  } else if (options.generation === "circle") {
    createCircularParticles(options.circleRadius, buff);
  }


  colorizeParticles(options.colors[colorInd], particles);

  for (let i = 0; i < options.iters; i++) {
    let off = options.zeroParticleOffset;
    let nFactor = options.zeroParticleNoiseFactor;

    particles[0].vel.x += map(
      noise(particles[0].pos.y / nFactor),
      0,
      1,
      -off,
      off
    );
    particles[0].vel.y += map(
      noise((particles[0].pos.x + 1000) / nFactor),
      0,
      1,
      -off,
      off
    );
    particles[0].update();
    particles[0].edges();
    //particles[0].show();

    for (let i = 1; i < particles.length; i++) {
      particles[i].seek(particles[i - 1]);
      //particle.follow(particles[i - 1]);
      particles[i].edges();
      particles[i].update();
      particles[i].show();
    }
  }

  //addGrain(grainAmt, buff);
  fxpreview();

}

function draw() {
  image(buff, 0, 0, width, height);
  // console.log(width, height);
}

function windowResized() {
  if (options.width == 750) {
    if (windowWidth < windowHeight / 1.26) {
      resizeCanvas(windowWidth / 1.05, (windowWidth * 1.26) / 1.05);
    } else resizeCanvas((windowHeight / 1.26) / 1.05, windowHeight / 1.05);
  } else if (options.width == 900) {
    if (windowHeight < windowWidth / 2) {
      resizeCanvas((windowHeight * 2) / 1.05, windowHeight / 1.05);
    } else resizeCanvas(windowWidth / 1.05, (windowWidth / 2) / 1.05);
  }
}

function keyPressed() {
  if (key == "s" || key == "S") {
    buff.save("Momentum.png");
  }
}

function createCenteredParticles(centerX, centerY) {
  for (let i = 0; i < options.pCount; i++) {
    let particle = new Particle(centerX, centerY);
    particle.vel = randomizedVector(); //p5.Vector.random2D();
    particle.vel.mult(options.initialSpeed);
    particles.push(particle);
  }
  particles[0].vel = createVector(0, 0);
}

function createRandomParticles(source) {
  for (let i = 0; i < options.pCount; i++) {
    let particle = new Particle(fxrand() * source.width, fxrand() * source.height);
    particle.vel = randomizedVector(); //p5.Vector.random2D();
    particle.vel.mult(options.initialSpeed);
    particles.push(particle);
  }
  particles[0].vel = createVector(0, 0);
}

function createCircularParticles(radius, source) {
  let step = TWO_PI / options.pCount;
  let start = fxrand() * TWO_PI;
  for (let a = start; a < start + TWO_PI; a += step) {
    let x = source.width / 2 + radius * cos(a);
    let y = source.height / 2 + radius * sin(a);

    let particle = new Particle(x, y);
    particle.vel = randomizedVector(); //p5.Vector.random2D();
    particle.vel.mult(options.initialSpeed);
    particles.push(particle);
  }
  particles[0].vel = createVector(0, 0);
}

function createLinedParticles(y, source) {
  let step = (source.width - 2 * options.border) / options.pCount;

  for (let x = options.border; x < source.width - options.border; x += step) {
    let particle = new Particle(x, y);
    particle.vel = randomizedVector(); //p5.Vector.random2D();
    particle.vel.mult(options.initialSpeed);
    particles.push(particle);
  }
  //particles[0].pos = createVector(source.width / 2, y);
  particles[0].vel = createVector(0, 0);

  // console.log(width, source.width);
}

function randomizedVector() {
  //return fromAngle(Math.random() * constants.TWO_PI)
  let angle = fxrand() * TWO_PI;
  let length = 1;
  let x = length * cos(angle);
  let y = length * sin(angle);
  return createVector(x, y);
}

function colorizeParticles(colors, particles) {
  let singleColorCount = ceil(particles.length / (colors.length - 1)); //сколько партиклов приходится на один цвет массива

  for (let i = 0; i < particles.length; i++) {
    let ind = floor(i / singleColorCount) + 1; //какой индекс у данного конкретного партикла (цвет фона не считаем)
    particles[i].color = transparentColor(colors[ind], options.opac);
  }
}

function transparentColor(col, opacity) {
  //прозрачная версия заданного цвета
  let r = red(col);
  let g = green(col);
  let b = blue(col);
  return color(r, g, b, opacity);
}

function randomVariation() {
  let varInd = floor(fxrand() * variations.length);
  //console.log(variations[varInd]);

  return variations[varInd];
}

function getRandomBetween(min, max) {
  return fxrand() * (max - min) + min;
}

function addGrain(amt, source) {
  source.loadPixels();
  const d = source.pixelDensity();
  const pixelsCount = 4 * (source.width * d) * (source.height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = map(fxrand(), 0, 1, -amt, amt);

    source.pixels[i + 0] = source.pixels[i + 0] + grainAmount;
    source.pixels[i + 1] = source.pixels[i + 1] + grainAmount;
    source.pixels[i + 2] = source.pixels[i + 2] + grainAmount;
  }
  source.updatePixels();
}