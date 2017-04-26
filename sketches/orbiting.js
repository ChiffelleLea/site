Mover[] m = new Mover[100];
int total = 0;

void setup()
{
  size(640,360);
}

void mousePressed()
{
  m [total] = new Mover();
  total = total + 1;
}

void draw()
{
  background(255);
  for(int i = 0; i < total; i++)
  {
    m[i].update();
    m[i].display();
  }
}

class Mover
{
  PVector location;
  PVector velocity;
  PVector acceleration;
  float size;
  color[] colors = new color[2];
  int colorCount = int(random(2));


  Mover()
  {
    location = new PVector(mouseX,mouseY);
    velocity = new PVector(0,0);
    acceleration = new PVector(0.01,0);
    size = (random(10,60));
  }

  void update()
  {
    PVector mouse = new PVector(mouseX,mouseY);
    mouse.sub(location);
    mouse.setMag(0.2);
    acceleration = mouse;

    velocity.add(acceleration);
    location.add(velocity);
    velocity.limit(5);
  }

  void display()
  {
    colors[0] = color(#ffb22d);
    colors[1] = color(#8dc4d5);

    noStroke();
    fill(colors[colorCount]);
    ellipse(location.x,location.y,size,size);
  }
}
