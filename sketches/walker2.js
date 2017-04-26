Walker w;

void setup()
{
  size(640,360);
  w = new Walker();
  background(255);
}

void draw()
{
  w.walk();
  w.display();
}

class Walker
{
  int d = 10;
  float x,y;
  float tx,ty;
  float prevX, prevY;

  Walker()
  {
    tx = 1000;
    ty = 0;
    x = map(noise(tx),0,1,0,width);
    y = map(noise(ty),0,1,0,height);
  }

  void display()
  {
    stroke(1);
    fill(255);
    rect(prevX,prevY,d,d);
  }

  void walk()
  {
    prevX = x;
    prevY = y;

    x = map(noise(tx),0,1,0,width);
    y = map(noise(ty),0,1,0,height);

    tx += 0.01;
    ty += 0.01;
  }
}
