PImage bubble;

void setup()
{
 size(640,360);
 bubble = loadImage("sketches/bubble.jpg");
 background(0);
}
void draw()
{
 //image(jelly,0,0);
 //the more i < the faster it goes
 for (int i = 0; i < 100; i++)
 {
   float x = random(width);
   float y = random(height);
   color c = bubble.get(int(x),int(y));
   //fill(c,25); smooth
   fill(c);
   noStroke();
   ellipse(x,y,20,20);
 }
}
