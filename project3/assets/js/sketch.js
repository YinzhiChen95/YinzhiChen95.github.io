
var images=[];
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

var input;

var canvas;
var bubbles=[];

function preload() {
  hammer = loadImage('assets/image/hammera.jpg');
}

function setup() {
 //create a canvas

  canvas=createCanvas(displayWidth*2/5,displayHeight,WEBGL);
  canvas.position(displayWidth*3/5,0);
  
 //create a link on text "hammer",when you pressed you can see a photo and a button
  var a= createA('#','Disabled Hammer');
  a.position(140,10);
  a.style('font-size','40pt');
  a.style('text-decoration','none');
  a.mousePressed(addPhoto);

  // var b= new Bubble(mouseX,mouseY);
  // bubbles.push(b);

  for (var i=0;i<20;i++){
     bubbles[i]=new Bubble();
  }

}

function addPhoto(){
  hammer=createImg('assets/image/hammera.jpg');
  images.push(hammer);//adding image to array
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
  
  input=createInput('xxxxxxxxx');
  input.changed(updateX);
  input.position(330,650);
}




function addApple(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  apple=createImg('assets/image/applea.png');
  // images.push(img2);//adding image to array
  apple.position(320,175);
  apple.size(140,140);
  apple.dragOver(remodis);
}

function addAngle(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  angle=createImg('assets/image/angle.png');
  // images.push(img2);//adding image to array
  angle.position(290,190);
  angle.size(180,180);
  angle.dragOver(remodis);
}

function addSponge(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  sponge=createImg('assets/image/sponge.png');
  // images.push(img2);//adding image to array
  sponge.position(290,190);
  sponge.size(180,180);
  sponge.dragOver(remodis);
}

function addGlasses(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  glasses=createImg('assets/image/glasses.png');
  // images.push(img2);//adding image to array
  glasses.position(290,190);
  glasses.size(180,180);
  glasses.dragOver(remodis);
}

function addBalloon(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  balloon=createImg('assets/image/balloon.png');
  // images.push(img2);//adding image to array
  balloon.position(290,150);
  balloon.size(180,180);
  balloon.dragOver(remodis);
}

function addCan(){  
// speaking in randomize voice 
   myVoice.setVoice(floor(random(myVoice.voices.length)));
   myVoice.speak('Disabled Hammer');
    
//click button add image
 
  can=createImg('assets/image/can.png');
  // images.push(img2);//adding image to array
  can.position(270,120);
  can.size(200,200);
  can.dragOver(remodis);
}





function remodis(){
  this.remove();
}




function updateX(){
  apple.position(input.value(),175);
}
function draw(){
  background(#8fd6f2);
  rotateY(frameCount * 0.01);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 30; i++){

      translate(mouseX,mouseY, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      texture(hammer);
      box(70, 80, 70); 
      pop();
    }
    pop();
  }

  


//   for (var i=0;i<bubbles.length;i++){
//   bubbles[i].move();
//   bubbles[i].display();
//   }

}



// function Bubble(){
//   // this.x=mouseX;
//   // this.y=mouseY;
//   this.x1=mouseX;
//   this.y1=mouseY;
//   this.x2=mouseX+10;
//   this.y2=mouseY+10;
//   this.cX=1;
//   this.cY=1;

//   this.display=function(){
//     line(this.x1,this.y1,this.x2,this.y2);
//   }

//    this.move=function(){
//     this.x2=this.x2+this.cX2;
//     this.y2=this.y2+this.cY2;

//     if(this.x2<displayWidth/2||this.x2>displayWidth){
//       this.cX*=-1;
//       }
//   if(this.y2<0||this.x2>displayHeight){
//       this.cY*=-1;
//      }
//     }
//   }

