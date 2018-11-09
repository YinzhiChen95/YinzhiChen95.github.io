
let disImage=[];

var hammer;
var apple;
var angle;
var sponge;
var glasses;
var balloon;
var can;


var myVoice = new p5.Speech();
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;

var count=0;

var canvas;
var balls=[];

//preload image 
function preload() {
 
  disImage[0]=loadImage('assets/image/hammera.jpg');
  disImage[1]=loadImage('assets/image/applea.png');
  disImage[2]=loadImage('assets/image/angle.png');
  disImage[3]=loadImage('assets/image/sponge.png');
  disImage[4]=loadImage('assets/image/glasses.png');
  disImage[5]=loadImage('assets/image/balloon.png');
  disImage[6]=loadImage('assets/image/can.png');

}


//create another canvas for 3D objects
new p5(function(p) {
    p.setup = function() {
      p.createCanvas(displayWidth*3/5,displayHeight, p.WEBGL); 
       // <--- WEBGL
    };
    p.draw = function(b) {
        p.background(143,214,242);
        p.rotateY(frameCount * 0.01);

       for(var j = 0; j < 5; j++){
       p.push();
        for(var i = 0; i < 10; i++){
//draw a series of moving box 
//the box has it's track.
//boxes will move according to mouse's position
      p.translate(mouseX,mouseY, i * 0.1);
      p.rotateZ(frameCount * 0.002);
      p.push();
      p.texture(disImage[count]);
      p.box(70, 80, 70); 
      p.pop();
    }
    p.pop();
  }
    };//if you knock space, the texture image will changed
    p.keyPressed=function(c){
      if(key=' '){
    count=count+1;

  }if(count>6){
    count=0;
  }
    }
  });


function setup() {

 //create a canvas
 
  canvas=createCanvas(displayWidth*2/5,displayHeight,P2D);
  canvas.position(displayWidth*3/5,0);
  
 //create a link on text "hammer",when you pressed you can see a photo and buttons
  var a= createA('#','Disabled Hammer');
  a.position(140,10);
  a.style('font-size','40pt');
  a.style('text-decoration','none');
  a.mousePressed(addPhoto);
  a.style('color','#6316db');

  //introduction
  var p0=createP('Click "Disabled Hammer".')
  p0.position(650,100);
  p0.style('font-size','25pt');
  p0.style('color','#6316db');
  var p1=createP('Use these items to destroy the function of the hammer!');
  p1.position(650,200);
  p1.style('font-size','25pt');
  p1.style('color','#6316db');
  var p2=createP('If you do not like something, you can delete by dragging it.');
  p2.position(650,350);
  p2.style('font-size','25pt');
  p2.style('color','#6316db');
  var p3=createP('Knock the space bar to change the animation on the left.');
  p3.position(650,550);
  p3.style('font-size','25pt');
  p3.style('color','#6316db');

  //for ellipse information
  for (var i=0;i<20;i++){
     balls[i]=new Ball();
  }
  
}

// you can click this buttom to 'disabled hammer'
function addPhoto(){
  //hammer appear
  hammer=createImg('assets/image/hammera.jpg');
  hammer.position(180,120);
  hammer.size(400,500);

  button1=createButton('apple?')
  button1.mousePressed(addApple);
  button1.position(570,300);
  button2=createButton('Angle iron?')
  button2.mousePressed(addAngle);
  button2.position(100,400);
  button3=createButton('Sponge?')
  button3.mousePressed(addSponge);
  button3.position(150,200);
  button4=createButton('Glasses?')
  button4.mousePressed(addGlasses);
  button4.position(550,500);
  button5=createButton('Balloon?')
  button5.mousePressed(addBalloon);
  button5.position(220,550);
  button6=createButton('Canned fish?')
  button6.mousePressed(addCan);
  button6.position(520,150);
}




function addApple(){  
 //using speech library 
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
  apple=createImg('assets/image/applea.png');
  apple.position(320,175);
  apple.size(140,140);
  apple.dragOver(remodis);//you can drag images to delete them
}

function addAngle(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
   angle=createImg('assets/image/angle.png');
   angle.position(290,190);
   angle.size(180,180);
   angle.dragOver(remodis);
}

function addSponge(){  
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
   sponge=createImg('assets/image/sponge.png');
   sponge.position(290,190);
   sponge.size(180,180);
   sponge.dragOver(remodis);
}

function addGlasses(){  
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
  glasses=createImg('assets/image/glasses.png');
  glasses.position(290,190);
  glasses.size(180,180);
  glasses.dragOver(remodis);
}

function addBalloon(){  
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
  balloon=createImg('assets/image/balloon.png');
  balloon.position(290,150);
  balloon.size(180,180);
  balloon.dragOver(remodis);
}

function addCan(){  
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
  can=createImg('assets/image/can.png');
  can.position(270,120);
  can.size(200,200);
  can.dragOver(remodis);
}
//drag image to delete them
function remodis(){
  this.remove();
}

function draw(){
  background(249,238,100);
  fill(143,214,242);

     for (var i=0;i<balls.length;i++){
  balls[i].move();
  balls[i].display();

}
}
//the ball will bounce back when they move to the endge of the screen
function Ball(){
  this.x=random(0,width);
  this.y=random(0,height);
  this.s=random(10,50);
  this.cX=1;
  this.cY=1;

  this.display=function(){
    ellipse(this.x,this.y,this.s,this.s);
  }

  this.move=function(){
    this.x=this.x+this.cX;
    this.y=this.y+this.cY;

    if(this.x<0||this.x>width){
      this.cX*=-1;
      }
  if(this.y<0||this.y>height){
      this.cY*=-1;
    }
  }
  }


