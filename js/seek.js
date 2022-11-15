//seek-rebirth_Beta by Tommy, 2022
//www.thomasjohnmartinez.com

let seeds = [];
let clock;
let amps = [];
let pans = [];
let simStart = false;
let counter = 0;
let texty = 400;
let i = 0;
let x = 0;

let amp1;
let amp2;
let amp3;
let amp4;
let amp5;
let amp6;
let amp7;
let amp8;
let amp9;
let amp10;
let amp11;
let amp12;
let amp13;
let amp14;
let amp15;
let amp16;
let amp17;
let amp18;
let amp19;
let amp20;
let amp21;
let amp22;
let amp23;
let amp24;

let pan1;
let pan2;
let pan3;
let pan4;
let pan5;
let pan6;
let pan7;
let pan8;
let pan9;
let pan10;
let pan11;
let pan12;
let pan13;
let pan14;
let pan15;
let pan16;
let pan17;
let pan18;
let pan19;
let pan20;
let pan21;
let pan22;
let pan23;
let pan24;
let textChoice = 0;
let texts = ["please let this not be abstract", "that it speaks to my peers and those that i respect", "falling asleep at the experimental music concert"];

let isMobile = false;

if(window.matchMedia("(max-width: 767px)").matches){
  isMobile = true;
  //console.log("mobile")
}

console.log
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function init() {
  if (!simStart) {
    document.querySelector('#button').innerHTML = 'restart system';
    startSound();
  }
  else {
    for (x = 0; x < seeds.length; x++) {
      seeds[x].pos.x = random(width);
      seeds[x].pos.y = random(height);
      //freqs[x].value = 0;
    }
  }
}

function startSound() {
  simStart = true;
  let WAContext = window.AudioContext || window.webkitAudioContext;
  let context = new WAContext();
  // Create gain node and connect it to audio output
  let outputNode = context.createGain();
  outputNode.connect(context.destination);

  let patcher;

  fetch("patch.export.json")
    .then((response) => response.json())
    // Use the fetched patcher to create a RNBO device
    .then((responseJson) => {

      patcher = responseJson;
      return RNBO.createDevice({
        context,
        patcher
      });
    })
    .then((device) => {
      // When the device is ready, connect it to audio output
      device.node.connect(outputNode);

      amp1 = device.parametersById.get("seedys/1/amp");
      amp2 = device.parametersById.get("seedys/2/amp");
      amp3 = device.parametersById.get("seedys/3/amp");
      amp4 = device.parametersById.get("seedys/4/amp");
      amp5 = device.parametersById.get("seedys/5/amp");
      amp6 = device.parametersById.get("seedys/6/amp");
      amp7 = device.parametersById.get("seedys/7/amp");
      amp8 = device.parametersById.get("seedys/8/amp");
      amp9 = device.parametersById.get("seedys/9/amp");
      amp10 = device.parametersById.get("seedys/10/amp");
      amp11 = device.parametersById.get("seedys/11/amp");
      amp12 = device.parametersById.get("seedys/12/amp");
      amp13 = device.parametersById.get("seedys/13/amp");
      amp14 = device.parametersById.get("seedys/14/amp");
      amp15 = device.parametersById.get("seedys/15/amp");
      amp16 = device.parametersById.get("seedys/16/amp");
      amp17 = device.parametersById.get("seedys/17/amp");
      amp18 = device.parametersById.get("seedys/18/amp");
      amp19 = device.parametersById.get("seedys/19/amp");
      amp20 = device.parametersById.get("seedys/20/amp");
      amp21 = device.parametersById.get("seedys/21/amp");
      amp22 = device.parametersById.get("seedys/22/amp");
      amp23 = device.parametersById.get("seedys/23/amp");
      amp24 = device.parametersById.get("seedys/24/amp");
      amps.push(amp1, amp2, amp3, amp4, amp5, amp6, amp7, amp8, amp9, amp10, amp11, amp12, amp13, amp14, amp15, amp16, amp17, amp18, amp19, amp20, amp21, amp22, amp23, amp24);

      pan1 = device.parametersById.get("seedys/1/pan");
      pan2 = device.parametersById.get("seedys/2/pan");
      pan3 = device.parametersById.get("seedys/3/pan");
      pan4 = device.parametersById.get("seedys/4/pan");
      pan5 = device.parametersById.get("seedys/5/pan");
      pan6 = device.parametersById.get("seedys/6/pan");
      pan7 = device.parametersById.get("seedys/7/pan");
      pan8 = device.parametersById.get("seedys/8/pan");
      pan9 = device.parametersById.get("seedys/9/pan");
      pan10 = device.parametersById.get("seedys/10/pan");
      pan11 = device.parametersById.get("seedys/11/pan");
      pan12 = device.parametersById.get("seedys/12/pan");
      pan13 = device.parametersById.get("seedys/13/pan");
      pan14 = device.parametersById.get("seedys/14/pan");
      pan15 = device.parametersById.get("seedys/15/pan");
      pan16 = device.parametersById.get("seedys/16/pan");
      pan17 = device.parametersById.get("seedys/17/pan");
      pan18 = device.parametersById.get("seedys/18/pan");
      pan19 = device.parametersById.get("seedys/19/pan");
      pan20 = device.parametersById.get("seedys/20/pan");
      pan21 = device.parametersById.get("seedys/21/pan");
      pan22 = device.parametersById.get("seedys/22/pan");
      pan23 = device.parametersById.get("seedys/23/pan");
      pan24 = device.parametersById.get("seedys/24/pan");
      pans.push(pan1, pan2, pan3, pan4, pan5, pan6, pan7, pan8, pan9, pan10, pan11, pan12, pan13, pan14, pan15, pan16, pan17, pan18, pan19, pan20, pan21, pan22, pan23, pan24);
    })
    .catch((err) => {
      console.error(err)
    });
}

function seed() {
  //has the seed found the egg?
  this.collected = 0;
  //what is the seed's unique ID - used for offsetting movements with the clock
  this.unique = random(60);
  this.xRail = 7;
  this.yRail = 7;
  //Epigenes alter given traits, each seed has a random set of epigenes
  this.epigeneA = random();
  this.epigeneB = random();
  this.epigeneC = random();
  this.epigeneD = random(700, 1200);
  //starting position and velocity of the seed
  this.pos = createVector(random(width), random(height));
  this.vel = createVector((random(1) * 2 - 1) * 1.2, (random(1) * 2 - 1) * 1.2);
  //look radius of seed (how far can it see in all directions)
  this.r = 10;
  this.x = random(10);
  this.y = random(10);
  //rotation stuff
  this.angle = 0;
  this.rotDir = ((random(1) * 2) - 1) * .1;
  //sound parameters
  this.freqy = round(random(800, 2000));
  this.pany = 0;

  this.update = function() {
    this.pos.add(this.vel);
    //update panning
    this.pany = round(map(this.pos.x, 0, width, 0., 1.), 2);
    //console.log(this.pany);
    if (clock % this.unique === 0)
    {
      //this.pany = 0;
      this.rotDir = ((random(1) * 2) - 1) * .03;
      if (this.epigeneB > round(random(), 2))
      {
        this.railX = 9;
        this.railY = this.railY * this.epigeneA;
      }
      else
      {
        this.railY = 9;
        this.railX = this.railX * this.epigeneA;
      }
    }
  }
  this.render = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    this.angle = this.angle + this.rotDir;
    noStroke();
    fill(255, 255, 255);
    point(this.x, this.y);
    pop();
  }
  this.edges = function () {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height +  this.r) {
      this.pos.y = -this.r;
    }
  }
}

let fontRegular, fontItalic, fontBold;
function preload() {
  fontRegular = loadFont('fonts/SnellRoundhand-01.ttf');
}

function setup(){
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.id("canvas")
  //create 24 notes/particles
  for (i = 0; i < 24; i++) {
    seeds.push(new seed());
  }
}

function draw(){
  //create a 60Hz clock
  clock = frameCount % 60;
  //console.log(clock);

  //clear();

  background(22);
  textFont(fontRegular);
  noStroke();
  textSize(72);
  fill(255, 255, 255);
  if(clock % 60 === 0 && simStart){
    counter++;
  }
  /*
  if (simStart === false){
    text('...', width/2, height/2);
  }
  if (counter < 5 && simStart) {
    text('system started', width/2, height/2);
  }
  if (counter >= 5 && counter < 9 ) {
    text('twenty four agents', width/2, height/2);
  }
  if (counter >= 9 && counter< 15) {
    text('having been formed', width/2, height/2);
  }

  if (counter >= 15 && counter < 21) {
    text('with unique disposition', width/2, height/2);
  }
  if (counter >= 21 && counter < 26) {
    text('and given certain advantage', width/2, height/2);
  }
  if (counter > 31)
  {
    counter = 0;
  }
  */
  for (let i = 0; i < seeds.length; i++) {
    seeds[i].render();
    seeds[i].update();
    seeds[i].edges();
    try{
      for (x = 0; x < seeds.length; x++)
      {
        if (x !== i && simStart)
        {
          //"awareness"! - in relation to others"
          d = dist(seeds[i].pos.x, seeds[i].pos.y, seeds[x].pos.x, seeds[x].pos.y);
          if (d < 300)
          {
            amps[i].value = .05;
            stroke(255, 0, 0);
            line(seeds[i].pos.x, seeds[i].pos.y, seeds[x].pos.x, seeds[x].pos.y);
          }
          else
          {
            amps[i].value = 0.;
          }
        }
      }
      pans[i].value = seeds[i].pany;
    }
    catch(error){}

  }
}
