class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.maxSpeed = options.maxSpeed;
      this.maxForce = options.maxForce;
      this.length = getRandomBetween(options.lengthMin, options.lengthMax);
    }
  
    seek(target) {
      let force = p5.Vector.sub(target.pos, this.pos);
      force.setMag(this.maxSpeed);
      force.sub(this.vel);
      force.limit(this.maxForce);
      this.applyForce(force);
    }
  
    follow(target) {
      let force = p5.Vector.sub(target.pos, this.pos);
      let desiredSpeed = this.maxSpeed;
  
      let slowRadius = 100;
      let distance = force.mag();
      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
      }
  
      force.setMag(desiredSpeed);
      force.sub(this.vel);
      force.limit(this.maxForce);
      this.applyForce(force);
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      // this.prevPos = this.pos.copy();
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }
  
    show() {
      if (options.drawingWithLines) {
        buff.stroke(this.color);
        buff.strokeWeight(options.thickness);
        buff.noFill();
  
        buff.push();
        buff.translate(this.pos.x, this.pos.y);
  
        if (options.rotateLines) {
          let angle = this.vel.heading();
          buff.rotate(angle);
        }
        buff.line(-this.length/2, 0, this.length/2, 0);
        buff.pop();
      } else {
        buff.noStroke();
        buff.fill(this.color);
        buff.rect(this.pos.x, this.pos.y, options.thickness, options.thickness);
      }
  
      //buff.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    }
  
    edges() {
      if (this.pos.x > buff.width - options.border) {
        this.pos.x = options.border;
      } else if (this.pos.x < options.border) {
        this.pos.x = buff.width - options.border;
      }
      if (this.pos.y > buff.height - options.border) {
        this.pos.y = options.border;
      } else if (this.pos.y < options.border) {
        this.pos.y = buff.height - options.border;
      }
    }
  }
  