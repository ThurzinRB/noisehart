var xoff = 0,yoff = 0,zoff = 0;
function setup() {
	createCanvas(400, 400);
  background(0);
}

function draw() {
	background(0,0,0);
  beginShape();
  noFill();
  stroke(255);
  //translate(width/2,height/2)
	for (a = 0; a < TWO_PI; a+=0.01) {
    xoff=cos(a);
    yoff=sin(a);
    r=1*map(noise(xoff,yoff,zoff),0,1,8,11);
    
		x=r*(16*sin(a)*sin(a)*sin(a))+width/2;
    y=-r*(13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a))+height/2;
    vertex(x,y);
		
		//xoff += 0.01;
	}
  endShape(CLOSE);
	zoff+=0.01
	//print(noise(x));
	//noLoop()
}