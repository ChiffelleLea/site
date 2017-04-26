Bubble[] bubbles = new Bubble[100];

int total = 0;

void setup()
{
  size(640,360);
}

void mousePressed()
{
  bubbles[total] = new Bubble(random(10,80), mouseX, mouseY);
  total = total + 1;
}

void draw()
{
  background(255);
  for(int i = 0; i < total; i++)
  {
    bubbles[i].display();
    bubbles[i].ascend();
    //bubbles[i].top();
  }
}

class Bubble
{
  float x = mouseX;
  float y = mouseY;
  float diameter;
  float yspeed;
  int lifetime = 20;
  boolean life = true;

  Bubble(float tempD)
  {
    x = random(width);
    y = height;
    diameter = tempD;
    yspeed = random(0.2,2);
  }

  Bubble(float tempD, float px, float py)
  {
    x = px;
    y = py;
    diameter = tempD;
    yspeed = random(0.2,2);
  }

  Bubble(float tempD, float px, float py, boolean l)
  {
    life = l;
    x = px;
    y = py;
    diameter = tempD;
    yspeed = random(0.3,2);
  }

  void display()
  {
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(x,y,diameter,diameter);
  }

  void ascend(){
    y = y - yspeed;
    //x = x + random(-2);
  }

  void top()
  {
    if(y < -diameter/2)
    {
      y = height + diameter/2;
    }
  }
}
